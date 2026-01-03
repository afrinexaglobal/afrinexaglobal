import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Afrinexa Global Limited</title>
        <meta name="description" content="Terms of Service for Afrinexa Global Limited describing user responsibilities and site terms." />
      </Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-6">Terms of Service</h1>
            <p className="mb-4 text-muted-foreground">Welcome to Afrinexa Global. By using our website and services you agree to these Terms of Service.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Use of the Site</h2>
            <p className="mb-4 text-muted-foreground">You agree to use the site lawfully and not to misuse any features or content. You are responsible for your account information and any activity that occurs under your account.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h2>
            <p className="mb-4 text-muted-foreground">All content and materials on this site are the property of Afrinexa Global or its licensors. Reproduction without permission is prohibited.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h2>
            <p className="mb-4 text-muted-foreground">To the fullest extent permitted by law, Afrinexa Global is not liable for indirect or consequential damages arising from use of the site.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Governing Law</h2>
            <p className="mb-4 text-muted-foreground">These terms are governed by the laws of the jurisdiction in which Afrinexa Global operates.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Contact</h2>
            <p className="mb-4 text-muted-foreground">Questions about these terms: info@afrinexaglobal.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
