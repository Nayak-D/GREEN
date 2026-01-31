import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Scale, Truck, Users, MapPin } from "lucide-react";

const stats = [
  {
    icon: Scale,
    value: 52450,
    suffix: "kg",
    label: "Plastic Recycled",
    description: "Diverted from landfills and oceans",
  },
  {
    icon: Truck,
    value: 2847,
    suffix: "",
    label: "Pickups Completed",
    description: "Successful waste collection trips",
  },
  {
    icon: Users,
    value: 156,
    suffix: "",
    label: "Workers Employed",
    description: "Earning dignified livelihoods",
  },
  {
    icon: MapPin,
    value: 12,
    suffix: "",
    label: "Cities Served",
    description: "And expanding across the region",
  },
];

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  isInView: boolean;
}

const AnimatedCounter = ({ value, suffix, isInView }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setDisplayValue(current);

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  const formattedValue =
    displayValue >= 1000
      ? `${(displayValue / 1000).toFixed(displayValue >= 10000 ? 1 : 1)}K`
      : displayValue.toLocaleString();

  return (
    <span className="stat-counter">
      {displayValue >= 1000 && value >= 10000
        ? `${(displayValue / 1000).toFixed(1)}K`
        : displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const ImpactStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 eco-pattern" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Real Change,{" "}
            <span className="gradient-text">Real Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every signal you send contributes to measurable environmental and
            social impact. Here's what we've achieved together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="feature-card flex flex-col items-center py-8"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />

                <h3 className="text-lg font-semibold mt-2 mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
