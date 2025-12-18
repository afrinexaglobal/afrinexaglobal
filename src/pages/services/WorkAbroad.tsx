import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Building2, Users, FileCheck, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const employerServices = [
  { title: "Post a Job", description: "Reach qualified African professionals actively seeking international opportunities." },
  { title: "Recruitment Outsourcing", description: "Let us handle the entire recruitment process from sourcing to placement." },
  { title: "Compliance & Visa Advisory", description: "Navigate immigration requirements and ensure full compliance." },
];

const employeeServices = [
  { title: "Job Listings by Country", description: "Browse opportunities in Europe, North America, Asia, and the Middle East." },
  { title: "CV Enhancement", description: "Professional CV writing and optimization for international job markets." },
  { title: "Career Guidance", description: "One-on-one coaching to help you land your dream international job." },
];

const featuredCountries = [
  { name: "United Kingdom", jobs: "500+" },
  { name: "Canada", jobs: "350+" },
  { name: "Germany", jobs: "280+" },
  { name: "UAE", jobs: "420+" },
  { name: "Australia", jobs: "190+" },
  { name: "USA", jobs: "310+" },
];

const WorkAbroad = () => {
  return (
    <>
      <Helmet>
        <title>Work Abroad - International Job Opportunities | Afrinexa Global Limited</title>
        <meta name="description" content="Find international job opportunities and work permits. Connect with global employers or hire African talent." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 lg:pt-[160px] pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/30 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Work Abroad
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Build Your <span className="text-gold">Global Career</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Whether you're seeking international employment or looking to hire African talent, we connect opportunities across borders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="heroGold" size="xl">
                    Find Jobs <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Post a Job
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* For Employers */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-gold" />
                  <span className="text-gold font-semibold">For Employers</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Access Africa's Best Talent
                </h2>
                <p className="text-muted-foreground mb-8">
                  Partner with us to find skilled, motivated professionals ready to contribute to your organization's success.
                </p>
                <div className="space-y-4">
                  {employerServices.map((service) => (
                    <div key={service.title} className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-block mt-8">
                  <Button variant="gold" size="lg">
                    Partner With Us <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Why Hire African Talent?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-gold" />
                    </span>
                    <span className="text-muted-foreground">Young, dynamic workforce with diverse skill sets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-4 h-4 text-gold" />
                    </span>
                    <span className="text-muted-foreground">Pre-vetted candidates with verified qualifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-gold" />
                    </span>
                    <span className="text-muted-foreground">Cost-effective solutions without compromising quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Job Seekers */}
        <section className="py-24 bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-gold" />
                <span className="text-gold font-semibold">For Job Seekers</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Find Your Dream International Job
              </h2>
              <p className="text-muted-foreground">
                Explore opportunities across the globe and let us help you secure your next career move.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {employeeServices.map((service, index) => (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover-lift"
                >
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Featured Countries */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
                Popular Destinations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {featuredCountries.map((country) => (
                  <div key={country.name} className="text-center p-4 rounded-xl bg-muted/50 hover:bg-gold/10 transition-colors">
                    <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="font-semibold text-foreground text-sm">{country.name}</p>
                    <p className="text-xs text-muted-foreground">{country.jobs} jobs</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WorkAbroad;