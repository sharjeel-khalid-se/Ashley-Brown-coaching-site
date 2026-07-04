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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white rounded-lg"
      style={{
        borderLeft: "3px solid #E8306A",
        padding: "24px 28px",
        borderRadius: "8px",
      }}
    >
      <p
        className="font-body"
        style={{
          fontSize: "16px",
          color: "#1A1A1A",
          lineHeight: 1.65,
          fontFamily: "var(--font-inter)",
        }}
      >
        {item.text}
      </p>
    </motion.div>
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
      <div className="max-w-[860px] mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
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

        {/* Pain point cards */}
        <div className="flex flex-col gap-4">
          {painPoints.map((item, i) => (
            <PainCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            id="sound-familiar-cta-btn"
            onClick={onApplyClick}
            className="font-body font-medium transition-all duration-200 group"
            style={{
              color: "#E8306A",
              fontSize: "16px",
              fontFamily: "var(--font-inter)",
              background: "transparent",
              border: "none",
            }}
          >
            <span className="border-b border-transparent group-hover:border-[#E8306A] transition-all duration-200">
              Yes, this is me →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
