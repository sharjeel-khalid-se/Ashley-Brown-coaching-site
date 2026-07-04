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
    >
      {/* Background blush shape */}
      <div
        className="absolute hidden lg:block"
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
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[100svh] gap-6 lg:gap-0">

          {/* ── LEFT COLUMN (Text) ── */}
          {/* pt-28 ensures it easily clears the navbar on mobile */}
          <div
            className="flex flex-col justify-center h-auto pt-28 pb-4 lg:pt-[100px] lg:pb-[48px] order-1 lg:self-center"
          >
            {/* Eyebrow badge (Mobile Only) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <span
                className="inline-flex sm:hidden items-center rounded-full font-body font-semibold"
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

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
              className="font-display leading-tight lg:leading-[1.0] h-auto"
              style={{
                fontSize: "clamp(36px, 5vw, 62px)", 
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

          {/* ── RIGHT COLUMN (Image) ── */}
          {/* pb-12 on mobile creates physical space below so the absolute badge doesn't overlap the next section */}
          <div className="relative flex flex-col items-center justify-end w-full order-2 lg:self-end pt-8 lg:pt-0 pb-12 lg:pb-0">
            
            {/* Image Wrapper 
                Fixed height replaced with viewport-relative height (85vh). 
                Now it will never spill out, even on short laptop screens.
            */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] max-w-[380px] sm:max-w-[450px] mx-auto lg:max-w-none lg:w-[110%] lg:h-[85vh] lg:max-h-[850px] lg:aspect-auto lg:-ml-[5%]"
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

              {/* Mobile Badge - Uses -bottom-6 but wrapper has pb-12, so it sits perfectly in the empty space */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] lg:hidden z-20 flex justify-center">
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

            {/* Desktop Badge - Bottom position uses percentage so it dynamically adjusts with the image height */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="hidden lg:block absolute z-20"
              style={{
                bottom: "10%",
                right: "5%",
                background: "white",
                borderRadius: "40px",
                padding: "10px 20px",
                boxShadow: "0 4px 24px rgba(232,48,106,0.14), 0 1px 6px rgba(0,0,0,0.06)",
                border: "1px solid #F0D0DC",
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