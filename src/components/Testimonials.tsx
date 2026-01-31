import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "PlastiSignal has completely changed how my neighborhood handles plastic waste. Instead of it piling up, we just signal and it's gone within days. It feels good to know it's being recycled properly.",
    name: "Amara Okonkwo",
    role: "Household User, Lagos",
    avatar: "AO",
  },
  {
    quote:
      "Before PlastiSignal, I was just scavenging for recyclables. Now I have a steady income, proper routes, and respect. My family is proud of the work I do.",
    name: "Emmanuel Adeyemi",
    role: "Waste Collector, Accra",
    avatar: "EA",
  },
  {
    quote:
      "The transparency is what I love most. I can see exactly how much plastic I've helped recycle and the impact it's having. It's motivating!",
    name: "Fatima Mensah",
    role: "Community Leader, Nairobi",
    avatar: "FM",
  },
  {
    quote:
      "As a recycling partner, PlastiSignal brings us consistent, quality-sorted plastic. The supply chain is more reliable than ever before.",
    name: "David Kamau",
    role: "Recycling Plant Manager",
    avatar: "DK",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Community Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Voices from the{" "}
            <span className="gradient-text">PlastiSignal Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from households, collectors, and partners who are
            making recycling work for everyone.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="feature-card p-8 sm:p-12"
          >
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Quote */}
            <motion.blockquote
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl text-foreground leading-relaxed mb-8"
            >
              "{testimonials[currentIndex].quote}"
            </motion.blockquote>

            {/* Author */}
            <motion.div
              key={`author-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <div className="font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
