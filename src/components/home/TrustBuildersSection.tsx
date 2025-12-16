import { Shield, Handshake, Eye, Star, Quote } from "lucide-react";

const trustItems = [
  {
    icon: Handshake,
    title: "Global Partnerships",
    description: "Established relationships with embassies, consulates, and international organizations worldwide.",
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description: "Registered and compliant with all relevant regulatory bodies. Your applications are in safe hands.",
  },
  {
    icon: Eye,
    title: "100% Transparency",
    description: "Clear pricing, honest timelines, and regular updates throughout your application process.",
  },
  {
    icon: Star,
    title: "Client Success",
    description: "Over 10,000 successful applications with a 98% approval rate across all service categories.",
  },
];

const testimonials = [
  {
    quote: "Afrinexa made my dream of studying in Canada a reality. Their team handled everything professionally and kept me informed at every step.",
    author: "Adebayo Okonkwo",
    role: "Student, Canada",
    image: null,
  },
  {
    quote: "As a business owner, expanding to Europe seemed daunting. Afrinexa's trade team made it seamless with their expertise and network.",
    author: "Fatima Hassan",
    role: "CEO, Lagos Trading Co.",
    image: null,
  },
  {
    quote: "I found my dream job in Dubai through Afrinexa's Talent Hub. The process was smooth and they supported me until I settled in.",
    author: "Emmanuel Nwachukwu",
    role: "Engineer, UAE",
    image: null,
  },
];

export function TrustBuildersSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        {/* Trust Items */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built on <span className="text-gold">Trust & Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We've earned the trust of thousands of clients across the globe through our commitment to quality and transparency.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/30 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <p className="text-muted-foreground">Real stories from real people we've helped achieve their goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="bg-card rounded-xl p-6 border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="w-10 h-10 text-gold/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}