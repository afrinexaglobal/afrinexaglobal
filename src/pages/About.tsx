import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Building, Globe, Users, Target, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "John is a visionary leader with over 20 years of experience in international trade and business development.",
  },
  {
    name: "Jane Smith",
    role: "Head of Visa Services",
    bio: "Jane is an immigration expert with a passion for helping people achieve their global aspirations.",
  },
  {
    name: "Samuel Green",
    role: "Director of Talent Solutions",
    bio: "Samuel connects top African talent with global companies, fostering career growth and innovation.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Afrinexa Global Limited</title>
        <meta name="description" content="Learn about Afrinexa Global Limited, our mission, vision, and the team dedicated to connecting Africa to the world." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 lg:pt-[160px] pb-20 gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                About <span className="text-gold">Afrinexa Global</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                We are a premier consultancy firm dedicated to bridging the gap between Africa and global opportunities in trade, talent, and travel.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  To empower African individuals and businesses to thrive on the global stage by providing expert guidance, fostering connections, and simplifying complexities in international mobility and trade.
                </p>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To be the leading catalyst for African integration into the global economy, creating a world where opportunities are accessible to all, regardless of their origin.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Operating in over 50 countries.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">Client-Centric</h3>
                  <p className="text-sm text-muted-foreground">Tailored solutions for every need.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <Building className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">Business Growth</h3>
                  <p className="text-sm text-muted-foreground">Facilitating trade and investment.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-center">
                  <Target className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground">Deep industry knowledge.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-24 bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Our team of experienced professionals is the backbone of our success, dedicated to delivering excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-card rounded-2xl p-8 text-center border border-border">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-light mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-3xl">{member.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground">{member.name}</h3>
                  <p className="text-gold font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you are looking to study abroad, expand your business, or start a new life, Afrinexa is your trusted partner.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
