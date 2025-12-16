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
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/30 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Trade & Investment
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

        {/* Services */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Trade & Investment Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive solutions to help your business thrive in the global marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover-lift"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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