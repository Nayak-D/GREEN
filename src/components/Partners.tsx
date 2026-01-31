import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Handshake, Award, Globe } from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Recycling Partners",
    description:
      "We work with certified recycling facilities to ensure all collected plastic is properly processed and given new life.",
  },
  {
    icon: Handshake,
    title: "CSR Supporters",
    description:
      "Corporate partners support our mission through funding, technology, and expanding our reach to new communities.",
  },
  {
    icon: Award,
    title: "NGO Collaborators",
    description:
      "Environmental and social organizations help us maximize impact and reach underserved communities.",
  },
  {
    icon: Globe,
    title: "Government Agencies",
    description:
      "Municipal partnerships help integrate our system with city waste management infrastructure.",
  },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" ref={ref} className="py-24 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Building a{" "}
            <span className="gradient-text">Circular Economy Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            PlastiSignal connects households, collectors, recyclers, and
            partners in a transparent value chain that benefits everyone.
          </p>
        </motion.div>

        {/* Partner Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className="feature-card h-full text-center"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <partner.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{partner.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Interested in partnering with PlastiSignal?
          </p>
          <a
            href="#contact"
            className="btn-secondary inline-flex"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
