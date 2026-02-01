{/* 2027 Future Goals */ }
<div className="mt-12 mb-8">
  <div className="text-center text-lg font-semibold mb-4 text-primary">Our Vision for 2027</div>
  <div className="flex flex-wrap gap-8 justify-center">
    {[
      { value: "52.5Kkg", label: "Plastic Recycled", desc: "To be diverted from landfills and oceans" },
      { value: "2,847", label: "Pickups Completed", desc: "Targeted successful waste collection trips" },
      { value: "156", label: "Workers Employed", desc: "Aiming for dignified livelihoods" },
      { value: "12", label: "Cities Served", desc: "Expanding across the region" },
    ].map((stat) => (
      <div key={stat.label} className="text-center sm:text-left">
        <div className="text-2xl sm:text-3xl font-bold text-primary">
          {stat.value}
        </div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
        <div className="text-xs text-muted-foreground mt-1 italic">{stat.desc}</div>
      </div>
    ))}
  </div>
  <div className="text-xs text-muted-foreground mt-4 text-center italic">
    These are PlastiCycle's future-based goals for 2027, driving our mission forward.
  </div>
</div>

import { motion } from "framer-motion";
import { ArrowDown, Play, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import VideoBackground from "./VideoBackground";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background Only */}
        <VideoBackground />
      </section>
      {/* All Hero Content moved below video */}
      <section className="relative z-10 section-container pt-20 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Transforming Waste into Opportunity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Recycle and Earn with <span className="gradient-text">PlastiCycle</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Sell your recyclables online. Get cash and eco-coins for your contributions and use them to buy eco-friendly products from our eco-store. Download PlastiCycle and start your eco-friendly journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => handleScroll("#download")}
              className="btn-primary animate-pulse-glow"
            >
              <Smartphone className="w-5 h-5" />
              Get the App
            </button>
            <button
              onClick={() => handleScroll("#how-it-works")}
              className="btn-secondary"
            >
              <Play className="w-5 h-5" />
              Learn More
            </button>
          </motion.div>


        </div>
        {/* Scroll Indicator */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={() => handleScroll("#mission")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
