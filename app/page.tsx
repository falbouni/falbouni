import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import PortfolioPreview from "@/components/PortfolioPreview/PortfolioPreview";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Intro />

        <CaseStudy />

        <PortfolioPreview />

        <Contact />

        <Footer />

      </main>
    </>
  );
}