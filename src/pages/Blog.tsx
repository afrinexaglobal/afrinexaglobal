import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string | null;
  read_time: string | null;
  created_at: string;
  featured_image?: string | null;
}

const categories = ["All", "Education", "Trade", "Talent", "Immigration", "Career"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, category, excerpt, read_time, created_at, featured_image")
        .eq("status", "published")
        .order("created_at", { ascending: false });

      if (data) setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog & Insights | Afrinexa Global Limited</title>
        <meta name="description" content="Stay updated with the latest visa updates, trade opportunities, career insights, and success stories from Afrinexa Global Limited." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 lg:pt-[160px] pb-20 gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Blog & <span className="text-gold">Insights</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Expert advice, industry updates, and success stories to help you navigate global opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-gold text-primary"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse bg-card rounded-2xl overflow-hidden border border-border">
                    <div className="h-48 bg-muted" />
                    <div className="p-6 space-y-3">
                      <div className="h-6 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Posts */}
            {!loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/30 hover-lift"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-gold/10 relative overflow-hidden">
                      {post.featured_image ? (
                        <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl opacity-30">📚</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-gold text-primary text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          {post.read_time && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.read_time}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!loading && filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
