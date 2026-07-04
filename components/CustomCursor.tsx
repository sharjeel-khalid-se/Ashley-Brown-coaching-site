"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only show custom cursor on non-touch devices and larger screens
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) {
      return;
    }
    
    setIsMobile(false);
    document.body.classList.add("has-custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animateRing = () => {
      const lerpFactor = 0.08;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const handleMouseEnterLink = () => {
      dotRef.current?.classList.add("scale-150");
      ringRef.current?.classList.add("scale-150", "opacity-50");
    };
    const handleMouseLeaveLink = () => {
      dotRef.current?.classList.remove("scale-150");
      ringRef.current?.classList.remove("scale-150", "opacity-50");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterLink);
      el.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999] transition-transform duration-75"
        style={{ backgroundColor: "#E8306A", willChange: "transform" }}
        aria-hidden="true"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="hidden lg:block fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] transition-[transform,opacity] duration-300"
        style={{
          border: "1.5px solid #E8306A",
          willChange: "transform",
          opacity: 0.6,
        }}
        aria-hidden="true"
      />
    </>
  );
}
