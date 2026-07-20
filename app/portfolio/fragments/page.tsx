import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Fragments from "@/components/Fragments/Fragments";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the cinematic portfolio of Falbouni Productions, featuring high-end brand films, product launches, trailers, and visual storytelling crafted for ambitious brands.",
};

export default function FragmentsPage() {
  return (
    <>
      <Navbar />

      <main>
        <Fragments />
      </main>

      <Footer />
    </>
  );
}