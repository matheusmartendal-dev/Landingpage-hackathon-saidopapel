/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Youtube } from 'lucide-react';

export default function ProjectVideos() {
  const videos = [
    {
      id: 'globo',
      title: 'Hackathon Globo',
      subtitle: 'Inovação em Mídia & Tecnologia',
      embedUrl: 'https://www.youtube.com/embed/PycJQXDljQc',
      description: 'Veja como realizamos uma jornada intensa para construir ideias disruptivas de tecnologia e entretenimento, integrando talentos diversos no ecossistema da maior emissora de TV da América Latina.',
      tag: 'Mídia & Tech',
    },
    {
      id: 'bndes',
      title: 'Hackathon BNDES',
      subtitle: 'Desafios que Transformam o Brasil',
      embedUrl: 'https://www.youtube.com/embed/gejfUTqXX9E',
      description: 'Acompanhe a criação e o desenvolvimento ágil de soluções de alto impacto social e econômico voltadas para infraestrutura, sustentabilidade e inovação pública.',
      tag: 'Desenvolvimento & GovTech',
    },
  ];

  return (
    <section id="videos" className="relative bg-[#020202] pt-12 pb-24 px-6 overflow-hidden border-t border-white/5">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-[10vw] w-[35vw] h-[35vw] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Badge "04 / Projetos em Ação" */}
        <div className="flex justify-start mb-8">
          <div className="inline-flex items-center gap-3 bg-[#e5ebed] text-black rounded-full pl-1.5 pr-5 py-1.5 shadow-md">
            <span className="w-6 h-6 rounded-full bg-black text-[#e5ebed] font-mono text-xs font-bold flex items-center justify-center">
              04
            </span>
            <span className="font-display font-medium text-xs uppercase tracking-wider flex items-center">
              Projetos em Ação
            </span>
          </div>
        </div>

        {/* Header Title */}
        <div className="text-left mb-12 max-w-xl">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight uppercase leading-none">
            CASOS DE SUCESSO
          </h2>
          <p className="font-sans text-xs text-white/50 mt-3">
            Assista aos bastidores e veja como nossas metodologias exclusivas transformaram grandes ideias em soluções reais de negócios para as maiores organizações e marcas do país.
          </p>
        </div>

        {/* Video Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-[#07080a] border border-white/5 hover:border-brand-orange/25 overflow-hidden rounded-3xl p-5 md:p-6 transition-all duration-300 shadow-xl"
            >
              {/* Responsive Video Frame container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/5 shadow-inner">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Video Info metadata details */}
              <div className="mt-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2.5">
                    <span className="px-2.5 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/20 text-[#f1a491] font-mono text-[9px] uppercase tracking-wider">
                      {video.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/40 font-mono text-[9px] uppercase tracking-widest">
                      <Youtube className="w-3.5 h-3.5 text-[#ef4444]" />
                      Documentário
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-snug uppercase">
                    {video.title}
                  </h3>
                  <p className="font-sans text-[#f1a491] text-xs font-medium uppercase tracking-wider mb-3">
                    {video.subtitle}
                  </p>
                  
                  <p className="font-sans text-xs text-white/60 leading-relaxed text-left select-text">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
