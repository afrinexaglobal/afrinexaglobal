import { User, Building2, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const segments = [
  {
    icon: User,
    title: "Individuals",
    subtitle: "Travelers • Students • Job Seekers",
    description: "Whether you're planning to visit, study, or work abroad, we provide end-to-end support for your international journey.",
    cta: "Start Your Journey",
    href: "/services/visa-assistance",
    features: [
      "Visa application assistance",
      "University admissions support",
      "Job placement services",
      "Travel documentation",
    ],
  },
  {
    icon: Building2,
    title: "Businesses",
    subtitle: "SMEs • Corporates • Investors",
    description: "Expand your business globally with our trade facilitation, market entry strategies, and investment matching services.",
    cta: "Grow Globally",
    href: "/services/trade-investment",
    features: [
      "Export/import facilitation",
      "Market research & entry",
      "Business partnerships",
      "Investment opportunities",
    ],
  },
  {
    icon: Briefcase,
    title: "Employers & Recruiters",
    subtitle: "HR Managers • Recruitment Agencies",
    description: "Access Africa's talented workforce. We connect you with verified, skilled professionals ready for global opportunities.",
    cta: "Find Talent",
    href: "/services/talent-hub",
    features: [
      "Pre-vetted candidates",
      "Skills verification",
      "Visa sponsorship support",
      "Compliance advisory",
    ],
  },
];

export function ClientSegmentsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Who We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions for <span className="text-gold">Every Client</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored services designed to meet the unique needs of individuals, businesses, and organizations.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-gold/30 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-6">
                <segment.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {segment.title}
              </h3>
              <p className="text-gold text-sm font-medium mb-4">{segment.subtitle}</p>
              <p className="text-muted-foreground mb-6">{segment.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {segment.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to={segment.href}>
                <Button variant="gold" className="w-full group-hover:shadow-gold">
                  {segment.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}