import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const blogPosts = [
  {
    title: "Study Abroad Opportunities in 2025",
    excerpt: "Discover the top destinations and scholarship programs for African students looking to pursue international education. From Canada to Germany, we break down everything you need to know.",
    category: "Education",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    slug: "study-abroad-2025",
  },
  {
    title: "How African Businesses Can Trade Globally",
    excerpt: "A comprehensive guide to expanding your business beyond borders with practical steps and success strategies for entering international markets.",
    category: "Trade",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    slug: "african-business-global-trade",
  },
  {
    title: "Hiring African Talent: A Global Guide",
    excerpt: "Why international employers are increasingly looking to Africa for skilled professionals and how to tap into this talent pool effectively.",
    category: "Talent",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    slug: "hiring-african-talent",
  },
  {
    title: "UK Work Visa Changes in 2025",
    excerpt: "Everything you need to know about the latest UK immigration policies and how they affect African professionals seeking work opportunities.",
    category: "Immigration",
    date: "Dec 3, 2024",
    readTime: "8 min read",
    slug: "uk-work-visa-2025",
  },
  {
    title: "Export Success: African Products in European Markets",
    excerpt: "Case studies and strategies for African exporters looking to break into European markets with their products and services.",
    category: "Trade",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    slug: "export-success-europe",
  },
  {
    title: "Remote Work Opportunities for African Professionals",
    excerpt: "The rise of remote work has opened new doors for African talent. Learn how to position yourself for global remote opportunities.",
    category: "Career",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    slug: "remote-work-africa",
  },
];

const categories = ["All", "Education", "Trade", "Talent", "Immigration", "Career"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
        <section className="pt-32 pb-20 gradient-hero">
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

            {/* Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/30 hover-lift"
                >
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
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
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