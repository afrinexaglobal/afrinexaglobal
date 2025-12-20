import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, GraduationCap, Briefcase, FileText, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { VisaRequirementsAccordion } from "@/components/visa/VisaRequirementsAccordion";

const visaServices = [
  {
    icon: Globe,
    title: "Visiting Visa",
    description: "Tourist, business, and family visit visas for destinations worldwide.",
    features: ["Document preparation", "Application submission", "Interview coaching", "Fast-track options"],
  },
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description: "University admissions and student visa assistance for top global institutions.",
    features: ["University selection", "Application support", "Scholarship guidance", "Student visa processing"],
  },
  {
    icon: Briefcase,
    title: "Work Abroad",
    description: "Employment visas and work permits for international job opportunities.",
    features: ["Job matching", "Work permit applications", "Employer sponsorship", "Relocation support"],
  },
  {
    icon: FileText,
    title: "Additional Services",
    description: "Family reunification, permanent residency, and citizenship applications.",
    features: ["Family visas", "PR applications", "Citizenship paths", "Document attestation"],
  },
];

const VisaAssistance = () => {
  return (
    <>
      <Helmet>
        <title>Visa Assistance Services | Afrinexa Global Limited</title>
        <meta name="description" content="Expert visa assistance for visiting, studying, and working abroad. We handle your visa applications with professionalism and care." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 lg:pt-[160px] pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/30 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Visa Assistance
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Your Gateway to <span className="text-gold">Global Opportunities</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Expert guidance for visiting, studying, and working abroad. We handle the complexities so you can focus on your journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services/visa-application">
                  <Button variant="heroGold" size="xl">
                    Apply Now <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+2348151022244">
                  <Button variant="hero" size="xl">
                    <Phone className="w-5 h-5" /> Book Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Visa Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive visa solutions tailored to your specific needs and destination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visaServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
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

        {/* Visa Requirements by Region */}
        <VisaRequirementsAccordion />
        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Visa Application?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let our experts guide you through the process.
            </p>
            <Link to="/services/visa-application">
              <Button variant="gold" size="xl">
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VisaAssistance;