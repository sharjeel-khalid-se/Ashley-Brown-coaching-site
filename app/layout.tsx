import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
