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
  const imageInView = useInView(imageRef, { once: true, margin: "-50px" });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });

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
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative group"
          >
            {/* Rose pink corner accent */}
            <div
              className="absolute top-0 left-0 w-12 h-12 z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
              style={{
                borderTop: "3px solid #E8306A",
                borderLeft: "3px solid #E8306A",
                borderRadius: "2px 0 0 0",
              }}
            />

            {/* Image container */}
            <div
              className="relative w-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-500 group-hover:shadow-[0_20px_40px_rgba(232,48,106,0.12)]"
              style={{ borderRadius: "16px", aspectRatio: "3/4" }}
            >
              {/* Premium clip-path reveal */}
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={imageInView ? { clipPath: "inset(0% 0 0 0)" } : {}}
                transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/hero_gym.png"
                  alt="Ashley Brown in the gym — Certified Personal Trainer and Nurse"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </motion.div>
            </div>

            {/* Floating credential card with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={
                imageInView ? { opacity: 1, y: 0, scale: 1 } : {}
              }
              transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white/95 backdrop-blur-md rounded-xl px-6 py-5 transition-transform duration-500 group-hover:-translate-y-2"
              style={{
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.5)",
                zIndex: 10,
              }}
            >
              <p
                className="font-body font-bold"
                style={{
                  fontSize: "15px",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Ashley Brown RN, CPT
              </p>
              <p
                className="font-body font-medium"
                style={{
                  fontSize: "13px",
                  color: "#E8306A",
                  fontFamily: "var(--font-inter)",
                  marginTop: "4px",
                  letterSpacing: "0.02em",
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
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
            className="flex flex-col gap-6 lg:pl-4 mt-8 lg:mt-0"
          >
            {/* Eyebrow */}
            <span
              className="font-body font-bold uppercase"
              style={{
                color: "#E8306A",
                fontSize: "12px",
                letterSpacing: "0.2em",
                fontFamily: "var(--font-inter)",
              }}
            >
              About Ashley
            </span>

            {/* Headline - Responsive BR tags so it doesn't break on mobile */}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(34px, 4.5vw, 44px)",
                color: "#1A1A1A",
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                lineHeight: 1.15,
                maxWidth: "500px",
              }}
            >
              I&rsquo;m the nurse who trains you.
              <br className="hidden lg:block" /> Not the trainer who
              <br className="hidden lg:block" /> Googles symptoms.
            </h2>

            {/* Body */}
            <div
              className="font-body flex flex-col gap-5"
              style={{
                fontSize: "16px",
                color: "#555555",
                lineHeight: 1.8,
                fontFamily: "var(--font-inter)",
                maxWidth: "540px",
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

            {/* Credentials row - Semantic UL */}
            <ul className="flex flex-wrap gap-3 mt-4 m-0 p-0">
              {credentials.map((cred) => (
                <li
                  key={cred}
                  className="font-display font-medium rounded-full list-none transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: "#E8306A",
                    color: "#ffffff",
                    padding: "8px 24px",
                    fontSize: "17px",
                    fontFamily: "var(--font-cormorant)",
                    letterSpacing: "0.02em",
                    boxShadow: "0 4px 12px rgba(232, 48, 106, 0.2)",
                  }}
                >
                  {cred}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              id="about-story-btn"
              onClick={onApplyClick}
              aria-label="Read Ashley's full story"
              className="font-body font-semibold transition-all duration-300 group self-start mt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8306A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FFF0F6] rounded-sm"
              style={{
                color: "#E8306A",
                fontSize: "16px",
                fontFamily: "var(--font-inter)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span className="border-b-2 border-[#E8306A] pb-1 group-hover:border-transparent transition-all duration-300">
                Read My Full Story →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}