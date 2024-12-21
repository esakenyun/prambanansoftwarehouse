"use client";
import Navbar from "@/components/navigation/Navbar";
import AboutSection from "@/components/section/About";
import ContactSection from "@/components/section/Contact";
import ContactBottom from "@/components/section/ContactBottom";
import Footer from "@/components/section/Footer";
import HeroSection from "@/components/section/Hero";
import OurProjectSection from "@/components/section/OurProject";
import ServicesSection from "@/components/section/Services";

export default function Home() {
  // const smoothScrollTo = (targetY) => {
  //   const startY = window.scrollY;
  //   const distance = targetY - startY;
  //   const duration = 1;
  //   const frameRate = 60;
  //   const totalFrames = duration * frameRate;

  //   let frame = 0;

  //   const scrollStep = () => {
  //     frame++;
  //     const progress = frame / totalFrames;
  //     const scrollPosition = startY + distance * progress;

  //     window.scrollTo(0, scrollPosition);

  //     if (frame < totalFrames) {
  //       requestAnimationFrame(scrollStep);
  //     } else {
  //       window.scrollTo(0, targetY);
  //     }
  //   };

  //   requestAnimationFrame(scrollStep);
  // };

  // useEffect(() => {
  //   const lastScrollPosition = sessionStorage.getItem("scrollPosition");

  //   window.scrollTo(0, 0);

  //   setTimeout(() => {
  //     if (lastScrollPosition) {
  //       smoothScrollTo(Number(lastScrollPosition));
  //     }
  //   }, 200);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     sessionStorage.setItem("scrollPosition", window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <div>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        {/* <OurProductSection /> */}
        <OurProjectSection />
        <ContactSection />
      </div>
      <ContactBottom />
      <Footer />
    </main>
  );
}
