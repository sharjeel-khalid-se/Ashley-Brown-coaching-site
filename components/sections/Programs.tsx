"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

interface ProgramsProps {
  onApplyClick: () => void;
}

const program1Features = [
  "Personalized protocol",
  "Hormone-informed nutrition",
  "Weekly check-ins",
  "Clinical approach to diastasis recti",
];

const program2Features = [
  "Customized workout plan",
  "Nutrition guidance",
  "Free bonus guides",
  "Progress assessment",
];

export default function Programs({ onApplyClick }: ProgramsProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const card1Ref = useRef<HTMLDivElement>(null);
  const card1InView = useInView(card1Ref, { once: true, margin: "-50px" });
  const card2Ref = useRef<HTMLDivElement>(null);
  const card2InView = useInView(card2Ref, { once: true, margin: "-50px" });

  return (
    <section id="programs" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              color: "#1A1A1A",
              fontFamily: "var(--font-cormorant)",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            How We Work Together
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* ── Card 1: Restore The Core ── */}
          <motion.div
            ref={card1Ref}
            initial={{ opacity: 0, y: 40 }}
            animate={card1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            // Added 'group', 'hover:shadow-xl', and smooth transitions
            className="rounded-2xl flex flex-col overflow-hidden group transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(232,48,106,0.08)]"
            style={{
              background: "#FFF0F6",
              borderTop: "4px solid #E8306A", // Slightly thicker for emphasis
              borderRadius: "16px",
            }}
          >
            {/* Card 1 — Hero image with zoom effect */}
            <div style={{ position: "relative", height: "240px", width: "100%", flexShrink: 0 }} className="overflow-hidden">
              <Image
                src="/images/restore_core_mockup.jpg"
                alt="Restore The Core Program"
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "cover", objectPosition: "top center", borderRadius: "0" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div style={{ padding: "36px 40px 48px", display: "flex", flexDirection: "column", height: "100%" }}>
              {/* Badge */}
              <span
                className="font-body font-bold self-start rounded-full mb-6"
                style={{
                  background: "#E8306A",
                  color: "#ffffff",
                  padding: "6px 16px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Most Popular
              </span>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(26px, 3vw, 32px)",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                }}
              >
                Restore The Core
              </h3>

              <p
                className="font-body font-semibold mt-2"
                style={{
                  fontSize: "14px",
                  color: "#E8306A",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Postpartum Core Restoration Program
              </p>

              <p
                className="font-body mt-5"
                style={{
                  fontSize: "16px",
                  color: "#555555",
                  lineHeight: 1.7,
                  fontFamily: "var(--font-inter)",
                }}
              >
                For postpartum moms, C-section recovery, and diastasis recti. This
                is the clinical program that has helped thousands of women heal
                their core dysfunction — not just train around it.
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-4 mt-8 flex-1">
                {program1Features.map((feat) => (
                  <li key={feat} className="flex items-center gap-4">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "#FFE8F0" }}
                    >
                      <Check size={12} color="#E8306A" strokeWidth={3} />
                    </span>
                    <span
                      className="font-body"
                      style={{
                        fontSize: "15px",
                        color: "#1A1A1A",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Accessible Button */}
              <button
                id="programs-restore-apply-btn"
                onClick={onApplyClick}
                className="font-body font-semibold text-white rounded-full mt-10 transition-all duration-300 hover:bg-[#D4255A] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8306A] focus-visible:ring-offset-2"
                style={{
                  background: "#E8306A",
                  padding: "16px",
                  fontSize: "16px",
                  fontFamily: "var(--font-inter)",
                  width: "100%",
                  boxShadow: "0 8px 24px rgba(232, 48, 106, 0.25)",
                }}
              >
                Apply Now →
              </button>
            </div>
          </motion.div>

          {/* ── Card 2: 30 Day Challenge ── */}
          <motion.div
            ref={card2Ref}
            initial={{ opacity: 0, y: 40 }}
            animate={card2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="rounded-2xl flex flex-col overflow-hidden group transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
            style={{
              background: "#ffffff",
              border: "1px solid #F0D0DC",
              borderTop: "4px solid #1A1A1A",
              borderRadius: "16px",
            }}
          >
            {/* Card 2 — Hero image with zoom effect */}
            <div style={{ position: "relative", height: "240px", width: "100%", flexShrink: 0 }} className="overflow-hidden">
              <Image
                src="/images/challenge_mockup.jpg"
                alt="30 Day Ab + Glute Challenge"
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: "cover", objectPosition: "top center", borderRadius: "0" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div style={{ padding: "36px 40px 48px", display: "flex", flexDirection: "column", height: "100%" }}>
              {/* Badge + pricing */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-body font-bold self-start rounded-full"
                  style={{
                    background: "#1A1A1A",
                    color: "#ffffff",
                    padding: "6px 16px",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  $99.99
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(26px, 3vw, 32px)",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                }}
              >
                30 Day Ab + Glute Challenge
              </h3>

              {/* Price */}
              <div className="flex items-center gap-3 mt-3">
                <span
                  className="font-body line-through"
                  style={{
                    fontSize: "16px",
                    color: "#999999",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  $175
                </span>
                <span
                  className="font-body font-bold"
                  style={{
                    fontSize: "24px",
                    color: "#1A1A1A",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  $99.99
                </span>
              </div>

              <p
                className="font-body mt-5"
                style={{
                  fontSize: "16px",
                  color: "#555555",
                  lineHeight: 1.7,
                  fontFamily: "var(--font-inter)",
                }}
              >
                30 days. Defining abs, growing stronger glutes, and building real
                momentum. At-home or gym options. Nutrition guidance included.
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-4 mt-8 flex-1">
                {program2Features.map((feat) => (
                  <li key={feat} className="flex items-center gap-4">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "#F5F5F5" }}
                    >
                      <Check size={12} color="#1A1A1A" strokeWidth={3} />
                    </span>
                    <span
                      className="font-body"
                      style={{
                        fontSize: "15px",
                        color: "#1A1A1A",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                id="programs-challenge-btn"
                onClick={onApplyClick}
                className="font-body font-semibold text-white rounded-full mt-10 transition-all duration-300 hover:bg-[#333333] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2"
                style={{
                  background: "#1A1A1A",
                  padding: "16px",
                  fontSize: "16px",
                  fontFamily: "var(--font-inter)",
                  width: "100%",
                }}
              >
                Join the Challenge →
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}