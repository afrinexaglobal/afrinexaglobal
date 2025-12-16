import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Briefcase, Users, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { name: "Visa Assistance", href: "/services/visa-assistance", icon: Globe },
  { name: "Work Abroad", href: "/services/work-abroad", icon: Briefcase },
  { name: "Trade & Investment", href: "/services/trade-investment", icon: Users },
  { name: "Talent Hub", href: "/services/talent-hub", icon: Users },
  { name: "Marketplace", href: "/services/marketplace", icon: ShoppingBag },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Countries", href: "/countries" },
  { name: "Resources", href: "/resources" },
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
          ? "bg-card/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-lg leading-tight transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                Afrinexa
              </span>
              <span className={cn(
                "text-xs leading-tight transition-colors",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              )}>
                Global Limited
              </span>
            </div>
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
                          ? "text-foreground hover:bg-muted"
                          : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isServicesOpen && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Dropdown */}
                    <div className={cn(
                      "absolute top-full left-0 pt-2 transition-all duration-200",
                      isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}>
                      <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[220px]">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                          >
                            <service.icon className="w-5 h-5 text-gold group-hover:text-gold-dark transition-colors" />
                            <span className="text-foreground font-medium">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                      isScrolled
                        ? "text-foreground hover:bg-muted"
                        : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10",
                      location.pathname === link.href && "text-gold"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/client-portal">
              <Button variant={isScrolled ? "outline" : "hero"} size="sm">
                Client Portal
              </Button>
            </Link>
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
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
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
            <div className="pt-4 space-y-2 border-t border-border">
              <Link to="/client-portal" className="block">
                <Button variant="outline" className="w-full">Client Portal</Button>
              </Link>
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