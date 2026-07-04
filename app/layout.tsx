import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

// 1. Headline Font (Remains the same, highly premium)
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// 2. Body Font (Upgraded from Inter to Plus Jakarta Sans for a $10K feel)
// Note: Variable name is kept as "--font-inter" so your existing Tailwind/inline CSS doesn't break.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-inter", 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashley Brown — Nurse & Body Transformation Coach",
  description:
    "Science-backed body transformation from a Registered Nurse and Certified Trainer. Postpartum recovery, PCOS, hormonal balance.",
  keywords: [
    "nurse coach",
    "body transformation",
    "postpartum recovery",
    "PCOS",
    "hormonal balance",
    "diastasis recti",
    "women's health coach",
  ],
  openGraph: {
    title: "Ashley Brown — Nurse & Body Transformation Coach",
    description:
      "Science-backed body transformation from a Registered Nurse and Certified Trainer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Applied the new jakarta.variable here
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}