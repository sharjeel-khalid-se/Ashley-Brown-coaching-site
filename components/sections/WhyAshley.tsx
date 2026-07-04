"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Heart, FlaskConical } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: Stethoscope,
    title: "The Nurse Advantage",
    body: "Most coaches guess. As an RN, Ashley understands your hormones, your labs, and your body at a clinical level — and builds your plan around that data.",
  },
  {
    id: 2,
    icon: Heart,
    title: "Real Life. Real Results.",
    body: "Ashley is a mom of 3 (2 C-sections + vaginal birth) who reversed her own diastasis recti. She's lived this — not just studied it.",
  },
  {
    id: 3,
    icon: FlaskConical,
    title: "No Magic. Just Method.",
    body: "No shots. No 'good genetics'. No 6 hours at the gym. Just science-based training and nutrition that fits your life.",
  },
];

function FeatureCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 h-full"
      style={{
        padding: "36px",
        border: "1px solid #F0D0DC",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        minHeight: "220px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#E8306A";
        el.style.boxShadow = "0 8px 32px rgba(232, 48, 106, 0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "#F0D0DC";
        el.style.boxShadow = "none";
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ background: "#FFE8F0" }}
      >
        <Icon size={36} color="#E8306A" strokeWidth={1.5} />
      </div>

      <h3
        className="font-display"
        style={{
          fontSize: "22px",
          color: "#1A1A1A",
          fontFamily: "var(--font-cormorant)",
          fontWeight: 600,
          lineHeight: 1.2,
        }}
      >
        {card.title}
      </h3>

      <p
        className="font-body"
        style={{
          fontSize: "15px",
          color: "#555555",
          lineHeight: 1.65,
          fontFamily: "var(--font-inter)",
        }}
      >
        {card.body}
      </p>
    </motion.div>
  );
}

export default function WhyAshley() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="why" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
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
            Why Ashley is Different
          </h2>
          <p
            className="font-body mt-4 mx-auto"
            style={{
              fontSize: "16px",
              color: "#666666",
              maxWidth: "480px",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.6,
            }}
          >
            Most coaches give you a plan. Ashley gives you a clinical diagnosis.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FeatureCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
