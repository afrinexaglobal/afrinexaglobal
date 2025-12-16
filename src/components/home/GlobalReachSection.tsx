import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Africa",
    countries: ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt"],
    highlight: true,
  },
  {
    name: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Netherlands", "Poland"],
  },
  {
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
  },
  {
    name: "Asia",
    countries: ["Thailand", "UAE", "Saudi Arabia", "Malaysia", "India"],
  },
  {
    name: "Middle East",
    countries: ["UAE", "Qatar", "Saudi Arabia", "Kuwait", "Bahrain"],
  },
];

const stats = [
  { value: "50+", label: "Countries Served" },
  { value: "10K+", label: "Successful Applications" },
  { value: "500+", label: "Business Partners" },
  { value: "98%", label: "Success Rate" },
];

export function GlobalReachSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">
            Global Presence
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Connecting You to the <span className="text-gold">World</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Our extensive network spans across continents, providing you with unparalleled access to global opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((region, index) => (
            <div
              key={region.name}
              className={`p-6 rounded-xl border transition-all duration-300 animate-fade-up ${
                region.highlight
                  ? "bg-gold/20 border-gold/30"
                  : "bg-primary-foreground/5 border-primary-foreground/10 hover:border-gold/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className={`w-5 h-5 ${region.highlight ? "text-gold" : "text-gold"}`} />
                <h3 className="font-display font-bold text-primary-foreground">
                  {region.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {region.countries.map((country) => (
                  <li key={country} className="text-primary-foreground/70 text-sm">
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}