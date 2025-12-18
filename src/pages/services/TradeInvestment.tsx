import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Building, Globe2, Handshake, ArrowRight, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: Globe2,
    title: "Import & Export",
    description: "Facilitate cross-border trade between Africa and global markets with our expertise.",
    features: ["Product sourcing", "Logistics coordination", "Customs clearance", "Quality assurance"],
  },
  {
    icon: Handshake,
    title: "Business Matching",
    description: "Connect with verified partners, suppliers, and distributors across continents.",
    features: ["Partner vetting", "Contract negotiation", "Due diligence", "Market analysis"],
  },
  {
    icon: Building,
    title: "Market Entry",
    description: "Strategic guidance for businesses entering new markets in Africa or globally.",
    features: ["Market research", "Regulatory compliance", "Local partnerships", "Setup support"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Identify and evaluate investment opportunities with expert guidance.",
    features: ["Opportunity identification", "Risk assessment", "ROI analysis", "Investment facilitation"],
  },
];

const TradeInvestment = () => {
  return (
    <>
      <Helmet>
        <title>Trade & Investment Services | Afrinexa Global Limited</title>
        <meta name="description" content="Expand your business globally with our trade facilitation and investment advisory services. Connect African businesses with international markets." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 lg:pt-[160px] pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/30 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Trade & Investment (Equal Priority Service)
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Expand Your Business <span className="text-gold">Globally</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Connect African businesses with international markets. Import, export, and investment opportunities across continents.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="heroGold" size="xl">
                    Become a Partner <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Invest with Afrinexa
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services (detailed subsections) */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trade & Investment — Subservices
              </h2>
              <p className="text-lg text-muted-foreground">
                Detailed offerings under Trade Services, Investment Services, and our Africa–Global Trade Corridor.
              </p>
            </div>

            {/* 4.1 Trade Services */}
            <div className="mb-12 p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <Globe2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">4.1 Trade Services</h3>
                  <p className="text-muted-foreground mb-4">Services to facilitate your import/export and trade operations.</p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Import & Export Facilitation</li>
                    <li>Supplier & Buyer Matching</li>
                    <li>International Trade Documentation</li>
                    <li>Trade Missions & Exhibitions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4.2 Investment Services */}
            <div className="mb-12 p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">4.2 Investment Services</h3>
                  <p className="text-muted-foreground mb-4">Support for investors looking to enter African markets and beyond.</p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Foreign Direct Investment (FDI) Support</li>
                    <li>Business Setup Abroad</li>
                    <li>Joint Ventures</li>
                    <li>Real Estate Investment (by country)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4.3 Africa–Global Trade Corridor */}
            <div className="mb-12 p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">4.3 Africa–Global Trade Corridor</h3>
                  <p className="text-muted-foreground mb-4">Focused trade lanes connecting Africa with major global regions.</p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Africa to Europe</li>
                    <li>Africa to Asia</li>
                    <li>Africa to Middle East</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="text-center mt-6">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="heroGold" size="xl">Become a Partner <ArrowRight className="w-5 h-5" /></Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero" size="xl">Invest with Afrinexa</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to Go Global?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business expand into new markets.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TradeInvestment;