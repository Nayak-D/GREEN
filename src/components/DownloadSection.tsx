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
                Download the{" "}
                <span className="gradient-text">PlastiSignal App</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
              >
                Join thousands of households and collectors already making a
                difference. Available on Android with iOS coming soon.
              </motion.p>

              {/* Download Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl hover:opacity-90 transition-opacity group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-75">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 border-2 border-foreground text-foreground px-8 py-4 rounded-xl hover:bg-foreground hover:text-background transition-colors"
                >
                  <Download className="w-7 h-7" />
                  <div className="text-left">
                    <div className="text-xs opacity-75">Direct Download</div>
                    <div className="text-lg font-semibold">APK File</div>
                  </div>
                </a>
              </motion.div>

              {/* QR Code Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center justify-center gap-4 text-muted-foreground"
              >
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                  <QrCode className="w-10 h-10" />
                </div>
                <div className="text-left text-sm">
                  <div className="font-medium text-foreground">Scan to download</div>
                  <div>Point your camera at the QR code</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
