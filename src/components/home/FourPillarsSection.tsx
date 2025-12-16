import { Link } from "react-router-dom";
import { Globe, Briefcase, Users, ShoppingBag, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Globe,
    title: "Visa Assistance",
    description: "Expert guidance for visiting, studying, and working abroad. We handle the complexities so you can focus on your journey.",
    href: "/services/visa-assistance",
    features: ["Visiting Visa", "Study Abroad", "Work Permits", "Family Reunification"],
    gradient: "from-sky to-sky-light",
  },
  {
    icon: Briefcase,
    title: "Trade & Investment",
    description: "Connect African businesses with global markets. Import, export, and investment opportunities across continents.",
    href: "/services/trade-investment",
    features: ["Import/Export", "Business Matching", "Market Entry", "Investment Advisory"],
    gradient: "from-gold to-gold-light",
  },
  {
    icon: Users,
    title: "Talent Hub",
    description: "Bridging skilled African professionals with global opportunities. Build your international career with us.",
    href: "/services/talent-hub",
    features: ["Job Placement", "CV Building", "Career Coaching", "Skills Assessment"],
    gradient: "from-navy to-navy-light",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Cross-border e-commerce platform connecting African products to the world and global goods to Africa.",
    href: "/services/marketplace",
    features: ["African Goods", "Global Products", "B2B Trading", "Secure Payments"],
    gradient: "from-green-600 to-green-500",
  },
];

export function FourPillarsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4">
            Our Core Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Four Pillars of <span className="text-gold">Global Connection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to bridge opportunities between Africa and the rest of the world.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              to={pillar.href}
              className={cn(
                "group relative p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover-lift overflow-hidden",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Accent */}
              <div className={cn(
                "absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                pillar.gradient
              )} />

              <div className="flex flex-col h-full">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn(
                    "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                    pillar.gradient
                  )}>
                    <pillar.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{pillar.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <ul className="grid grid-cols-2 gap-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-gold font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}