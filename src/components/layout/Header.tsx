import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Briefcase, Users, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const services = [
  { name: "Visa Assistance", href: "/services/visa-assistance", icon: Globe, desc: "Immigration & visa support across African markets." },
  { name: "Trade & Investment", href: "/services/trade-investment", icon: Briefcase, desc: "Market entry, partnerships and investment facilitation." },
  { name: "Talent Hub", href: "/services/talent-hub", icon: Users, desc: "Recruitment, remote talent, and skill development." },
  { name: "Marketplace", href: "/services/marketplace", icon: ShoppingBag, desc: "Buy, sell and connect with verified businesses." },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-lg pt-4 pb-2"
          : "bg-transparent pt-6 pb-4"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://i.ibb.co/hR9wpJjg/Afrinexa.png"
              alt="Afrinexa Global"
              className="w-[203px] h-[109px] max-w-full object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-200",
                        isScrolled
                          ? "text-white hover:text-gold hover:bg-muted"
                          : "text-primary-foreground/90 hover:text-gold hover:bg-primary-foreground/10"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isServicesOpen && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Mega Menu */}
                    <div className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                      isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}>
                      <div className="bg-card rounded-xl shadow-xl border border-border p-6 w-[760px]">
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="group flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold transition-transform group-hover:scale-105">
                                <service.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="text-foreground font-medium">{service.name}</div>
                                <div className="text-sm text-muted-foreground mt-1 max-w-[260px]">{service.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                      isScrolled
                        ? "text-white hover:text-gold hover:bg-muted"
                        : "text-primary-foreground/90 hover:text-gold hover:bg-primary-foreground/10",
                      location.pathname === link.href && "text-gold"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/services/visa-assistance">
              <Button variant={isScrolled ? "gold" : "heroGold"} size="sm">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-[600px] mt-4" : "max-h-0"
        )}>
          <div className="bg-card rounded-xl shadow-xl border border-border p-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isServicesOpen && "rotate-180"
                      )} />
                    </button>
                    <div className={cn(
                      "pl-4 space-y-1 overflow-hidden transition-all duration-200",
                      isServicesOpen ? "max-h-[300px] mt-2" : "max-h-0"
                    )}>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <service.icon className="w-4 h-4 text-gold" />
                          <span className="text-muted-foreground">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg font-medium hover:bg-muted transition-colors",
                      location.pathname === link.href ? "text-gold" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <Link to="/services/visa-assistance" className="block">
                <Button variant="gold" className="w-full">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
