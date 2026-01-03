import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin, MessageCircle, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import DOMPurify from "dompurify";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  featured_image: string | null;
  content: string;
  excerpt: string | null;
  author_name: string | null;
  read_time: string | null;
  created_at: string;
}

interface Comment {
  id: string;
  name: string;
  comment: string;
  created_at: string;
}

const ctaLinks = [
  { label: "Apply for Visa", href: "/services/visa-assistance" },
  { label: "Join Talent Hub", href: "/services/talent-hub" },
  { label: "Explore Trade & Investment", href: "/services/trade-investment" },
  { label: "Visit Marketplace", href: "/services/marketplace" },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState({ name: "", email: "", comment: "" });
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error || !data) {
        setLoading(false);
        return;
      }

      setPost(data);

      // Fetch related posts
      const { data: related } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .neq("slug", slug)
        .limit(3);

      if (related) setRelatedPosts(related);

      // Fetch approved comments
      const { data: commentsData } = await supabase
        .from("comments")
        .select("id, name, comment, created_at")
        .eq("post_id", data.id)
        .eq("approved", true)
        .order("created_at", { ascending: false });

      if (commentsData) setComments(commentsData);

      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    // Client-side validation
    const trimmedName = commentForm.name.trim();
    const trimmedEmail = commentForm.email.trim();
    const trimmedComment = commentForm.comment.trim();

    // Validate name length (2-100 characters)
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      toast.error("Name must be between 2 and 100 characters");
      return;
    }

    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate comment length (10-2000 characters)
    if (trimmedComment.length < 10 || trimmedComment.length > 2000) {
      toast.error("Comment must be between 10 and 2000 characters");
      return;
    }

    setSubmittingComment(true);
    const { error } = await supabase.from("comments").insert({
      post_id: post.id,
      name: trimmedName,
      email: trimmedEmail,
      comment: trimmedComment,
    });

    if (error) {
      toast.error("Failed to submit comment. Please try again.");
    } else {
      toast.success("Comment submitted! It will appear after approval.");
      setCommentForm({ name: "", email: "", comment: "" });
    }
    setSubmittingComment(false);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-40 pb-24 min-h-screen">
          <div className="container-custom">
            <div className="animate-pulse space-y-8">
              <div className="h-64 bg-muted rounded-2xl" />
              <div className="h-8 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/4" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-40 pb-24 min-h-screen">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button variant="gold">Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Afrinexa Global Limited</title>
        <meta name="description" content={post.excerpt || post.title} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ""} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.created_at,
            "author": { "@type": "Organization", "name": post.author_name || "Afrinexa Team" },
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        {/* Hero Featured Image */}
        <section className="pt-32 lg:pt-[160px] pb-12 relative overflow-hidden">
          {post.featured_image ? (
            <img src={post.featured_image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 gradient-hero" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
          <div className="container-custom relative z-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-gold text-primary text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author_name || "Afrinexa Team"}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              {post.read_time && (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.read_time}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-foreground leading-relaxed space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2"
                  dangerouslySetInnerHTML={{ 
                    __html: DOMPurify.sanitize(post.content, {
                      ALLOWED_TAGS: ['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'br', 'span'],
                      ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
                      FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input'],
                      FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover']
                    })
                  }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>

              {/* Sidebar - Sticky Share Buttons */}
              <aside className="hidden lg:block">
                <div className="sticky top-32 space-y-6">
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share Article
                    </h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                        Facebook
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                        Twitter
                      </a>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Ready to Take the Next Step?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ctaLinks.map((cta) => (
                <Link key={cta.href} to={cta.href}>
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                    <span className="text-sm font-medium">{cta.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Comments ({comments.length})
            </h2>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="bg-card rounded-xl border border-border p-6 mb-8">
              <h3 className="font-medium text-foreground mb-4">Leave a Comment</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  value={commentForm.name}
                  onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  value={commentForm.email}
                  onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Your Comment"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold mb-4"
                value={commentForm.comment}
                onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
              />
              <Button type="submit" variant="gold" disabled={submittingComment}>
                {submittingComment ? "Submitting..." : "Submit Comment"}
              </Button>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No comments yet. Be the first to share your thoughts!</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-card rounded-xl border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{comment.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(comment.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{comment.comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container-custom">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">More Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group bg-card rounded-xl border border-border overflow-hidden hover:border-gold/30 transition-colors"
                  >
                    <div className="h-40 relative overflow-hidden">
                      {related.featured_image ? (
                        <img src={related.featured_image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="h-40 bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                          <span className="text-4xl opacity-30">📚</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-gold font-medium">{related.category}</span>
                      <h3 className="font-display font-semibold text-foreground mt-2 group-hover:text-gold transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
