"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  onApplyClick: () => void;
}

const trustItems = [
  { icon: "🩺", label: "Registered Nurse" },
  { icon: "💪", label: "Certified Trainer" },
  { icon: "⭐", label: "10,000+ Transformations" },
];

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative bg-white overflow-x-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background blush shape */}
      <div
        className="absolute hidden md:block"
        style={{
          width: "780px",
          height: "745px",
          background: "#FFE8F0",
          borderRadius: "50%",
          right: "24px",
          top: "50%",
          transform: "translateX(0px) translateY(269px) matrix(1, 0, 0, 1, 0, -372.5)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div
        className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full"
        style={{ zIndex: 1 }}
      >
        <div className="flex flex-col md:grid md:grid-cols-2 items-center md:min-h-screen">

          {/* ── LEFT COLUMN ── */}
          <div
            className="flex flex-col justify-center order-2 md:order-1 h-auto pt-10 pb-12 md:pt-[96px] md:pb-[48px]"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <span
                className="inline-flex sm:hidden  items-center rounded-full font-body font-semibold"
                style={{
                  background: "#FFE8F0",
                  color: "#E8306A",
                  fontSize: "12px",
                  letterSpacing: "0.04em",
                  padding: "6px 16px",
                  border: "1px solid #F0D0DC",
                  fontFamily: "var(--font-inter)",
                  marginBottom: "24px",
                  display: "inline-block",
                }}
              >
                Registered Nurse · Certified Trainer · Mom of 3
              </span>
            </motion.div>

            {/* Headline — no forced <br/>, let it wrap naturally */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
              className="font-display leading-tight md:leading-[1.0] h-auto"
              style={{
                fontSize: "clamp(42px, 5vw, 62px)",
                color: "#1A1A1A",
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
                maxWidth: "560px",
              }}
            >
              Science-Backed Body Transformation — From a Nurse Who&rsquo;s Done It Herself.
            </motion.h1>

            {/* Divider accent */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="relative"
              style={{
                height: "2px",
                width: "48px",
                background: "#E8306A",
                marginTop: "28px",
                marginBottom: "0px",
                transformOrigin: "left",
              }}
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="font-body"
              style={{
                fontSize: "17px",
                color: "#555555",
                lineHeight: 1.75,
                fontFamily: "var(--font-inter)",
                maxWidth: "480px",
                marginTop: "24px",
              }}
            >
              I&rsquo;m Ashley Brown — RN, Certified Trainer, and Nutritionist.
              I help women heal their core, balance their hormones, and build the
              body they actually want. No guessing. No generic plans. Just
              clinical precision.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{ marginTop: "36px" }}
            >
              <button
                id="hero-apply-btn"
                onClick={onApplyClick}
                className="font-body font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100"
                style={{
                  background: "#E8306A",
                  padding: "16px 38px",
                  fontSize: "16px",
                  fontFamily: "var(--font-inter)",
                  boxShadow: "0 8px 32px rgba(232, 48, 106, 0.28)",
                  whiteSpace: "nowrap",
                }}
              >
                Apply to Work With Ashley →
              </button>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-3"
              style={{ marginTop: "32px" }}
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.85 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-full"
                  style={{
                    background: "#FFF0F6",
                    border: "1px solid #F0D0DC",
                    padding: "8px 16px",
                  }}
                >
                  <span style={{ fontSize: "13px", lineHeight: 1 }}>{item.icon}</span>
                  <span
                    className="font-body font-medium"
                    style={{
                      fontSize: "12px",
                      color: "#1A1A1A",
                      fontFamily: "var(--font-inter)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Image ── */}
          <div className="relative order-1 md:order-2 flex flex-col items-center justify-center pt-24 md:pt-0 md:min-h-screen w-full">
            {/* Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="relative w-full max-w-sm mx-auto h-[320px] sm:h-[400px] md:max-w-none md:absolute md:w-[908px] md:h-[686px] md:top-[59px] md:left-[-124px]"
            >
              <Image
                src="/images/hero_nurse.png"
                alt="Ashley Brown — Registered Nurse and Body Transformation Coach"
                fill
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Mobile Badge - only visible on mobile, positioned neatly at bottom center */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[300px] md:hidden z-10 flex justify-center">
                <div
                  className="w-full text-center"
                  style={{
                    background: "white",
                    borderRadius: "40px",
                    padding: "10px 20px",
                    boxShadow: "0 4px 24px rgba(232,48,106,0.14), 0 1px 6px rgba(0,0,0,0.06)",
                    border: "1px solid #F0D0DC",
                  }}
                >
                  <p className="font-body font-semibold text-[13px] text-[#1A1A1A] whitespace-nowrap">
                    🩺 Ashley Brown, RN · CPT
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Badge - restored to exactly how it was before, only visible on md and up */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="hidden md:block absolute left-auto"
              style={{
                bottom: "80px",
                right: "0",
                background: "white",
                borderRadius: "40px",
                padding: "10px 20px",
                boxShadow: "0 4px 24px rgba(232,48,106,0.14), 0 1px 6px rgba(0,0,0,0.06)",
                border: "1px solid #F0D0DC",
                zIndex: 10,
              }}
            >
              <p
                className="font-body font-semibold"
                style={{
                  fontSize: "13px",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-inter)",
                  whiteSpace: "nowrap",
                }}
              >
                🩺 Ashley Brown, RN · CPT
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
