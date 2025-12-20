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
        <section className="pt-40 lg:pt-[160px] pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold/30 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                6. Marketplace
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Marketplace — Buy, Sell & Partner
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                A multi-channel marketplace connecting digital resources, services, and businesses across Africa and the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="heroGold" size="xl">
                    Buy
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Sell
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="xl">
                    Partner
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6.1 Digital Marketplace */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">6.1 Digital Marketplace</h2>
              <p className="text-muted-foreground">Digital products and templates to support migration, applications and learning.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Visa-related Documents</h3>
                <p className="text-sm text-muted-foreground">Prebuilt visa forms, checklists and document bundles.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Templates (SOP, CV, Cover Letters)</h3>
                <p className="text-sm text-muted-foreground">Professionally written templates tailored for visa and job applications.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">E-books & Guides</h3>
                <p className="text-sm text-muted-foreground">Practical guides on migration, trade procedures and market entry.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6.2 Physical & Service Marketplace */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">6.2 Physical & Service Marketplace</h2>
              <p className="text-muted-foreground">Services and physical products to support travel and events.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Travel Insurance</h3>
                <p className="text-sm text-muted-foreground">Compare and buy travel insurance plans for your trip.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Flight Booking</h3>
                <p className="text-sm text-muted-foreground">Search and book competitive flight options worldwide.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Accommodation Support</h3>
                <p className="text-sm text-muted-foreground">Assistance with short-term and long-term accommodation.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Event Tickets</h3>
                <p className="text-sm text-muted-foreground">Buy tickets for conferences, trade shows and local events.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6.3 Business Marketplace */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">6.3 Business Marketplace</h2>
              <p className="text-muted-foreground">Business-focused listings and verified trade services.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Franchise Opportunities</h3>
                <p className="text-sm text-muted-foreground">Explore franchising and partnership opportunities across regions.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Trade Leads</h3>
                <p className="text-sm text-muted-foreground">Access verified trade leads and business opportunities.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Verified Suppliers</h3>
                <p className="text-sm text-muted-foreground">Find vetted suppliers and B2B partners for your business.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Land and Landed Properties</h3>
                <p className="text-sm text-muted-foreground">Access real estate opportunities and property listings.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-2">Health and Fitness</h3>
                <p className="text-sm text-muted-foreground">Wellness products and fitness services for healthy living.</p>
              </div>
            </div>

            <div className="mt-10 md:text-left text-center">
              <div className="inline-flex gap-3">
                <Link to="/contact">
                  <Button variant="heroGold">Buy</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero">Sell</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Partner</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Marketplace;