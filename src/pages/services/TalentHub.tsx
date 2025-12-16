import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Rocket, Target, ArrowRight, Upload, Search, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const benefits = [
  { icon: Search, title: "Get Discovered", description: "Your profile visible to global employers actively seeking African talent." },
  { icon: Award, title: "Skills Verification", description: "Verified credentials that build trust with international recruiters." },
  { icon: Rocket, title: "Career Growth", description: "Access training, mentorship, and career development resources." },
  { icon: Target, title: "Job Matching", description: "AI-powered matching connects you with opportunities that fit your skills." },
];

const TalentHub = () => {
  return (
    <>
      <Helmet>
        <title>Talent Hub - Build Your Global Career | Afrinexa Global Limited</title>
        <meta name="description" content="Join Afrinexa's Talent Hub to connect with global opportunities. Skills verification, career coaching, and job placement services." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/30 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Talent Hub
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Your Skills, <span className="text-gold">Global Stage</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join Africa's premier talent network. Connect with international employers and build your global career.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="heroGold" size="xl">
                    Join Talent Hub <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    <Upload className="w-5 h-5" /> Upload Your CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Join Afrinexa Talent Hub?
              </h2>
              <p className="text-lg text-muted-foreground">
                We don't just list your profile - we actively promote your skills to employers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover-lift"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Create Profile", description: "Sign up and build your professional profile with your skills and experience." },
                { step: "2", title: "Get Verified", description: "Our team verifies your credentials and enhances your profile visibility." },
                { step: "3", title: "Get Matched", description: "Receive job matches and apply to opportunities that fit your goals." },
              ].map((item) => (
                <div key={item.step} className="relative p-8 rounded-2xl bg-card border border-border">
                  <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-primary font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Join Now <ArrowRight className="w-5 h-5" />
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

export default TalentHub;