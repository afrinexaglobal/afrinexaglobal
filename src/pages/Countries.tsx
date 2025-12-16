import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const regions = [
  {
    name: "Africa",
    countries: [
      { name: "Nigeria", services: ["Visa", "Trade", "Talent"] },
      { name: "Ghana", services: ["Visa", "Trade", "Talent"] },
      { name: "Kenya", services: ["Visa", "Trade", "Talent"] },
      { name: "South Africa", services: ["Visa", "Trade", "Talent"] },
      { name: "Egypt", services: ["Visa", "Trade"] },
    ],
  },
  {
    name: "Europe",
    countries: [
      { name: "United Kingdom", services: ["Visa", "Work", "Trade"] },
      { name: "Germany", services: ["Visa", "Work", "Study"] },
      { name: "France", services: ["Visa", "Study", "Work"] },
      { name: "Netherlands", services: ["Visa", "Work", "Trade"] },
      { name: "Poland", services: ["Visa", "Work", "Study"] },
    ],
  },
  {
    name: "North America",
    countries: [
      { name: "United States", services: ["Visa", "Study", "Work"] },
      { name: "Canada", services: ["Visa", "Study", "Work", "PR"] },
      { name: "Mexico", services: ["Visa", "Trade"] },
    ],
  },
  {
    name: "Asia & Middle East",
    countries: [
      { name: "United Arab Emirates", services: ["Visa", "Work", "Trade"] },
      { name: "Saudi Arabia", services: ["Visa", "Work"] },
      { name: "Thailand", services: ["Visa", "Trade"] },
      { name: "Malaysia", services: ["Visa", "Study", "Work"] },
      { name: "India", services: ["Visa", "Trade"] },
    ],
  },
];

const Countries = () => {
  return (
    <>
      <Helmet>
        <title>Countries & Regions We Serve | Afrinexa Global Limited</title>
        <meta name="description" content="Explore our services across 50+ countries in Africa, Europe, North America, Asia, and the Middle East." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Countries & <span className="text-gold">Regions</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Our global network spans over 50 countries, providing you with comprehensive services wherever you need them.
              </p>
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="space-y-16">
              {regions.map((region) => (
                <div key={region.name}>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-gold" />
                    {region.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {region.countries.map((country) => (
                      <div
                        key={country.name}
                        className="p-6 rounded-xl bg-card border border-border hover:border-gold/30 hover-lift"
                      >
                        <h3 className="font-semibold text-foreground mb-3">{country.name}</h3>
                        <div className="flex flex-wrap gap-2">
                          {country.services.map((service) => (
                            <span
                              key={service}
                              className="px-2 py-1 text-xs rounded-full bg-gold/10 text-gold"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Don't see your destination? Contact us - we likely have solutions for your needs.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Contact Us <ArrowRight className="w-4 h-4" />
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

export default Countries;