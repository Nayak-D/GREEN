import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Calendar,
  CreditCard,
  Wallet,
  BarChart3,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Signal on Map",
    description:
      "Tap to signal your location and plastic availability. Nearby collectors see your request instantly.",
  },
  {
    icon: Calendar,
    title: "Weekly Pickup",
    description:
      "Schedule recurring pickups to fit your routine. Never miss a collection again.",
  },
  {
    icon: CreditCard,
    title: "Fair Pay & Employment",
    description:
      "Collectors earn transparent, fair wages for every pickup. Dignity in every transaction.",
  },
  {
    icon: Wallet,
    title: "Wallet & Earnings",
    description:
      "Track your earnings in real-time. Withdraw to mobile money or bank accounts instantly.",
  },
  {
    icon: BarChart3,
    title: "Impact Dashboard",
    description:
      "See your contribution: kilograms recycled, CO₂ saved, and community impact.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get updates on pickups, earnings, and environmental milestones you've helped achieve.",
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            App Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Recycle Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our app is designed for both households and collectors, making
            recycling seamless and rewarding for everyone.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <motion.div
                className="feature-card h-full group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
