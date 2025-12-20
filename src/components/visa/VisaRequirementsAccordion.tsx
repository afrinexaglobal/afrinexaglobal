import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe, CheckCircle } from "lucide-react";

const visaRequirements = {
  Africa: {
    Egypt: {
      visa_type: "e-Visa / Embassy",
      requirements: [
        "Valid Nigerian passport (6 months)",
        "Passport photograph",
        "Hotel booking",
        "Flight itinerary",
        "Bank statement (3–6 months)",
        "Travel itinerary",
        "Visa fee",
      ],
    },
    Kenya: {
      visa_type: "Electronic Travel Authorization (eTA)",
      requirements: [
        "Valid passport",
        "Passport photo",
        "Hotel booking / invitation letter",
        "Flight ticket",
        "Travel details",
        "Visa fee",
      ],
    },
    Morocco: {
      visa_type: "Embassy visa",
      requirements: [
        "Valid passport",
        "Completed application form",
        "Passport photos",
        "Bank statements",
        "Hotel booking",
        "Flight reservation",
        "Travel insurance",
        "Cover letter",
      ],
    },
  },
  Europe: {
    "United Kingdom": {
      visa_type: "Standard Visitor Visa",
      requirements: [
        "Valid passport",
        "Online application & fee",
        "Bank statements (6 months)",
        "Proof of employment/business (CAC, tax)",
        "Hotel booking",
        "Flight itinerary",
        "Cover letter",
        "Ties to Nigeria",
      ],
    },
    France: {
      visa_type: "Schengen Tourist Visa",
      requirements: [
        "Valid passport",
        "Application form",
        "Passport photos",
        "Travel insurance (€30,000 coverage)",
        "Hotel booking",
        "Flight reservation",
        "Bank statements (6 months)",
        "Proof of income/employment",
        "Visa fee",
      ],
    },
    Germany: {
      visa_type: "Schengen Tourist Visa",
      requirements: [
        "Valid passport",
        "Application form",
        "Passport photos",
        "Bank statement",
        "Travel insurance",
        "Hotel booking",
        "Flight itinerary",
        "Proof of ties to Nigeria",
      ],
    },
  },
  Asia: {
    Japan: {
      visa_type: "Embassy visa",
      requirements: [
        "Valid passport",
        "Visa application form",
        "Passport photo",
        "Bank statement",
        "Hotel booking",
        "Flight itinerary",
        "Cover letter",
        "Letter of guarantee (if invited)",
      ],
    },
    China: {
      visa_type: "Embassy visa",
      requirements: [
        "Valid passport",
        "Visa application form",
        "Passport photos",
        "Bank statements",
        "Hotel booking or invitation letter",
        "Flight reservation",
        "Cover letter",
      ],
    },
    "South Korea": {
      visa_type: "Embassy visa",
      requirements: [
        "Valid passport",
        "Application form",
        "Passport photo",
        "Bank statement",
        "Hotel booking",
        "Flight itinerary",
        "Employment/business proof",
        "Invitation letter (if applicable)",
      ],
    },
  },
  "North America": {
    "United States": {
      visa_type: "B1/B2 Tourist Visa",
      requirements: [
        "Valid passport",
        "DS-160 form",
        "Visa fee payment",
        "Bank statements",
        "Employment/business proof",
        "Ties to Nigeria",
        "Interview at US Embassy",
      ],
    },
    Canada: {
      visa_type: "Visitor Visa",
      requirements: [
        "Valid passport",
        "Online application",
        "Bank statements",
        "Invitation letter (if any)",
        "Proof of income",
        "Travel history",
        "Biometrics",
      ],
    },
    Mexico: {
      visa_type: "Embassy visa",
      requirements: [
        "Valid passport",
        "Application form",
        "Bank statements",
        "Hotel booking",
        "Flight itinerary",
        "Passport photos",
        "Visa fee",
      ],
    },
  },
  "South America": {
    Brazil: {
      visa_type: "Embassy visa",
      requirements: [
        "Valid passport",
        "Application form",
        "Passport photos",
        "Bank statements",
        "Hotel booking",
        "Flight reservation",
        "Cover letter",
      ],
    },
    Argentina: {
      visa_type: "Embassy / Online (case-by-case)",
      requirements: [
        "Valid passport",
        "Application form",
        "Bank statements",
        "Hotel booking",
        "Flight ticket",
        "Travel insurance",
      ],
    },
    Chile: {
      visa_type: "Embassy visa",
      requirements: [
        "Valid passport",
        "Visa application",
        "Bank statements",
        "Proof of accommodation",
        "Flight itinerary",
        "Cover letter",
      ],
    },
  },
  Oceania: {
    Australia: {
      visa_type: "Visitor Visa (Subclass 600)",
      requirements: [
        "Valid passport",
        "Online application",
        "Bank statements",
        "Proof of employment/business",
        "Travel itinerary",
        "Invitation letter (if applicable)",
      ],
    },
    "New Zealand": {
      visa_type: "Visitor Visa",
      requirements: [
        "Valid passport",
        "Online application",
        "Bank statements",
        "Travel itinerary",
        "Proof of income",
        "Accommodation details",
      ],
    },
    Fiji: {
      visa_type: "Visa-free (limited stay)",
      requirements: [
        "Valid passport",
        "Return ticket",
        "Proof of funds",
        "Accommodation details",
      ],
    },
  },
};

const generalRequirements = [
  "Nigerian passport (6 months validity)",
  "Bank statement (3–6 months)",
  "Hotel booking",
  "Flight itinerary",
  "Proof of income or business",
  "Cover letter",
  "Travel insurance (often required)",
];

export function VisaRequirementsAccordion() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Global Visa Requirements by Region
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore visa requirements for popular destinations across different regions.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {Object.entries(visaRequirements).map(([region, countries]) => (
            <AccordionItem
              key={region}
              value={region}
              className="border border-border rounded-2xl bg-card px-6 overflow-hidden"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-display text-xl font-bold text-foreground">
                    {region}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {Object.entries(countries).map(([country, data]) => (
                    <div
                      key={country}
                      className="p-5 rounded-xl bg-muted/50 border border-border"
                    >
                      <h4 className="font-display text-lg font-bold text-foreground mb-1">
                        {country}
                      </h4>
                      <p className="text-sm text-gold font-medium mb-4">
                        {data.visa_type}
                      </p>
                      <ul className="space-y-2">
                        {data.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* General Requirements */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            General Requirements Across Most Countries
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {generalRequirements.map((req, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/30"
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
