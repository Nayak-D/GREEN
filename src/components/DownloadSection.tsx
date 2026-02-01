import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Download, QrCode } from "lucide-react";

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8 shadow-xl"
              >
                <Smartphone className="w-10 h-10 text-white" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-sm font-semibold text-primary uppercase tracking-wider"
              >
                Get Started Today
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6"
              >
                Recycle and Earn. <span className="gradient-text">Rewarding you for being Eco-friendly.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
              >
                Sell your recyclables online. Get cash and eco-coins for your contributions and use them to buy eco-friendly products from our eco-store. Download PlastiCycle and start your eco-friendly journey.
              </motion.p>

              {/* QR Code Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col items-center justify-center gap-4 text-muted-foreground"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                    <QrCode className="w-10 h-10" />
                  </div>
                  <div className="text-left text-sm">
                    <div className="font-medium text-foreground">Scan to download</div>
                    <div>Point your camera at the QR code</div>
                  </div>
                </div>
                {/* Provided QR code image below */}
                <img src="/qr-scan-app.png" alt="Scan to Open App QR" className="mt-4 w-40 h-40 object-contain" />
                <a
                  href="http://localhost:16000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-primary underline text-base hover:text-primary/80 transition-colors"
                >
                  Scan this or follow link
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
