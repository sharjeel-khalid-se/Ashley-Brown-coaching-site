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
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="list-none h-full"
    >
      <figure
        className="flex flex-col gap-4 h-full"
        style={{
          background: "#2A2A2A",
          borderLeft: "4px solid #E8306A",
          padding: "36px 32px", // Slightly increased padding for breathing room
          borderRadius: "16px", // Softer radius
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
            marginBottom: "-16px", // Tighter visual connection with text
          }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote className="flex-1">
          <p
            className="font-body italic"
            style={{
              fontSize: "17px",
              color: "#ffffff",
              lineHeight: 1.7,
              fontFamily: "var(--font-inter)",
            }}
          >
            {item.quote}
          </p>
        </blockquote>
        <figcaption
          className="font-body font-medium mt-2"
          style={{
            fontSize: "12px",
            color: "#E8306A",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
          }}
        >
          — {item.attribution}
        </figcaption>
      </figure>
    </motion.li>
  );
}

function BeforeAfterCard({
  item,
  index,
}: {
  item: (typeof beforeAfterItems)[0];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col gap-4 list-none"
    >
      {/* Before / After images side by side */}
      <div className="grid grid-cols-2 gap-3">
        {/* Before */}
        <div className="flex flex-col gap-1">
          <div
            className="relative overflow-hidden group"
            style={{ borderRadius: "12px", aspectRatio: "3/4" }}
          >
            <Image
              src={item.beforeSrc}
              alt={`Before — ${item.caption}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
            {/* Before overlay label (Added Backdrop Blur) */}
            <div
              className="absolute top-3 left-3 font-body font-semibold backdrop-blur-md"
              style={{
                background: "rgba(26,26,26,0.5)",
                color: "#ffffff",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: "6px",
                fontFamily: "var(--font-inter)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Before
            </div>
          </div>
        </div>

        {/* After */}
        <div className="flex flex-col gap-1">
          <div
            className="relative overflow-hidden group"
            style={{
              borderRadius: "12px",
              aspectRatio: "3/4",
              border: "2px solid #E8306A",
            }}
          >
            <Image
              src={item.afterSrc}
              alt={`After — ${item.caption}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
            {/* After overlay label (Added Backdrop Blur) */}
            <div
              className="absolute top-3 left-3 font-body font-semibold backdrop-blur-md"
              style={{
                background: "rgba(232,48,106,0.85)",
                color: "#ffffff",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: "6px",
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
          fontSize: "14px",
          color: "#A3A3A3",
          fontFamily: "var(--font-inter)",
          lineHeight: 1.5,
        }}
      >
        {item.caption}
      </p>
    </motion.li>
  );
}

export default function Results() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const featuredRef = useRef<HTMLDivElement>(null);
  const featuredInView = useInView(featuredRef, { once: true });
  const baRef = useRef<HTMLDivElement>(null);
  const baInView = useInView(baRef, { once: true, margin: "-50px" });

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
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16 lg:mb-20"
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
            className="font-body mt-5"
            style={{
              fontSize: "17px",
              color: "#A3A3A3",
              fontFamily: "var(--font-inter)",
            }}
          >
            No stock photos. No filters. Just results.
          </p>
        </motion.div>

        {/* Testimonial cards (Changed to semantic UL) */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24 m-0 p-0">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </ul>

        {/* ── Before / After Grid ── */}
        <motion.div
          ref={baRef}
          initial={{ opacity: 0, y: 30 }}
          animate={baInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 lg:mb-24"
        >
          {/* Section label */}
          <p
            className="font-body font-semibold text-center mb-10 uppercase"
            style={{
              fontSize: "12px",
              color: "#E8306A",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-inter)",
            }}
          >
            Client Transformations
          </p>

          {/* Changed to semantic UL */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 m-0 p-0">
            {beforeAfterItems.map((item, i) => (
              <BeforeAfterCard key={item.id} item={item} index={i} />
            ))}
          </ul>
        </motion.div>

        {/* Featured full-width testimonial */}
        <motion.div
          ref={featuredRef}
          initial={{ opacity: 0, y: 40 }}
          animate={featuredInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-3xl text-center shadow-2xl relative overflow-hidden"
          style={{
            background: "#E8306A",
            padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)",
          }}
        >
          <figure>
            <blockquote
              className="font-display italic relative z-10"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#ffffff",
                fontFamily: "var(--font-cormorant)",
                fontWeight: 400,
                lineHeight: 1.25,
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              &ldquo;Crying this morning because a year ago I DREAMED of the body
              and mindset I have now.&rdquo;
            </blockquote>
            <figcaption
              className="font-body mt-8 font-semibold relative z-10"
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "var(--font-inter)",
              }}
            >
              — Ashley&rsquo;s Client
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}