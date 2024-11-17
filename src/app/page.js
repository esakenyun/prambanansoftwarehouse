"use client";
import Navbar from "@/components/navigation/Navbar";
import AboutSection from "@/components/section/About";
import ContactSection from "@/components/section/Contact";
import ContactBottom from "@/components/section/ContactBottom";
import Footer from "@/components/section/Footer";
import HeroSection from "@/components/section/Hero";
import ServicesSection from "@/components/section/Services";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </div>
      <ContactBottom />
      <Footer />
    </main>
  );
}
