import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Quote, Star, MapPin, Briefcase, GraduationCap, Building } from "lucide-react";
import { Helmet } from "react-helmet-async";

const stories = [
  {
    name: "Adebayo Okonkwo",
    role: "Software Engineer",
    location: "Toronto, Canada",
    category: "Study & Work",
    icon: GraduationCap,
    story: "I started as a student at University of Toronto with Afrinexa's help. After graduation, they assisted me with my work permit and now I have my PR. The journey from Lagos to Toronto seemed impossible, but Afrinexa made it happen.",
    result: "Moved from Nigeria to Canada, completed Master's, secured $120k job",
  },
  {
    name: "Fatima Hassan",
    role: "CEO, Lagos Trading Co.",
    location: "Lagos, Nigeria",
    category: "Trade",
    icon: Building,
    story: "Expanding our textile business to Europe seemed daunting. Afrinexa connected us with distributors in the UK and Germany. Our exports have tripled in two years.",
    result: "300% increase in exports, partnerships in 5 European countries",
  },
  {
    name: "Emmanuel Nwachukwu",
    role: "Mechanical Engineer",
    location: "Dubai, UAE",
    category: "Work Abroad",
    icon: Briefcase,
    story: "After years of searching for international opportunities, Afrinexa's Talent Hub connected me with a top engineering firm in Dubai. They handled everything from CV optimization to visa processing.",
    result: "Landed engineering role with 4x salary increase",
  },
  {
    name: "Grace Mensah",
    role: "Nurse",
    location: "London, UK",
    category: "Work Abroad",
    icon: Briefcase,
    story: "The UK nursing registration process was complex, but Afrinexa guided me through every step. They connected me with NHS employers and helped with my Skilled Worker visa.",
    result: "Working as a registered nurse in NHS London",
  },
  {
    name: "Kwame Asante",
    role: "Entrepreneur",
    location: "Accra, Ghana",
    category: "Trade",
    icon: Building,
    story: "Afrinexa helped us source quality products from Asia for our retail chain. Their trade facilitation services have transformed our supply chain.",
    result: "Reduced import costs by 40%, expanded to 15 stores",
  },
  {
    name: "Amina Yusuf",
    role: "Student",
    location: "Berlin, Germany",
    category: "Study Abroad",
    icon: GraduationCap,
    story: "Getting into a German university with a scholarship seemed like a dream. Afrinexa's study abroad team made it a reality with their expert guidance on applications and visa.",
    result: "Full scholarship at TU Berlin, studying Computer Science",
  },
];

const SuccessStories = () => {
  return (
    <>
      <Helmet>
        <title>Success Stories | Afrinexa Global Limited</title>
        <meta name="description" content="Read inspiring success stories from clients who achieved their global dreams with Afrinexa's help. Real people, real results." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 lg:pt-[160px] pb-20 gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Success <span className="text-gold">Stories</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Real stories from real people who achieved their global dreams with our help.
              </p>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <div
                  key={story.name}
                  className="bg-card rounded-2xl border border-border p-8 hover:border-gold/30 hover-lift"
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <story.icon className="w-5 h-5 text-gold" />
                    <span className="text-sm font-medium text-gold">{story.category}</span>
                  </div>

                  {/* Quote */}
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{story.story}"
                  </p>

                  {/* Result */}
                  <div className="p-4 rounded-lg bg-gold/10 mb-6">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-gold">Result:</span> {story.result}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {story.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{story.name}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SuccessStories;