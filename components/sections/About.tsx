"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface AboutProps {
  onApplyClick: () => void;
}

export default function About({ onApplyClick }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-80px" });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });

  const credentials = ["RN", "CPT", "Nutritionist"];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "#FFF0F6" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          {/* LEFT — Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -30 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Rose pink corner accent */}
            <div
              className="absolute top-0 left-0 w-12 h-12 z-10"
              style={{
                borderTop: "3px solid #E8306A",
                borderLeft: "3px solid #E8306A",
                borderRadius: "2px 0 0 0",
              }}
            />

            {/* Image container */}
            <div
              className="relative w-full overflow-hidden"
              style={{ borderRadius: "16px", aspectRatio: "3/4" }}
            >
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={imageInView ? { clipPath: "inset(0% 0 0 0)" } : {}}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
                className="w-full h-full"
              >
                <Image
                  src="/images/hero_gym.png"
                  alt="Ashley Brown in the gym — Certified Personal Trainer and Nurse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </motion.div>
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={
                imageInView ? { opacity: 1, y: 0, scale: 1 } : {}
              }
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl px-5 py-4"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                borderRadius: "12px",
                zIndex: 10,
              }}
            >
              <p
                className="font-body font-bold"
                style={{
                  fontSize: "14px",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Ashley Brown RN, CPT
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "12px",
                  color: "#666666",
                  fontFamily: "var(--font-inter)",
                  marginTop: "2px",
                }}
              >
                Nurse · Nutritionist · Trainer
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <span
              className="font-body font-semibold uppercase"
              style={{
                color: "#E8306A",
                fontSize: "12px",
                letterSpacing: "0.2em",
                fontFamily: "var(--font-inter)",
              }}
            >
              About Ashley
            </span>

            {/* Headline */}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(34px, 4.5vw, 44px)",
                color: "#1A1A1A",
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              I&rsquo;m the nurse who trains you.
              <br />
              Not the trainer who
              <br />
              Googles symptoms.
            </h2>

            {/* Body */}
            <div
              className="font-body flex flex-col gap-4"
              style={{
                fontSize: "16px",
                color: "#555555",
                lineHeight: 1.8,
                fontFamily: "var(--font-inter)",
              }}
            >
              <p>
                I&rsquo;m Ashley Brown — Registered Nurse, Glute Expert, and
                Certified Personal Trainer.
              </p>
              <p>
                As a mom of 3 who&rsquo;s been through 2 C-sections, diastasis
                recti, and hormonal chaos myself, I built my coaching method
                around what actually works — not what looks good on Instagram.
              </p>
              <p>
                My approach combines clinical nutrition science with real
                training so you get results that last — and a body you actually
                feel proud of.
              </p>
            </div>

            {/* Credentials row */}
            <div className="flex flex-wrap gap-3 mt-2">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="font-display font-medium rounded-full"
                  style={{
                    background: "#E8306A",
                    color: "#ffffff",
                    padding: "8px 20px",
                    fontSize: "16px",
                    fontFamily: "var(--font-cormorant)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              id="about-story-btn"
              onClick={onApplyClick}
              className="font-body font-medium transition-all duration-200 group self-start mt-2"
              style={{
                color: "#E8306A",
                fontSize: "15px",
                fontFamily: "var(--font-inter)",
                background: "transparent",
                border: "none",
              }}
            >
              <span className="border-b border-[#E8306A] pb-0.5 group-hover:border-transparent transition-all duration-200">
                Read My Full Story →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
