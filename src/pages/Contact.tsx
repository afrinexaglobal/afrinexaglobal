import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { toast } from "sonner";

const offices = [
  {
    country: "Nigeria",
    address: "No 44 University Road, Tanke, Ilorin, Kwara State, Nigeria",
    phones: ["+234 815 102 2244", "+234 707 775 4045"],
    email: "nigeria@afrinexa.com",
  },
  {
    country: "Thailand",
    address: "No 66 Charansanitwong Road, Bangkok, Thailand",
    phones: ["+66 XXX XXX XXXX"],
    email: "thailand@afrinexa.com",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Afrinexa Global Limited</title>
        <meta name="description" content="Get in touch with Afrinexa Global Limited. Offices in Nigeria and Thailand. Contact us for visa assistance, trade, talent, and marketplace inquiries." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Get In <span className="text-gold">Touch</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Have questions? We're here to help. Reach out to us and our team will respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Interest</label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="">Select a service</option>
                        <option value="visa">Visa Assistance</option>
                        <option value="work">Work Abroad</option>
                        <option value="trade">Trade & Investment</option>
                        <option value="talent">Talent Hub</option>
                        <option value="marketplace">Marketplace</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">Our Offices</h2>
                <div className="space-y-8">
                  {offices.map((office) => (
                    <div key={office.country} className="p-6 rounded-2xl bg-muted/30 border border-border">
                      <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-gold" />
                        {office.country} Office
                      </h3>
                      <div className="space-y-3">
                        <p className="text-muted-foreground text-sm">{office.address}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-gold" />
                          <span className="text-foreground">{office.phones.join(" / ")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-gold" />
                          <a href={`mailto:${office.email}`} className="text-foreground hover:text-gold transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-primary text-primary-foreground">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-gold" />
                    <h3 className="font-display text-lg font-bold">Business Hours</h3>
                  </div>
                  <p className="text-primary-foreground/80 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM (WAT)<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;