/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialItem } from '../types';

const clientsData = [
  {
    id: 'globo',
    name: 'Globo',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/LogoGlobo2020hz.svg'
  },
  {
    id: 'ifood',
    name: 'iFood',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/IFood_logo.svg/1280px-IFood_logo.svg.png'
  },
  {
    id: 'meta',
    name: 'Meta',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/960px-Meta_Platforms_Inc._logo.svg.png'
  },
  {
    id: 'vale',
    name: 'Vale',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cc/Logotipo_Vale.svg/1280px-Logotipo_Vale.svg.png'
  },
  {
    id: 'bndes',
    name: 'BNDES',
    logoUrl: 'https://vectorseek.com/wp-content/uploads/2023/09/Bndes-Logo-Vector.svg-.png'
  },
  {
    id: 'xp',
    name: 'XP',
    logoUrl: 'https://www.logoscapital.com.br/wp-content/uploads/2020/12/xp-investimentos-logo.png'
  },
  {
    id: 'pagseguro',
    name: 'PagSeguro',
    logoUrl: 'https://logodownload.org/wp-content/uploads/2016/09/pagseguro-logo-1-1.png'
  },
  {
    id: 'santander',
    name: 'Santander',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/1280px-Banco_Santander_Logotipo.svg.png'
  },
  {
    id: 'ibm',
    name: 'IBM',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/3840px-IBM_logo.svg.png'
  },
  {
    id: 'btg',
    name: 'BTG Pactual',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Btg-logo-blue.svg/3840px-Btg-logo-blue.svg.png'
  },
  {
    id: 'bv',
    name: 'Banco BV',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Banco_BV_Logo.svg/3840px-Banco_BV_Logo.svg.png'
  },
  {
    id: 'smiles',
    name: 'Smiles',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Gol_Smiles_logo.svg/1280px-Gol_Smiles_logo.svg.png'
  }
];

const testimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: "Quando penso em Hackathon, primeiramente penso em organização. Tive a minha equipe por trás da Sai do Papel, empresa especialista e com conhecimento para organizar tudo.",
    author: "Eduardo Amaral",
    role: "MVP Microsoft Applications - Microsoft Communities Speaker",
    avatarUrl: "https://i.imgur.com/k9KVudT.jpg"
  },
  {
    id: 'test-2',
    quote: "A gente já tem uma parceria muito grande. A Sai do Papel está sempre conosco, nós fizemos no início do ano um hackathon na casa da BBB que foi maravilhoso, conseguimos trazer times multidisciplinares para trabalharmos juntos, com isso geramos engajamentos que trouxe novas ideias que fez com que colocássemos isso em prática na empresa, eu só tenho a agradecer a Sai do Papel que a experiência foi bem bacana.",
    author: "Sabrina Lopes",
    role: "Líder Inovação e Propriedade da Globo",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHeJuD9wCSLxg/profile-displayphoto-crop_800_800/B4DZizgVZQHwAI-/0/1755358255446?e=1782950400&v=beta&t=eHG5hnSNiB-N8c2y2O8Sgcu30RowdIJolPg48J0qFq0"
  },
  {
    id: 'test-3',
    quote: "Agradeço a Sai do Papel por esse apoio fundamental ficou um case super de sucesso para o BNDES. A gente plantou ali uma semente muito forte para o banco. Tenho certeza que vai dar frutos. Foi uma bela contribuuição, uma bela parceria. Obrigado por todo empenho nesse projeto.",
    author: "Bruno Rodrigues",
    role: "Advisor to the CEO at BNDES",
    avatarUrl: "https://saidopapel.com.br/wp-content/uploads/2023/02/Bruno-da-Costa-Lucas-Rodrigues-scaled-e1675704027639.jpg"
  }
];

export default function Investors() {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projetos" className="relative bg-canvas-dark pt-12 pb-24 px-6 overflow-hidden">
      {/* Decorative radial background highlight */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Tag 02 "/ Quem inova com a gente" to maintain design signature */}
        <div className="flex justify-start mb-8">
          <div className="inline-flex items-center gap-3 bg-[#e5ebed] text-black rounded-full pl-1.5 pr-5 py-1.5 shadow-md">
            <span className="w-6 h-6 rounded-full bg-black text-[#e5ebed] font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="font-display font-medium text-xs uppercase tracking-wider flex items-center">
              Inovação Sai do Papel
            </span>
          </div>
        </div>

        {/* Title Heading */}
        <div className="text-left mb-12">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-tight tracking-tight uppercase">
            QUEM INOVA COM A GENTE
          </h2>
          <p className="font-sans text-[13px] text-white/50 mt-3 max-w-lg">
            Conheça as empresas, globos de desenvolvimento e ecossistemas corporativos que lideram projetos de hackathon disruptivos ao nosso lado.
          </p>
        </div>

        {/* Client Corporate Logo Wall (Responsive Monochromatic Grid matching Ranvel premium mockup) */}
        <div className="mt-12 pb-16 border-b border-white/5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center bg-[#0a0a0b]/40 border border-white/5 rounded-3xl p-8 md:p-12">
            {clientsData.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-center justify-center h-16 w-full group relative"
              >
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  referrerPolicy="no-referrer"
                  className="h-10 max-h-10 w-full object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
                />
                
                {/* Micro tooltip name indicator */}
                <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#121315] border border-white/10 rounded-full font-mono text-[8px] text-white/60 opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 duration-200 z-10 uppercase tracking-widest whitespace-nowrap">
                  {client.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 💬 DEPOIMENTOS (Testimonials) Section Block */}
        <div className="mt-20">
          <div className="max-w-xl text-left mb-12">
            <span className="font-mono text-[10px] uppercase text-brand-orange tracking-widest font-bold block mb-1">
              PROVA SOCIAL REAL
            </span>
            <h3 className="font-display font-medium text-white text-2xl uppercase tracking-tight">
              CONHEÇA NOSSOS PROJETOS<br />DEPOIMENTOS
            </h3>
            <p className="font-sans text-xs text-white/40 mt-1">Veja a experiência e o impacto que o ecossistema Sai do Papel traz para gestores e parceiros estratégicos.</p>
          </div>

          {/* Coverflow Wrapper with Side Navigation Arrows */}
          <div className="relative w-full max-w-5xl mx-auto px-1 md:px-12 flex items-center justify-center overflow-visible">
            {/* Side Arrow button (Left) */}
            <button
              onClick={handlePrev}
              className="absolute left-1 text-white z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-orange border-2 border-white shadow-[0_0_20px_rgba(252,73,37,0.65)] hover:bg-brand-orange/95 hover:scale-110 active:scale-95 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* 3D coverflow-like container */}
            <div 
              className="w-full h-[480px] sm:h-[420px] flex items-center justify-center overflow-visible select-none"
              style={{ perspective: "1200px" }}
            >
              {testimonials.map((test, index) => {
                // Calculate positional offset relative to activeIndex
                let offset = index - activeIndex;
                
                // Handle looping boundaries correctly
                if (offset < -1) offset += testimonials.length;
                if (offset > 1) offset -= testimonials.length;

                const isActive = offset === 0;

                // Customize fallback images for high-end avatars
                const avatar = test.avatarUrl && !test.avatarUrl.includes("undefined")
                  ? test.avatarUrl
                  : "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256"; // high quality professional developer

                return (
                  <motion.div
                    key={test.id}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    animate={{
                      x: offset === -1 ? (isMobile ? "-20%" : "-42%") : offset === 1 ? (isMobile ? "20%" : "42%") : "0%",
                      scale: isActive ? 1.05 : 0.82,
                      rotateY: offset === -1 ? 38 : offset === 1 ? -38 : 0,
                      z: isActive ? 0 : -180,
                      opacity: isActive ? 1 : 0.45,
                      zIndex: isActive ? 20 : 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 24,
                    }}
                    onClick={() => {
                      if (!isActive) setActiveIndex(index);
                    }}
                    className={`absolute w-full max-w-[310px] sm:max-w-[400px] md:max-w-[450px] rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/60 shadow-2xl flex flex-col justify-between h-[390px] sm:h-[360px] cursor-pointer transition-shadow duration-300 ${
                      isActive ? "shadow-brand-orange/20 cursor-default" : "hover:opacity-75"
                    }`}
                  >
                    {/* Backdrop quote logo */}
                    <div className="absolute top-4 right-6 text-slate-100 font-serif text-[120px] leading-none select-none pointer-events-none">
                      “
                    </div>

                    <div className="relative z-10 flex-1">
                      {/* Stars Rating banner */}
                      <div className="flex gap-1 mb-4 select-none text-amber-400">
                        <span className="text-sm">★</span>
                        <span className="text-sm">★</span>
                        <span className="text-sm">★</span>
                        <span className="text-sm">★</span>
                        <span className="text-sm">★</span>
                      </div>
                      
                      {/* Testimonial Quote body */}
                      <p className="font-sans text-[12.5px] sm:text-[13.5px] leading-relaxed text-slate-700 italic pr-4 text-left select-text line-clamp-6">
                        "{test.quote}"
                      </p>
                    </div>

                    {/* Profile section highlighted ("foto dos depoimentos com mais destaque") */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col items-center text-center relative">
                      {/* Suspended & Outstanding Avatar Circle */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100 border-4 border-white ring-4 ring-brand-orange/40 shadow-xl overflow-hidden shrink-0 mx-auto transition-all duration-300 hover:scale-105">
                          <img
                            src={avatar}
                            alt={test.author}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover select-none"
                          />
                        </div>
                        {/* Premium verified badge overlay */}
                        <div className="absolute -bottom-1 -right-1 bg-brand-orange text-white rounded-full p-1 shadow-md border-2 border-white flex items-center justify-center">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                      </div>

                      {/* Adjusted spacing below suspended avatar */}
                      <div className="pt-3">
                        <h5 className="font-display font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                          {test.author}
                        </h5>
                        <p className="font-mono text-[9px] text-brand-orange font-bold tracking-widest mt-0.5 uppercase px-2 line-clamp-1" title={test.role}>
                          {test.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Side Arrow button (Right) */}
            <button
              onClick={handleNext}
              className="absolute right-1 text-white z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-orange border-2 border-white shadow-[0_0_20px_rgba(252,73,37,0.65)] hover:bg-brand-orange/95 hover:scale-110 active:scale-95 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Simple Pagination Dots below */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-400 cursor-pointer ${
                  dotIdx === activeIndex ? "w-7 bg-brand-orange" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ir para slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
