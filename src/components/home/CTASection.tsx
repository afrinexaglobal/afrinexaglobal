import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your <span className="text-gold">Global Journey</span>?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Whether you're an individual seeking new opportunities or a business looking to expand, 
            we're here to guide you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/services/visa-assistance">
              <Button variant="heroGold" size="xl" className="w-full sm:w-auto">
                Start Your Application
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Book Free Consultation
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="tel:+2348151022244"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+234 815 102 2244</span>
            </a>
            <a
              href="mailto:info@afrinexaglobal.com"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@afrinexaglobal.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}