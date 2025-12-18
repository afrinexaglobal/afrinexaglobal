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
        <section className="pt-32 lg:pt-[160px] pb-20 gradient-hero relative overflow-hidden">
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

        {/* 5. Talent Hub - Detailed Sections */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">5. Talent Hub</h2>
              <p className="text-lg text-muted-foreground">Connecting talent and employers across Africa and the world.</p>
            </div>

            {/* 5.1 For Job Seekers */}
            <div className="mb-10 p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">5.1 For Job Seekers</h3>
              <p className="text-muted-foreground mb-4">Tools and pathways to showcase your skills and access opportunities.</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Create Talent Profile</li>
                <li>Upload CV</li>
                <li>Job Listings (By Country &amp; Sector)</li>
                <li>Skill Development Programs</li>
              </ul>
            </div>

            {/* 5.2 For Employers */}
            <div className="mb-10 p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">5.2 For Employers</h3>
              <p className="text-muted-foreground mb-4">End-to-end hiring solutions tailored for international employers.</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Post a Job</li>
                <li>Talent Search</li>
                <li>Recruitment Outsourcing</li>
                <li>Compliance &amp; Visa Advisory</li>
              </ul>
            </div>

            {/* 5.3 Talent Categories */}
            <div className="mb-10 p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">5.3 Talent Categories</h3>
              <p className="text-muted-foreground mb-4">Browse talent by sector and expertise.</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-muted-foreground list-none pl-0">
                <li>- IT &amp; Tech</li>
                <li>- Healthcare</li>
                <li>- Education</li>
                <li>- Engineering</li>
                <li>- Hospitality</li>
                <li>- Creative &amp; Media</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center mt-6">
              <Link to="/contact">
                <Button variant="heroGold" size="xl">Join Talent Hub <ArrowRight className="w-5 h-5" /></Button>
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