import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Package, Store, CreditCard, ArrowRight, Globe, Shield, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  { icon: Globe, title: "Cross-Border Trading", description: "Buy and sell across Africa and the world with ease." },
  { icon: Shield, title: "Secure Transactions", description: "Protected payments and verified sellers for peace of mind." },
  { icon: Truck, title: "Global Logistics", description: "Reliable shipping and delivery tracking worldwide." },
  { icon: CreditCard, title: "Multi-Currency", description: "Pay and receive in multiple currencies seamlessly." },
];

const categories = [
  { name: "African Goods", description: "Authentic products from across the continent" },
  { name: "Fashion & Textiles", description: "Traditional and contemporary African fashion" },
  { name: "Food & Agriculture", description: "Quality produce and food products" },
  { name: "Arts & Crafts", description: "Handmade artisan goods and decor" },
  { name: "Technology", description: "Electronics and tech products" },
  { name: "B2B Supplies", description: "Wholesale and business products" },
];

const Marketplace = () => {
  return (
    <>
      <Helmet>
        <title>Marketplace - Buy & Sell Globally | Afrinexa Global Limited</title>
        <meta name="description" content="Cross-border e-commerce connecting African products to the world. Buy, sell, and partner with us for global trade." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold/30 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Marketplace
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Trade <span className="text-gold">Without Borders</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Your gateway to cross-border commerce. Connect African products with global markets and access goods from around the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="heroGold" size="xl">
                    <ShoppingBag className="w-5 h-5" /> Start Buying
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    <Store className="w-5 h-5" /> Start Selling
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover-lift"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Browse Categories
              </h2>
              <p className="text-muted-foreground">
                Discover a wide range of products from verified sellers across the globe.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/30 hover-lift cursor-pointer"
                >
                  <Package className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Marketplace coming soon. Register your interest to be notified at launch!
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Join Waitlist <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Marketplace;