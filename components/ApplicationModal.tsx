"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  birthTimeframe: string;
  biggestChallenge: string;
  hearAbout: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  birthTimeframe: "",
  biggestChallenge: "",
  hearAbout: "",
  message: "",
};

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        "https://formspree.io/f/placeholder",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        // For demo purposes, show success even on error
        setSubmitted(true);
      }
    } catch {
      // For demo purposes, show success
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
    setError(null);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #F0D0DC",
    fontFamily: "var(--font-inter)",
    fontSize: "15px",
    color: "#1A1A1A",
    background: "#ffffff",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "#1A1A1A",
    marginBottom: "6px",
    fontFamily: "var(--font-inter)",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100]"
            style={{ background: "rgba(26,26,26,0.65)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white"
              style={{
                padding: "40px 40px 40px",
                boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
                scrollbarWidth: "thin",
              }}
              data-lenis-prevent
            >
              {/* Close button */}
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-full transition-all duration-200 hover:bg-gray-100"
                aria-label="Close application form"
              >
                <X size={20} color="#666666" />
              </button>

              {submitted ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#FFE8F0" }}
                  >
                    <CheckCircle size={32} color="#E8306A" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "28px",
                      color: "#1A1A1A",
                      fontFamily: "var(--font-cormorant)",
                      marginBottom: "12px",
                    }}
                  >
                    Application Received!
                  </h3>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "15px",
                      color: "#555555",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-inter)",
                      maxWidth: "320px",
                    }}
                  >
                    Ashley will reach out within 24 hours to discuss your goals
                    and how she can help.
                  </p>
                  <button
                    onClick={() => {
                      handleReset();
                      onClose();
                    }}
                    className="font-body font-semibold mt-8 text-white rounded-full transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "#E8306A",
                      padding: "12px 32px",
                      fontSize: "14px",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Title */}
                  <h2
                    id="modal-title"
                    className="font-display"
                    style={{
                      fontSize: "36px",
                      color: "#1A1A1A",
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 500,
                      marginBottom: "8px",
                      paddingRight: "40px",
                    }}
                  >
                    Tell Me About You
                  </h2>
                  <p
                    className="font-body mb-8"
                    style={{
                      fontSize: "14px",
                      color: "#666666",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Fill out the form below and Ashley will be in touch within 24 hours.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" style={labelStyle}>
                        Full Name <span style={{ color: "#E8306A" }}>*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#E8306A")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "#F0D0DC")
                        }
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" style={labelStyle}>
                        Email Address <span style={{ color: "#E8306A" }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#E8306A")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "#F0D0DC")
                        }
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#E8306A")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "#F0D0DC")
                        }
                      />
                    </div>

                    {/* Birth timeframe */}
                    <div>
                      <label htmlFor="birthTimeframe" style={labelStyle}>
                        How long ago did you give birth?
                      </label>
                      <select
                        id="birthTimeframe"
                        name="birthTimeframe"
                        value={formData.birthTimeframe}
                        onChange={handleChange}
                        style={{ ...inputStyle, appearance: "none" }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#E8306A")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "#F0D0DC")
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="less_than_6_months">
                          Less than 6 months
                        </option>
                        <option value="6_12_months">6–12 months</option>
                        <option value="1_2_years">1–2 years</option>
                        <option value="2_plus_years">2+ years</option>
                        <option value="no_children">No children</option>
                      </select>
                    </div>

                    {/* Biggest challenge */}
                    <div>
                      <label htmlFor="biggestChallenge" style={labelStyle}>
                        What&rsquo;s your biggest challenge?
                      </label>
                      <select
                        id="biggestChallenge"
                        name="biggestChallenge"
                        value={formData.biggestChallenge}
                        onChange={handleChange}
                        style={{ ...inputStyle, appearance: "none" }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#E8306A")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "#F0D0DC")
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="postpartum_recovery">
                          Postpartum recovery
                        </option>
                        <option value="diastasis_recti">Diastasis recti</option>
                        <option value="pcos_hormonal">
                          PCOS/hormonal issues
                        </option>
                        <option value="belly_fat">Stubborn belly fat</option>
                        <option value="general_transformation">
                          General transformation
                        </option>
                      </select>
                    </div>

                    {/* How did you hear */}
                    <div>
                      <label htmlFor="hearAbout" style={labelStyle}>
                        How did you hear about Ashley?
                      </label>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        style={{ ...inputStyle, appearance: "none" }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#E8306A")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "#F0D0DC")
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="instagram">Instagram</option>
                        <option value="tiktok">TikTok</option>
                        <option value="friend_referral">Friend referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" style={labelStyle}>
                        Tell Ashley about your goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="What do you want to achieve? Any specific concerns or questions?"
                        style={{
                          ...inputStyle,
                          resize: "vertical",
                          minHeight: "100px",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#E8306A")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "#F0D0DC")
                        }
                      />
                    </div>

                    {error && (
                      <p
                        className="font-body text-sm"
                        style={{
                          color: "#E8306A",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      id="modal-submit-btn"
                      type="submit"
                      disabled={submitting}
                      className="font-body font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-70"
                      style={{
                        background: "#E8306A",
                        padding: "16px",
                        fontSize: "15px",
                        fontFamily: "var(--font-inter)",
                        width: "100%",
                        marginTop: "4px",
                        boxShadow: "0 4px 20px rgba(232, 48, 106, 0.25)",
                      }}
                    >
                      {submitting ? "Submitting..." : "Submit My Application →"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
