import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Truck, Recycle } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Signal Your Plastic",
    description:
      "Open the app and tap 'Signal' when you've collected enough plastic. Your location is shared with nearby collectors.",
    color: "from-primary to-primary/80",
  },
  {
    icon: Truck,
    title: "Collectors Receive Pickup Tasks",
    description:
      "Nearby registered collectors get notified and accept your pickup. Track their arrival in real-time.",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Recycle,
    title: "Plastic Goes to Recyclers",
    description:
      "Collected plastic is sorted, weighed, and delivered to certified recyclers. You earn credits and impact points.",
    color: "from-accent to-accent/80",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Three Simple Steps to{" "}
            <span className="gradient-text">Make an Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process makes recycling effortless while ensuring
            fair compensation for everyone involved.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="feature-card h-full pt-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on mobile and for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 -translate-y-1/2 z-0">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary/50 to-secondary/50"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
