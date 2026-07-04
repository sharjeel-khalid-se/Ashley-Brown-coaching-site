"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "My doctor said there's no signs of PCOS for me anymore. I literally cried.",
    attribution: "Ashley's Client, 2024",
  },
  {
    id: 2,
    quote:
      "I am fitting into my pre-pregnancy jeans and when they actually buttoned I damn near cried.",
    attribution: "Postpartum Client",
  },
  {
    id: 3,
    quote:
      "Feeling like my booty is poppin. I have never been so in love with my body.",
    attribution: "30-Day Challenge Graduate",
  },
];

const beforeAfterItems = [
  {
    id: 1,
    beforeSrc: "/images/before_1.jpg",
    afterSrc: "/images/after_1.jpg",
    caption: "Postpartum core restoration — 12 weeks",
  },
  {
    id: 2,
    beforeSrc: "/images/before_2.jpg",
    afterSrc: "/images/after_2.jpg",
    caption: "PCOS hormonal reset — 16 weeks",
  },
  {
    id: 3,
    beforeSrc: "/images/before_3.jpg",
    afterSrc: "/images/after_3.jpg",
    caption: "30-Day Ab + Glute Challenge results",
  },
];

function TestimonialCard({
  item,
  index,
}: {
  item: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="rounded-xl flex flex-col gap-4"
      style={{
        background: "#2A2A2A",
        borderLeft: "3px solid #E8306A",
        padding: "32px 28px",
        borderRadius: "12px",
      }}
    >
      {/* Quote mark */}
      <span
        className="font-display"
        style={{
          fontSize: "48px",
          color: "#E8306A",
          lineHeight: 1,
          fontFamily: "var(--font-cormorant)",
          opacity: 0.6,
        }}
      >
        &ldquo;
      </span>
      <p
        className="font-body italic"
        style={{
          fontSize: "16px",
          color: "#ffffff",
          lineHeight: 1.7,
          fontFamily: "var(--font-inter)",
        }}
      >
        {item.quote}
      </p>
      <p
        className="font-body font-medium"
        style={{
          fontSize: "12px",
          color: "#E8306A",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "var(--font-inter)",
        }}
      >
        — {item.attribution}
      </p>
    </motion.div>
  );
}

function BeforeAfterCard({
  item,
  index,
}: {
  item: (typeof beforeAfterItems)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="flex flex-col gap-3"
    >
      {/* Before / After images side by side */}
      <div className="grid grid-cols-2 gap-2">
        {/* Before */}
        <div className="flex flex-col gap-1">
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: "8px", aspectRatio: "3/4" }}
          >
            <Image
              src={item.beforeSrc}
              alt={`Before — ${item.caption}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
            {/* Before overlay label */}
            <div
              className="absolute top-2 left-2 font-body font-semibold"
              style={{
                background: "rgba(26,26,26,0.75)",
                color: "#ffffff",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: "4px",
                fontFamily: "var(--font-inter)",
              }}
            >
              Before
            </div>
          </div>
        </div>

        {/* After */}
        <div className="flex flex-col gap-1">
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "8px",
              aspectRatio: "3/4",
              border: "2px solid #E8306A",
            }}
          >
            <Image
              src={item.afterSrc}
              alt={`After — ${item.caption}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
            {/* After overlay label */}
            <div
              className="absolute top-2 left-2 font-body font-semibold"
              style={{
                background: "#E8306A",
                color: "#ffffff",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: "4px",
                fontFamily: "var(--font-inter)",
              }}
            >
              After
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p
        className="font-body text-center"
        style={{
          fontSize: "13px",
          color: "#999999",
          fontFamily: "var(--font-inter)",
          lineHeight: 1.4,
        }}
      >
        {item.caption}
      </p>
    </motion.div>
  );
}

export default function Results() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const featuredRef = useRef<HTMLDivElement>(null);
  const featuredInView = useInView(featuredRef, { once: true });
  const baRef = useRef<HTMLDivElement>(null);
  const baInView = useInView(baRef, { once: true, margin: "-60px" });

  return (
    <section
      id="results"
      className="py-24 lg:py-32"
      style={{ background: "#1A1A1A" }}
    >
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
              color: "#ffffff",
              fontFamily: "var(--font-cormorant)",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            Real Women. Real Results.
          </h2>
          <p
            className="font-body mt-4"
            style={{
              fontSize: "16px",
              color: "#999999",
              fontFamily: "var(--font-inter)",
            }}
          >
            No stock photos. No filters. Just results.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Before / After Grid ── */}
        <motion.div
          ref={baRef}
          initial={{ opacity: 0, y: 20 }}
          animate={baInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* Section label */}
          <p
            className="font-body font-semibold text-center mb-8 uppercase"
            style={{
              fontSize: "12px",
              color: "#E8306A",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Client Transformations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfterItems.map((item, i) => (
              <BeforeAfterCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Featured full-width testimonial */}
        <motion.div
          ref={featuredRef}
          initial={{ opacity: 0, y: 40 }}
          animate={featuredInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl text-center"
          style={{
            background: "#E8306A",
            padding: "clamp(40px, 6vw, 72px) clamp(24px, 6vw, 80px)",
            borderRadius: "16px",
          }}
        >
          <blockquote
            className="font-display italic"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#ffffff",
              fontFamily: "var(--font-cormorant)",
              fontWeight: 400,
              lineHeight: 1.2,
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            &ldquo;Crying this morning because a year ago I DREAMED of the body
            and mindset I have now.&rdquo;
          </blockquote>
          <p
            className="font-body mt-6 font-medium"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
            }}
          >
            — Ashley&rsquo;s Client
          </p>
        </motion.div>
      </div>
    </section>
  );
}
