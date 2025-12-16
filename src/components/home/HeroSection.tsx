import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Briefcase, Users, ShoppingBag } from "lucide-react";

const ctaButtons = [
  { label: "Apply for Visa", href: "/services/visa-assistance", icon: Globe },
  { label: "Explore Trade", href: "/services/trade-investment", icon: Briefcase },
  { label: "Join Talent Hub", href: "/services/talent-hub", icon: Users },
  { label: "Visit Marketplace", href: "/services/marketplace", icon: ShoppingBag },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Globe Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">Trusted by 10,000+ clients worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="block">Afrinexa Global</span>
            <span className="block mt-2">
              <span>Bridging Africa</span>
              <span> & the World</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="inline-flex items-center gap-3 flex-wrap justify-center">
              <span>Visa Assistance</span>
              <span className="text-gold">•</span>
              <span>Trade & Investment</span>
              <span className="text-gold">•</span>
              <span>Talent Hub</span>
              <span className="text-gold">•</span>
              <span>Marketplace</span>
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/services/visa-assistance">
              <Button variant="heroGold" size="xl">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {ctaButtons.map((cta) => (
              <Link
                key={cta.label}
                to={cta.href}
                className="group p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-300"
              >
                <cta.icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-primary-foreground text-sm font-medium">{cta.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
}