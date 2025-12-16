import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, FileText, Clock, Bell, ArrowRight, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ClientPortal = () => {
  return (
    <>
      <Helmet>
        <title>Client Portal | Afrinexa Global Limited</title>
        <meta name="description" content="Access your Afrinexa client portal to track applications, manage documents, and communicate with your dedicated consultant." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Client <span className="text-gold">Portal</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Track your applications, manage documents, and stay connected with your consultant.
              </p>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-24 bg-background">
          <div className="container-custom">
            <div className="max-w-md mx-auto">
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Sign In</h2>
                  <p className="text-muted-foreground text-sm mt-2">Access your client dashboard</p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-input" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <a href="#" className="text-gold hover:underline">Forgot password?</a>
                  </div>
                  <Button variant="gold" size="lg" className="w-full">
                    Sign In <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  New client? <Link to="/contact" className="text-gold hover:underline">Contact us</Link> to get started.
                </p>
              </div>

              {/* Features */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  { icon: FileText, title: "Document Management" },
                  { icon: Clock, title: "Application Tracking" },
                  { icon: Bell, title: "Real-time Updates" },
                  { icon: User, title: "Dedicated Support" },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <feature.icon className="w-5 h-5 text-gold" />
                    <span className="text-sm text-muted-foreground">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClientPortal;