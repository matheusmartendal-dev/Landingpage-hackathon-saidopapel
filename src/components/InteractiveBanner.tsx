/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Info, Award, HelpCircle } from 'lucide-react';

export default function InteractiveBanner() {
  const [showTip, setShowTip] = useState(false);

  // Stylized procedural vector faces for dynamic team/participant preview (100% stable)
  const renderAvatar = (seedColor: string, accentColor: string, index: number) => (
    <svg 
      key={index}
      className="w-7 h-7 rounded-full border-2 border-[#121315] -ml-2 bg-[#1b1c1e] first:ml-0 shadow-md transform hover:-translate-y-1 hover:z-10 transition-all duration-200" 
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="50" fill={seedColor} />
      <path d={`M 25,50 Q 50,${20 + (index * 5)} 75,50 Q 80,75 50,85 Q 20,75 25,50`} fill={accentColor} opacity="0.8" />
      <circle cx="40" cy="48" r="4" fill="#ffffff" />
      <circle cx="60" cy="48" r="4" fill="#ffffff" />
      <path d="M 43,62 Q 50,68 57,62" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );

  return (
    <section className="relative px-6 max-w-7xl mx-auto w-full z-20 -mt-10 md:-mt-6">
      
      <div className="w-full max-w-4xl mx-auto">
        {/* MAIN ORANGE SLOGAN BANNER */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="h-14 rounded-full bg-brand-orange px-5 flex items-center justify-between cursor-pointer shadow-lg shadow-brand-orange/10 relative overflow-hidden group"
          onClick={() => setShowTip(!showTip)}
          title="Clique para saber como realizamos ideias"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="flex items-center gap-4 z-10 w-full min-w-0">
            
            {/* Highlight badge indicator */}
            <div className="flex bg-black/15 px-3 py-1.5 rounded-full items-center gap-1.5 shrink-0">
              <span className="font-mono text-[10px] text-white/60">Ideas</span>
              <span className="w-5 h-5 rounded-full bg-black text-[10px] font-mono font-bold flex items-center justify-center text-brand-orange">
                ➔
              </span>
              <span className="font-mono text-[10px] text-white/60">Build</span>
            </div>

            {/* Bold slogan message text */}
            <p className="font-sans text-[11.5px] leading-tight text-white font-medium tracking-tight truncate flex-1 pr-2 uppercase text-left">
              Para transformar sua ideia em um hackathon da Sai do Papel é a melhor maneira.
            </p>
          </div>

          {/* Micro action link arrow */}
          <div className="w-6 h-6 rounded-full bg-black/25 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:scale-105 transition-all z-10">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Accordion detail info */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-2 p-5 bg-[#0e0e11] border border-white/5 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-medium text-white text-xs uppercase tracking-wider">Como transformar desafios em soluções?</h4>
                  <p className="text-white/60 text-xs mt-1 max-w-xl">
                    Com mais de 50 hackathons realizados, oferecemos uma consultoria especializada para mapear as dores da sua empresa, capturar insights de dezenas de especialistas e apresentar protótipos funcionais prontos para escalabilidade.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowTip(false)}
                className="px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 hover:bg-brand-orange/20 rounded-full text-[10px] font-mono text-brand-orange uppercase tracking-wider whitespace-nowrap"
              >
                Fechar Painel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
