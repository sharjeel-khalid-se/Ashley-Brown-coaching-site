"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Hard fallback — always dismiss after 2s no matter what
    const hardTimeout = setTimeout(() => setLoading(false), 2000);

    let rafId: number;
    let start: number | null = null;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);

      if (elapsed < duration) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setLoading(false), 200);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(hardTimeout);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white"
        >
          {/* AB Monogram */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-12"
          >
            <span
              className="font-display text-6xl font-light tracking-widest"
              style={{ color: "#1A1A1A", fontFamily: "var(--font-cormorant)" }}
            >
              AB
            </span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-gray-100 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                background: "#E8306A",
                width: `${progress}%`,
                transition: "width 0.05s linear",
              }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-6 text-xs tracking-[0.3em] uppercase font-body"
            style={{ color: "#666666", fontFamily: "var(--font-inter)" }}
          >
            Ashley Brown Coaching
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
