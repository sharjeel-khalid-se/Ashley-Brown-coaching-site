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
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = card.icon;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      // Custom easing curve for that expensive, buttery smooth reveal
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      // Replaced JS events with pure Tailwind hover states for better performance
      className="group relative bg-white flex flex-col gap-5 h-full list-none transition-all duration-500 hover:-translate-y-2 border-[1px] border-[#F0D0DC] hover:border-[#E8306A] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(232,48,106,0.12)]"
      style={{
        padding: "40px 36px",
        borderRadius: "20px",
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
        style={{ background: "#FFE8F0" }}
      >
        <Icon size={32} color="#E8306A" strokeWidth={1.5} />
      </div>

      <div>
        <h3
          className="font-display mb-3"
          style={{
            fontSize: "24px",
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
            fontSize: "16px",
            color: "#555555",
            lineHeight: 1.7,
            fontFamily: "var(--font-inter)",
          }}
        >
          {card.body}
        </p>
      </div>
    </motion.li>
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
          transition={{ duration: 0.7, ease: "easeOut" }}
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
            Why Ashley is Different
          </h2>
          <p
            className="font-body mt-5 mx-auto"
            style={{
              fontSize: "17px",
              color: "#666666",
              maxWidth: "480px",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.6,
            }}
          >
            Most coaches give you a plan. Ashley gives you a clinical diagnosis.
          </p>
        </motion.div>

        {/* Cards grid - Semantic UL with increased desktop gap */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 m-0 p-0">
          {cards.map((card, i) => (
            <FeatureCard key={card.id} card={card} index={i} />
          ))}
        </ul>
        
      </div>
    </section>
  );
}