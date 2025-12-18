import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Afrinexa Global Limited</title>
        <meta name="description" content="Privacy policy for Afrinexa Global Limited describing how we collect and handle personal data." />
      </Helmet>
      <Header />
      <main className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4 text-muted-foreground">
              Afrinexa Global Limited is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
            <p className="mb-4 text-muted-foreground">We may collect information you provide directly (e.g., contact forms, subscription emails), usage data, and technical information (cookies, device and browser data).</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Information</h2>
            <p className="mb-4 text-muted-foreground">We use collected information to provide services, respond to inquiries, improve our site, send transactional messages, and comply with legal obligations.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Sharing & Third Parties</h2>
            <p className="mb-4 text-muted-foreground">We may share information with service providers (e.g., hosting, analytics) and when required by law. We do not sell personal data.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Your Rights</h2>
            <p className="mb-4 text-muted-foreground">Depending on your jurisdiction, you may have rights to access, correct, or delete your data. Contact us at info@afrinexa.com for requests.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Contact</h2>
            <p className="mb-4 text-muted-foreground">If you have questions about this policy, please contact us at info@afrinexa.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
