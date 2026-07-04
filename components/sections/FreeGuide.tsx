"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FreeGuide() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="free-guide"
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "#FFF0F6" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          // Premium easing curve for a buttery smooth entrance
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          // Added group class for image hover effect and a subtle lift on the card itself
          className="w-full flex flex-col sm:flex-row items-center gap-8 lg:gap-10 bg-white group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(232,48,106,0.08)]"
          style={{
            maxWidth: "800px",
            padding: "40px", // Simplified padding
            boxShadow: "0 8px 40px rgba(232, 48, 106, 0.05), 0 2px 12px rgba(0,0,0,0.03)",
            border: "1px solid #F0D0DC",
            borderRadius: "24px", // Slightly rounder for a modern feel
          }}
        >
          {/* Left — Guide cover image */}
          <div
            // Replaced inline fixed styles with Tailwind for better mobile responsiveness
            className="flex-shrink-0 relative overflow-hidden mx-auto sm:mx-0 w-[160px] h-[220px] sm:w-[180px] sm:h-[240px]"
            style={{
              borderRadius: "12px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src="/images/free_guide_cover.jpg"
              alt="The Fat-Loss Macro Method Guide — Free Download"
              fill
              // Added subtle scale effect on hover
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 160px, 180px"
            />
          </div>

          {/* Right — Content */}
          <div className="flex flex-col gap-4 flex-1 items-center sm:items-start text-center sm:text-left">
            {/* Badge */}
            <span
              className="font-body font-bold rounded-full"
              style={{
                background: "#FFE8F0",
                color: "#E8306A",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 16px",
                border: "1px solid #F0D0DC",
                fontFamily: "var(--font-inter)",
              }}
            >
              Free Download
            </span>

            {/* Title */}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(26px, 3vw, 34px)",
                color: "#1A1A1A",
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600, // Matched weight with previous sections
                lineHeight: 1.15,
              }}
            >
              The Fat-Loss Macro Method Guide
            </h2>

            {/* Description */}
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                color: "#555555",
                lineHeight: 1.7,
                fontFamily: "var(--font-inter)",
                maxWidth: "400px",
              }}
            >
              Take the guesswork out of nutrition. This free guide shows you
              exactly what to eat and how much — so you can lose fat without
              starving yourself.
            </p>

            {/* CTA */}
            <a
              href="/PDF/Fat-loss_macro_method_guide.pdf"
              id="free-guide-download-btn"
              target="_blank"
              rel="noopener noreferrer"
              download="Fat-Loss-Macro-Method-Guide.pdf"
              aria-label="Download the free Fat-Loss Macro Method Guide PDF"
              className="font-body font-semibold text-white rounded-full transition-all duration-300 hover:bg-[#D4255A] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8306A] focus-visible:ring-offset-2 mt-2"
              style={{
                background: "#E8306A",
                padding: "14px 32px",
                fontSize: "15px",
                fontFamily: "var(--font-inter)",
                display: "inline-block",
                boxShadow: "0 8px 24px rgba(232, 48, 106, 0.25)",
                textDecoration: "none",
              }}
            >
              Download Free Guide →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}