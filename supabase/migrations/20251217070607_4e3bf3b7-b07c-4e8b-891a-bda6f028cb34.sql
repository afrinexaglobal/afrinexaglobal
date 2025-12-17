-- Create app_role enum for admin system
CREATE TYPE public.app_role AS ENUM ('admin');

-- Create user_roles table for admin authentication
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy for user_roles (only admins can view)
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  featured_image TEXT,
  content TEXT NOT NULL,
  excerpt TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_name TEXT DEFAULT 'Afrinexa Team',
  read_time TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on blog_posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Anyone can view published posts"
ON public.blog_posts
FOR SELECT
USING (status = 'published');

-- Admins can do everything with posts
CREATE POLICY "Admins can manage all posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create comments table
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT NOT NULL,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on comments
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Public can view approved comments
CREATE POLICY "Anyone can view approved comments"
ON public.comments
FOR SELECT
USING (approved = true);

-- Anyone can insert comments
CREATE POLICY "Anyone can submit comments"
ON public.comments
FOR INSERT
WITH CHECK (true);

-- Admins can manage all comments
CREATE POLICY "Admins can manage all comments"
ON public.comments
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create form_submissions table
CREATE TABLE public.form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type TEXT NOT NULL,
  payload JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on form_submissions
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can insert form submissions
CREATE POLICY "Anyone can submit forms"
ON public.form_submissions
FOR INSERT
WITH CHECK (true);

-- Admins can view all form submissions
CREATE POLICY "Admins can view all submissions"
ON public.form_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can delete form submissions
CREATE POLICY "Admins can delete submissions"
ON public.form_submissions
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for blog_posts updated_at
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial blog posts (migrating existing static data)
INSERT INTO public.blog_posts (title, slug, category, excerpt, content, status, read_time, created_at) VALUES
('Study Abroad Opportunities in 2025', 'study-abroad-2025', 'Education', 
'Discover the top destinations and scholarship programs for African students looking to pursue international education. From Canada to Germany, we break down everything you need to know.',
'<h2>Top Destinations for African Students in 2025</h2>
<p>The global education landscape continues to evolve, offering unprecedented opportunities for African students seeking international education. In 2025, several countries stand out as premier destinations for academic excellence.</p>

<h3>Canada: The Land of Opportunities</h3>
<p>Canada remains a top choice for African students due to its welcoming immigration policies, high-quality education system, and post-graduation work opportunities. Universities like the University of Toronto, McGill University, and the University of British Columbia offer world-class programs across various disciplines.</p>

<h3>Germany: Excellence Without the Price Tag</h3>
<p>Germany continues to attract students with its tuition-free education at public universities. With a strong emphasis on research and innovation, German universities provide excellent programs in engineering, technology, and business.</p>

<h3>Scholarship Programs to Watch</h3>
<p>Several scholarship programs specifically target African students:</p>
<ul>
<li>Mastercard Foundation Scholars Program</li>
<li>DAAD Scholarships for Germany</li>
<li>Chevening Scholarships for the UK</li>
<li>Commonwealth Scholarships</li>
</ul>

<h3>How Afrinexa Can Help</h3>
<p>Our team of education consultants specializes in guiding African students through the entire study abroad process, from university selection to visa applications and scholarship applications.</p>',
'published', '5 min read', '2024-12-10'),

('How African Businesses Can Trade Globally', 'african-business-global-trade', 'Trade',
'A comprehensive guide to expanding your business beyond borders with practical steps and success strategies for entering international markets.',
'<h2>Breaking Into Global Markets</h2>
<p>African businesses are increasingly looking beyond their borders for growth opportunities. The global marketplace offers immense potential, but success requires strategic planning and execution.</p>

<h3>Understanding Export Requirements</h3>
<p>Before entering international markets, businesses must understand the regulatory requirements, documentation needs, and quality standards expected in target markets.</p>

<h3>Key Steps for Global Expansion</h3>
<ol>
<li><strong>Market Research:</strong> Identify target markets and understand consumer preferences</li>
<li><strong>Compliance:</strong> Ensure products meet international standards and certifications</li>
<li><strong>Logistics:</strong> Establish reliable shipping and distribution channels</li>
<li><strong>Partnerships:</strong> Build relationships with local distributors and agents</li>
</ol>

<h3>Financing Your Export Business</h3>
<p>Various financing options are available for African exporters, including export credit agencies, trade finance facilities, and government-backed loans.</p>

<h3>Afrinexa Trade Support</h3>
<p>Our trade facilitation services help African businesses navigate the complexities of international trade, from market entry strategies to buyer-seller matchmaking.</p>',
'published', '7 min read', '2024-12-08'),

('Hiring African Talent: A Global Guide', 'hiring-african-talent', 'Talent',
'Why international employers are increasingly looking to Africa for skilled professionals and how to tap into this talent pool effectively.',
'<h2>The Rise of African Talent</h2>
<p>Africa boasts a young, dynamic workforce with growing expertise in technology, finance, healthcare, and various other sectors. International employers are increasingly recognizing the value of this talent pool.</p>

<h3>Why Hire African Professionals?</h3>
<ul>
<li><strong>Diverse Skill Sets:</strong> African professionals bring unique perspectives and problem-solving approaches</li>
<li><strong>Cost-Effective:</strong> Competitive salary expectations compared to Western markets</li>
<li><strong>Time Zone Advantages:</strong> Overlap with European and Middle Eastern business hours</li>
<li><strong>Multilingual Capabilities:</strong> Proficiency in multiple languages is common</li>
</ul>

<h3>Recruitment Best Practices</h3>
<p>Successful recruitment of African talent requires understanding local markets, partnering with reputable agencies, and offering competitive packages that account for local standards.</p>

<h3>Afrinexa Talent Hub</h3>
<p>Our Talent Hub connects international employers with verified African professionals across various industries. We handle recruitment, vetting, and compliance to ensure a seamless hiring experience.</p>',
'published', '6 min read', '2024-12-05'),

('UK Work Visa Changes in 2025', 'uk-work-visa-2025', 'Immigration',
'Everything you need to know about the latest UK immigration policies and how they affect African professionals seeking work opportunities.',
'<h2>Navigating UK Immigration in 2025</h2>
<p>The UK immigration landscape continues to evolve, with new policies affecting how African professionals can access work opportunities in Britain.</p>

<h3>Key Changes to Watch</h3>
<p>Recent policy updates have introduced changes to salary thresholds, skills requirements, and sponsorship rules that affect skilled worker visas.</p>

<h3>Skilled Worker Visa Requirements</h3>
<ul>
<li>Valid job offer from an approved sponsor</li>
<li>Meeting the minimum salary threshold</li>
<li>English language proficiency</li>
<li>Certificate of Sponsorship from employer</li>
</ul>

<h3>How to Prepare</h3>
<p>Start your preparation early by gathering required documents, improving your English skills if needed, and researching potential employers in your field.</p>

<h3>Expert Visa Assistance</h3>
<p>Afrinexa visa specialists stay updated on the latest UK immigration policies and can guide you through the entire application process.</p>',
'published', '8 min read', '2024-12-03'),

('Export Success: African Products in European Markets', 'export-success-europe', 'Trade',
'Case studies and strategies for African exporters looking to break into European markets with their products and services.',
'<h2>Success Stories from African Exporters</h2>
<p>Across the continent, African businesses are finding success in European markets with products ranging from agricultural goods to technology solutions.</p>

<h3>Case Study: Nigerian Cocoa Exports</h3>
<p>Learn how a Nigerian cocoa processor successfully entered the Belgian chocolate market through quality certification and strategic partnerships.</p>

<h3>Case Study: Kenyan Tech Services</h3>
<p>Discover how a Kenyan software development company built a client base across Europe through remote work and quality deliverables.</p>

<h3>Keys to European Market Success</h3>
<ol>
<li>Quality certification and compliance</li>
<li>Understanding European consumer preferences</li>
<li>Building sustainable supply chains</li>
<li>Effective marketing and branding</li>
</ol>

<h3>Partner with Afrinexa</h3>
<p>Our trade facilitation team can connect you with European buyers and help you navigate the regulatory requirements for market entry.</p>',
'published', '10 min read', '2024-11-28'),

('Remote Work Opportunities for African Professionals', 'remote-work-africa', 'Career',
'The rise of remote work has opened new doors for African talent. Learn how to position yourself for global remote opportunities.',
'<h2>The Remote Work Revolution</h2>
<p>The global shift to remote work has created unprecedented opportunities for African professionals to work with international companies without relocating.</p>

<h3>In-Demand Remote Skills</h3>
<ul>
<li>Software Development and Programming</li>
<li>Digital Marketing and Content Creation</li>
<li>Customer Support and Virtual Assistance</li>
<li>Data Analysis and Business Intelligence</li>
<li>Graphic Design and UI/UX</li>
</ul>

<h3>Building Your Remote Career</h3>
<p>Success in remote work requires more than technical skills. Communication, time management, and self-discipline are equally important.</p>

<h3>Top Platforms for Finding Remote Work</h3>
<ol>
<li>LinkedIn Remote Jobs</li>
<li>Upwork and Fiverr</li>
<li>Remote.co and We Work Remotely</li>
<li>Afrinexa Talent Hub</li>
</ol>

<h3>Get Started Today</h3>
<p>Register with Afrinexa Talent Hub to access exclusive remote job opportunities with international employers.</p>',
'published', '6 min read', '2024-11-25');