import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}