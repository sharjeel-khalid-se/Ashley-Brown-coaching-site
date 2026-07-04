"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onApplyClick: () => void;
}

export default function Navbar({ onApplyClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Results", href: "#results" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col justify-center">
            <span
              className="font-display italic leading-tight"
              style={{
                fontSize: "20px",
                color: "#1A1A1A",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Ashley Brown
            </span>
            <span
              className="font-body leading-tight"
              style={{
                fontSize: "10px",
                color: "#666666",
                letterSpacing: "0.15em",
                fontFamily: "var(--font-inter)",
              }}
            >
              RN · CPT · Nutritionist
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium transition-colors duration-200 hover:text-accent"
                style={{
                  color: "#1A1A1A",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              id="navbar-apply-btn"
              onClick={onApplyClick}
              className="font-body text-sm font-semibold text-white rounded-full px-6 py-2.5 transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100"
              style={{
                background: "#E8306A",
                fontFamily: "var(--font-inter)",
              }}
            >
              Apply Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} color="#1A1A1A" />
            ) : (
              <Menu size={22} color="#1A1A1A" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-base font-medium py-2 border-b border-gray-50"
                  style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                id="navbar-mobile-apply-btn"
                onClick={() => {
                  setMobileOpen(false);
                  onApplyClick();
                }}
                className="font-body text-sm font-semibold text-white rounded-full px-6 py-3 mt-2 transition-all duration-200 hover:opacity-90"
                style={{
                  background: "#E8306A",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
