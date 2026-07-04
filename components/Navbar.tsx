"use client";

import { useState, useEffect } from "react";
import { X, Menu, Download } from "lucide-react";
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
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col justify-center transition-opacity hover:opacity-80">
            <span
              className="font-display italic leading-tight"
              style={{
                fontSize: "22px",
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
                textTransform: "uppercase",
                fontFamily: "var(--font-inter)",
              }}
            >
              RN · CPT · Nutritionist
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium transition-colors duration-200 hover:text-[#E8306A]"
                style={{
                  color: "#1A1A1A",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {link.label}
              </a>
            ))}
            
            {/* Free Guide Link (New) */}
            <a
              href="#free-guide"
              className="font-body text-sm font-medium flex items-center gap-2 hover:text-[#E8306A] transition-colors"
              style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}
            >
              <Download size={14} />
              Free Guide
            </a>

            <button
              id="navbar-apply-btn"
              onClick={onApplyClick}
              className="font-body text-sm font-semibold text-white rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-100"
              style={{
                background: "#E8306A",
                fontFamily: "var(--font-inter)",
                boxShadow: "0 4px 12px rgba(232, 48, 106, 0.2)",
              }}
            >
              Apply Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} color="#1A1A1A" />
            ) : (
              <Menu size={24} color="#1A1A1A" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 right-0 z-40 bg-white shadow-2xl border-t border-gray-100 md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-lg font-medium py-1"
                  style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Free Guide */}
              <a
                href="#free-guide"
                className="font-body text-lg font-medium py-1 flex items-center gap-2"
                style={{ color: "#E8306A", fontFamily: "var(--font-inter)" }}
                onClick={() => setMobileOpen(false)}
              >
                <Download size={18} />
                Get Free Guide
              </a>

              <button
                id="navbar-mobile-apply-btn"
                onClick={() => {
                  setMobileOpen(false);
                  onApplyClick();
                }}
                className="font-body text-base font-semibold text-white rounded-full px-6 py-4 transition-all duration-200 hover:bg-[#D4255A]"
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