/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

const sliderViews = [
  {
    tagline: "HACKATHON • SAI DO PAPEL",
    headingTop: "IMPULSIONE A",
    headingAccent1: "INOVAÇÃO",
    headingAnd: "E ACELERE O",
    headingAccent2: "SUCESSO",
    headingBottom: "DA SUA EMPRESA",
    subdescription: "Para transformar sua ideia em realidade, um hackathon da Sai do Papel é a melhor maneira. Encontre soluções transformadoras em um ambiente colaborativo e criativo, impulsionando sua marca e resultados.",
  },
  {
    tagline: "INOVAÇÃO CORPORATIVA • SAI DO PAPEL",
    headingTop: "TRANSFORME SEUS",
    headingAccent1: "DESAFIOS",
    headingAnd: "EM GRANDES",
    headingAccent2: "RESULTADOS",
    headingBottom: "DE IMPACTO REAL",
    subdescription: "Conectamos grandes corporações aos melhores desenvolvedores, designers e inovadores do ecossistema. Menos conversas institucionais, mais protótipos reais focados em gerar retorno estratégico imediato e concreto.",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cycle slider views automatically every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderViews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activeView = sliderViews[currentSlide];

  const handleScrollToNext = () => {
    const element = document.getElementById('beneficios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-canvas-dark pt-36 pb-20 px-6 overflow-hidden flex flex-col justify-between select-none">
      
      {/* 🌌 TOP PLANET CURVE (Concave Vector Planet from the requested design mockup) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 select-none pointer-events-none">
        <svg className="relative block w-full h-[200px] md:h-[300px]" viewBox="0 0 1440 300" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="topPlanetGradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#ff4d00" stopOpacity="0.45" />
              <stop offset="65%" stopColor="#ff1100" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#08080a" stopOpacity="0" />
            </linearGradient>
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Main Glowing Area of the Planet top curve */}
          <path d="M0,0 Q720,240 1440,0 L1440,0 L0,0 Z" fill="url(#topPlanetGradient)" />
          {/* Intense glowing line of the orbit crescent */}
          <path d="M0,0 Q720,240 1440,0" stroke="#ff5100" strokeWidth="2.5" strokeOpacity="0.5" filter="url(#glow-filter)" />
          {/* Thin sharp bright edge */}
          <path d="M0,0 Q720,240 1440,0" stroke="#ff8000" strokeWidth="1" strokeOpacity="0.3" />
        </svg>
      </div>

      {/* 🌌 BOTTOM PLANET CURVE (Rising planetary crescent framing the bottom of Hero) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 select-none pointer-events-none">
        <svg className="relative block w-full h-[180px] md:h-[260px]" viewBox="0 0 1440 260" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="bottomPlanetGradient" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.65" />
              <stop offset="25%" stopColor="#ff4d00" stopOpacity="0.3" />
              <stop offset="65%" stopColor="#ff1100" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#08080a" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Main glowing planet boundary */}
          <path d="M0,260 Q720,50 1440,260 L1440,260 L0,260 Z" fill="url(#bottomPlanetGradient)" />
          {/* Intense glowing line */}
          <path d="M0,260 Q720,50 1440,260" stroke="#ff5100" strokeWidth="2.5" strokeOpacity="0.4" filter="url(#glow-filter)" />
        </svg>
      </div>

      {/* Minimalistic grid-overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none z-0 opacity-70" />

      {/* Main Core Centered Typography & CTA Layout */}
      <div className="relative max-w-5xl mx-auto w-full z-10 flex-grow flex flex-col justify-center items-center text-center px-4 mt-8 md:mt-12">
        
        {/* SMALL PILL BADGE WITH INNER BUTTON (Matches the mockup's exact capsule tag style) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 p-1 pr-4 bg-[#121315]/80 border border-white/5 rounded-full backdrop-blur-md mb-8"
        >
          <span className="px-3 py-1 bg-gradient-to-r from-brand-orange to-[#ff6a00] text-white text-[9px] uppercase font-display font-black tracking-wider rounded-full leading-none shadow-lg shadow-brand-orange/20">
            HACKATHON
          </span>
          <span className="text-white/60 text-[9.5px] tracking-widest font-mono uppercase">
            SAI DO PAPEL INOVAÇÃO
          </span>
        </motion.div>

        {/* LARGE DISPLAY TITLE WITH SMOOTH TRANSLATIONS (Centered, elegant, high impact like image) */}
        <div className="relative font-display font-medium text-white tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.08] max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="uppercase select-text leading-tight">
                {activeView.headingTop}{" "}
                <span className="text-brand-orange font-black italic drop-shadow-[0_4px_16px_rgba(255,60,21,0.35)]">
                  {activeView.headingAccent1}
                </span>
              </h1>

              <h2 className="flex flex-wrap items-center justify-center gap-2 md:gap-3 uppercase mt-1">
                <span>{activeView.headingAnd}</span>
                <span className="text-brand-orange font-black italic text-brand-orange drop-shadow-[0_4px_16px_rgba(255,60,21,0.35)]">
                  {activeView.headingAccent2}
                </span>
                <span>{activeView.headingBottom}</span>
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SUBTITLE */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white/65 font-sans text-xs sm:text-sm md:text-base mt-8 max-w-2xl leading-relaxed select-text"
          >
            {activeView.subdescription}
          </motion.p>
        </AnimatePresence>

        {/* ACTION BUTTONS (Aligned next to each other exactly like Get Started & See Features in the image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md px-4"
        >
          {/* Button 1: Glowing dark-orange border button */}
          <button
            onClick={() => {
              const element = document.getElementById('ajuda');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative px-8 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white font-display font-medium text-xs uppercase tracking-widest rounded-full transition-all duration-300 w-full sm:w-auto shadow-[0_4px_25px_rgba(255,60,21,0.4)] hover:shadow-[0_4px_35px_rgba(255,60,21,0.65)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Realize seu hackathon
          </button>

          {/* Button 2: Crisp solid-white pill */}
          <button
            onClick={handleScrollToNext}
            className="px-8 py-3.5 bg-white text-black hover:bg-white/95 font-display font-medium text-xs uppercase tracking-widest rounded-full transition-all duration-300 w-full sm:w-auto hover:scale-[1.03] active:scale-[0.98]"
          >
            Saber Mais
          </button>
        </motion.div>

      </div>

      {/* Scroll indicator banner with fading bounce */}
      <div className="flex flex-col items-center justify-center mt-6 z-10">
        <div className="flex items-center gap-1 cursor-pointer" onClick={handleScrollToNext}>
          <span className="w-[3px] h-[3px] rounded-full bg-white/20" />
          <span className="w-[3px] h-[8px] rounded-full bg-brand-orange animate-bounce" />
          <span className="w-[3px] h-[3px] rounded-full bg-white/20" />
        </div>
      </div>

    </section>
  );
}
