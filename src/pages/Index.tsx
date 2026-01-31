import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import HowItWorks from "@/components/HowItWorks";
import ImpactStats from "@/components/ImpactStats";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "PlastiSignal - Turn Plastic into Value | Sustainable Recycling Platform";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "PlastiSignal connects households with plastic waste to collectors and recyclers using a signal-based weekly pickup system. Join thousands creating cleaner communities and dignified livelihoods."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "PlastiSignal connects households with plastic waste to collectors and recyclers using a signal-based weekly pickup system. Join thousands creating cleaner communities and dignified livelihoods.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <HowItWorks />
        <ImpactStats />
        <Features />
        <DownloadSection />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
