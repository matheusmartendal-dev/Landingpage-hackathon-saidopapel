/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveBanner from './components/InteractiveBanner';
import AboutSection from './components/AboutSection';
import Investors from './components/Investors';
import Differentials from './components/Differentials';
import ProjectVideos from './components/ProjectVideos';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-canvas-dark text-white selection:bg-brand-orange selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Main Hero Section (Atmospheric glow center, metrics) */}
      <main>
        <Hero />

        {/* 3. Sub-Hero Interactive Banner Row */}
        <InteractiveBanner />

        {/* 4. Section 01: About Sentry Cards (Interactive playground website checking) */}
        <AboutSection />

        {/* 5. Section 02: Investor Brands Slider Row (Vector logos mapping) */}
        <Investors />

        {/* 6. Section 03: Nosso Diferencial Timeline Segment */}
        <Differentials />

        {/* 7. Section 04: Project Case Study Videos Segment */}
        <ProjectVideos />
      </main>

      {/* 8. Legal & Metrics Footer */}
      <Footer />
    </div>
  );
}
