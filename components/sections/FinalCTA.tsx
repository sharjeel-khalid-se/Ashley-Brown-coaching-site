"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FinalCTAProps {
  onApplyClick: () => void;
}

export default function FinalCTA({ onApplyClick }: FinalCTAProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="apply"
      ref={ref}
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        background: "#E8306A",
        minHeight: "60vh",
      }}
    >
      {/* Background decorative circles with improved performance */}
      <div
        className="absolute rounded-full opacity-10 blur-3xl"
        style={{
          width: "600px",
          height: "600px",
          background: "#ffffff",
          top: "-200px",
          right: "-200px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full opacity-10 blur-3xl"
        style={{
          width: "400px",
          height: "400px",
          background: "#ffffff",
          bottom: "-150px",
          left: "-100px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "#ffffff",
              fontFamily: "var(--font-cormorant)",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            Ready to finally see results
            <br className="hidden sm:block" /> that make sense for YOUR body?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-body mt-8"
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "var(--font-inter)",
            lineHeight: 1.6,
          }}
        >
          Applications are open. Spots are limited.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-12"
        >
          <button
            id="final-cta-apply-btn"
            onClick={onApplyClick}
            aria-label="Apply to work with Ashley"
            className="font-body font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8306A]"
            style={{
              background: "#ffffff",
              color: "#E8306A",
              padding: "20px 48px",
              fontSize: "16px",
              fontFamily: "var(--font-inter)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            }}
          >
            Apply to Work With Ashley →
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body mt-6"
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "var(--font-inter)",
          }}
        >
          No commitment. Just a conversation.
        </motion.p>
      </div>
    </section>
  );
}