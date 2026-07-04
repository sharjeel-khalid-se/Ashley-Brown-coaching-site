"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import SoundFamiliar from "@/components/sections/SoundFamiliar";
import WhyAshley from "@/components/sections/WhyAshley";
import Results from "@/components/sections/Results";
import Programs from "@/components/sections/Programs";
import FreeGuide from "@/components/sections/FreeGuide";
import About from "@/components/sections/About";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar onApplyClick={openModal} />

      {/* Page Content */}
      <main>
        <Hero onApplyClick={openModal} />
        <SoundFamiliar onApplyClick={openModal} />
        <WhyAshley />
        <Results />
        <Programs onApplyClick={openModal} />
        <FreeGuide />
        <About onApplyClick={openModal} />
        <FinalCTA onApplyClick={openModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Application Modal */}
      <ApplicationModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
