import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import DOMPurify from "https://esm.sh/isomorphic-dompurify@2.15.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Sanitize HTML content to prevent XSS attacks
function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'br', 'span'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
    ALLOW_DATA_ATTR: false,
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onsubmit']
  });
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.error("Missing authorization header");
      return new Response(
        JSON.stringify({ error: "Missing authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with user's auth token
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    // Verify the user is authenticated
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      console.error("Authentication failed:", authError?.message);
      return new Response(
        JSON.stringify({ error: "Invalid or expired token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify admin role using the has_role function
    const { data: isAdmin, error: roleError } = await supabaseClient.rpc("has_role", {
      _user_id: user.id,
      _role: "admin"
    });

    if (roleError) {
      console.error("Role check failed:", roleError.message);
      return new Response(
        JSON.stringify({ error: "Failed to verify permissions" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!isAdmin) {
      console.error(`User ${user.id} attempted to access AI assist without admin role`);
      return new Response(
        JSON.stringify({ error: "Insufficient permissions. Admin access required." }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { type, title, content } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    let systemPrompt = "";
    let userPrompt = "";

    if (type === "outline") {
      systemPrompt = `You are a professional blog content writer for Afrinexa Global Limited, a company that provides visa assistance, trade & investment services, talent recruitment, and marketplace solutions connecting Africa to the world. Generate well-structured HTML blog outlines.`;
      userPrompt = `Generate a detailed blog post outline in HTML format for the following topic: "${title}". 
      
Include:
- An engaging H2 heading
- 3-4 main sections with H3 subheadings
- Bullet points or numbered lists where appropriate
- A conclusion section
- Use <h2>, <h3>, <p>, <ul>, <ol>, <li> tags
- Make it relevant to African professionals, businesses, or travelers
- Keep it professional and informative`;
    } else if (type === "expand") {
      systemPrompt = `You are a professional blog content writer for Afrinexa Global Limited. Expand and improve the given blog content while maintaining the existing structure. Focus on making the content more detailed, engaging, and valuable for readers interested in Africa-global opportunities.`;
      userPrompt = `Expand and improve the following blog content. Add more detail, examples, and valuable information while maintaining the HTML structure:

${content}

Requirements:
- Keep the existing HTML structure
- Add more detailed paragraphs
- Include practical tips and examples
- Maintain a professional tone
- Make it informative for African professionals and businesses`;
    } else if (type === "headline") {
      systemPrompt = `You are a professional copywriter specializing in SEO-optimized headlines and meta descriptions. Create compelling titles and excerpts for blog posts about Africa-global business, visa, talent, and trade topics.`;
      userPrompt = `Based on this blog content, suggest an optimized headline and excerpt:

${content}

Respond in JSON format:
{
  "title": "SEO-optimized title (max 60 characters)",
  "excerpt": "Compelling meta description (max 160 characters)"
}`;
    }

    console.log(`AI request from user ${user.id}: type=${type}, timestamp=${new Date().toISOString()}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiContent = data.choices[0]?.message?.content || "";

    console.log(`AI response received successfully for user ${user.id}`);

    if (type === "headline") {
      try {
        const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          // Sanitize title and excerpt to prevent XSS
          return new Response(JSON.stringify({
            title: DOMPurify.sanitize(parsed.title, { ALLOWED_TAGS: [] }),
            excerpt: DOMPurify.sanitize(parsed.excerpt, { ALLOWED_TAGS: [] })
          }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
      } catch {
        // If JSON parsing fails, return the raw content
      }
      return new Response(
        JSON.stringify({ 
          title: DOMPurify.sanitize(title, { ALLOWED_TAGS: [] }), 
          excerpt: DOMPurify.sanitize(aiContent.slice(0, 160), { ALLOWED_TAGS: [] })
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize HTML content before returning
    const sanitizedContent = sanitizeHtml(aiContent);
    console.log(`Content sanitized for user ${user.id}`);

    return new Response(JSON.stringify({ content: sanitizedContent }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in blog-ai-assist:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
