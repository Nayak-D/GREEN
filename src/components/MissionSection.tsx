import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Leaf, Users } from "lucide-react";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description:
        "Every signal contributes to reducing plastic pollution and protecting our ecosystems.",
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description:
        "Creating dignified employment opportunities for waste collectors and their families.",
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description:
        "Building a circular economy where everyone benefits from sustainable practices.",
    },
  ];

  return (
    <section
      id="mission"
      ref={ref}
      className="py-24 lg:py-32 bg-muted/30 eco-pattern"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Recycling That{" "}
              <span className="gradient-text">Empowers Everyone</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              PlastiSignal empowers households and communities to recycle plastic
              responsibly while creating dignified employment for waste collectors.
              We believe that solving the plastic crisis requires connecting everyone
              in the value chain — from the household to the recycler.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our signal-based system ensures efficient collection routes, fair
              compensation for workers, and transparent tracking of your
              environmental impact. Together, we're building a cleaner, more
              equitable future.
            </p>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="feature-card flex gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
