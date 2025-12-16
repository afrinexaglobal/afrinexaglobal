import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Study Abroad Opportunities in 2025",
    excerpt: "Discover the top destinations and scholarship programs for African students looking to pursue international education.",
    category: "Education",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    slug: "study-abroad-2025",
    image: null,
  },
  {
    title: "How African Businesses Can Trade Globally",
    excerpt: "A comprehensive guide to expanding your business beyond borders with practical steps and success strategies.",
    category: "Trade",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    slug: "african-business-global-trade",
    image: null,
  },
  {
    title: "Hiring African Talent: A Global Guide",
    excerpt: "Why international employers are increasingly looking to Africa for skilled professionals and how to tap into this talent pool.",
    category: "Talent",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    slug: "hiring-african-talent",
    image: null,
  },
];

export function FeaturedBlogSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Latest Insights
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Blog & <span className="text-gold">Resources</span>
            </h2>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="group">
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/30 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-gold/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30">📚</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gold text-primary text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}