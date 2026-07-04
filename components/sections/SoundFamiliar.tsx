"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SoundFamiliarProps {
  onApplyClick: () => void;
}

const painPoints = [
  {
    id: 1,
    text: "You've had a C-section or vaginal birth and still feel like you're walking around with a shelf.",
  },
  {
    id: 2,
    text: "You have stubborn belly fat that won't budge no matter what you try.",
  },
  {
    id: 3,
    text: "Your labs show PCOS or hormonal imbalance and nothing seems to work.",
  },
  {
    id: 4,
    text: "You're done with random programs — you want something actually backed by science.",
  },
];

function PainCard({ item, index }: { item: (typeof painPoints)[0]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      // Custom easing curve for a more premium, smooth reveal
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="bg-white rounded-xl list-none"
      style={{
        borderLeft: "4px solid #E8306A", // Slightly thicker for presence
        padding: "32px 36px", // Increased padding for breathing room
        boxShadow: "0 10px 40px -10px rgba(232, 48, 106, 0.08)", // Subtle, expensive-looking shadow
      }}
    >
      <p
        className="font-body"
        style={{
          fontSize: "17px", // Slightly larger to match Hero body text
          color: "#333333", // Softer black for better contrast
          lineHeight: 1.7,
          fontFamily: "var(--font-inter)",
        }}
      >
        {item.text}
      </p>
    </motion.li>
  );
}

export default function SoundFamiliar({ onApplyClick }: SoundFamiliarProps) {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section
      id="sound-familiar"
      className="py-24 lg:py-32"
      style={{ background: "#FFF0F6" }}
    >
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16" // Increased bottom margin
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 56px)",
              color: "#1A1A1A",
              fontFamily: "var(--font-cormorant)",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            Sound familiar?
          </h2>
        </motion.div>

        {/* Pain point cards (Semantic UL instead of DIV) */}
        <ul className="flex flex-col gap-6 m-0 p-0"> 
          {painPoints.map((item, i) => (
            <PainCard key={item.id} item={item} index={i} />
          ))}
        </ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16" // Increased top margin
        >
          <button
            id="sound-familiar-cta-btn"
            onClick={onApplyClick}
            aria-label="Yes, this is me - Apply to work with Ashley"
            className="font-body font-medium transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8306A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FFF0F6] rounded-sm"
            style={{
              color: "#E8306A",
              fontSize: "17px",
              fontFamily: "var(--font-inter)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span className="border-b border-transparent group-hover:border-[#E8306A] pb-1 transition-all duration-300">
              Yes, this is me →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}