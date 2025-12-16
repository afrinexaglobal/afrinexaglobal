import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileText, Download, ExternalLink, BookOpen, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const resources = [
  {
    category: "Visa Guides",
    items: [
      { title: "Complete UK Visa Guide", type: "PDF", size: "2.4 MB" },
      { title: "Canada Study Permit Checklist", type: "PDF", size: "1.8 MB" },
      { title: "Schengen Visa Requirements", type: "PDF", size: "1.5 MB" },
    ],
  },
  {
    category: "Trade Resources",
    items: [
      { title: "Export Documentation Guide", type: "PDF", size: "3.2 MB" },
      { title: "African Trade Regulations Overview", type: "PDF", size: "2.1 MB" },
      { title: "Import/Export Compliance Checklist", type: "PDF", size: "1.2 MB" },
    ],
  },
  {
    category: "Career Resources",
    items: [
      { title: "International CV Template", type: "DOCX", size: "450 KB" },
      { title: "Interview Preparation Guide", type: "PDF", size: "1.8 MB" },
      { title: "Salary Negotiation Tips", type: "PDF", size: "900 KB" },
    ],
  },
];

const faqs = [
  {
    question: "How long does the visa application process take?",
    answer: "Processing times vary by country and visa type. Tourist visas typically take 2-4 weeks, while work and study visas can take 4-12 weeks. We provide estimated timelines for each application.",
  },
  {
    question: "What documents do I need for a visa application?",
    answer: "Required documents vary by visa type but generally include valid passport, passport photos, proof of funds, travel itinerary, and supporting documents specific to your visa category.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer: "No agency can guarantee visa approval as the final decision rests with the embassy. However, our expert review and guidance significantly increase your chances of success.",
  },
  {
    question: "How do I track my application status?",
    answer: "Once you're a client, you can track your application through our Client Portal. You'll also receive regular email updates at each stage of the process.",
  },
];

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources & FAQs | Afrinexa Global Limited</title>
        <meta name="description" content="Access free resources, guides, and FAQs for visa applications, trade documentation, and career development." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Resources & <span className="text-gold">Support</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Free guides, templates, and answers to help you on your global journey.
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-12">
              <BookOpen className="w-8 h-8 text-gold" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Downloadable Resources
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((category) => (
                <div key={category.category} className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-gold" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.type} • {item.size}</p>
                          </div>
                        </div>
                        <Download className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="py-24 bg-muted/30">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-12">
              <HelpCircle className="w-8 h-8 text-gold" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-card rounded-xl border border-border overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <span className="text-gold text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;