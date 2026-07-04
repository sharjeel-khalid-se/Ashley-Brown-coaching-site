import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-10" style={{ borderTop: "1px solid #F0D0DC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <p
            className="font-body text-center md:text-left"
            style={{
              fontSize: "13px",
              color: "#666666",
              fontFamily: "var(--font-inter)",
            }}
          >
            © 2025 Ashley Brown Coaching. All rights reserved.
          </p>

          {/* Center */}
          <a
            href="mailto:ashley@transformation.pro.ash"
            className="font-body transition-colors duration-200 hover:text-accent"
            style={{
              fontSize: "13px",
              color: "#666666",
              fontFamily: "var(--font-inter)",
            }}
          >
            ashley@transformation.pro.ash
          </a>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/transformation.pro.ash"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              aria-label="Ashley Brown on Instagram"
              id="footer-instagram-link"
            >
              <Instagram size={20} color="#E8306A" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="font-body transition-colors duration-200 hover:text-accent"
              style={{
                fontSize: "12px",
                color: "#999999",
                fontFamily: "var(--font-inter)",
                textDecoration: "none",
              }}
              id="footer-privacy-link"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
