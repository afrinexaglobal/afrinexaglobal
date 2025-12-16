import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FourPillarsSection } from "@/components/home/FourPillarsSection";
import { ClientSegmentsSection } from "@/components/home/ClientSegmentsSection";
import { GlobalReachSection } from "@/components/home/GlobalReachSection";
import { TrustBuildersSection } from "@/components/home/TrustBuildersSection";
import { FeaturedBlogSection } from "@/components/home/FeaturedBlogSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Global Visa, Trade, Talent & Marketplace Platform | Afrinexa Global Limited</title>
        <meta name="description" content="Afrinexa Global Limited connects Africa to the world through visa assistance, trade & investment, global talent exchange, and cross-border marketplaces." />
        <meta name="keywords" content="Visa Assistance Africa, Study Abroad, Work Abroad, Trade and Investment Africa, Talent Hub Africa, Global Marketplace" />
        <meta property="og:title" content="Afrinexa Global Limited - Bridging Africa and the World" />
        <meta property="og:description" content="Expert visa assistance, trade facilitation, talent exchange, and marketplace solutions connecting Africa to global opportunities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://afrinexa.com" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <FourPillarsSection />
        <ClientSegmentsSection />
        <GlobalReachSection />
        <TrustBuildersSection />
        <FeaturedBlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;