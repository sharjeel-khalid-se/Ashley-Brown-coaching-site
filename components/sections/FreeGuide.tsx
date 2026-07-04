"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FreeGuide() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="free-guide"
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "#FFF0F6" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex flex-col sm:flex-row items-center gap-8 bg-white rounded-2xl"
          style={{
            maxWidth: "800px",
            padding: "36px 40px",
            boxShadow: "0 8px 40px rgba(232, 48, 106, 0.08), 0 2px 12px rgba(0,0,0,0.04)",
            border: "1px solid #F0D0DC",
            borderRadius: "20px",
          }}
        >
          {/* Left — Guide cover image */}
          <div
            className="flex-shrink-0"
            style={{
              width: "180px",
              height: "240px",
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src="/images/free_guide_cover.jpg"
              alt="The Fat-Loss Macro Method Guide — Free Download"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>

          {/* Right — Content */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Badge */}
            <span
              className="font-body font-bold self-start rounded-full"
              style={{
                background: "#FFE8F0",
                color: "#E8306A",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "5px 14px",
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
                fontSize: "clamp(24px, 3vw, 32px)",
                color: "#1A1A1A",
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              The Fat-Loss Macro Method Guide
            </h2>

            {/* Description */}
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                color: "#555555",
                lineHeight: 1.7,
                fontFamily: "var(--font-inter)",
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
              className="font-body font-semibold text-white rounded-full self-start transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "#E8306A",
                padding: "13px 28px",
                fontSize: "14px",
                fontFamily: "var(--font-inter)",
                display: "inline-block",
                boxShadow: "0 4px 20px rgba(232, 48, 106, 0.22)",
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
