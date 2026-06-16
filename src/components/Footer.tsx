/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Globe, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#050505] border-t border-white/5 pt-16 pb-12 px-6 overflow-hidden">
      
      {/* Absolute ambient grid layout glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,60,21,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Banner with big CTA right above copyright */}
        <div className="bg-brand-orange text-white rounded-3xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#fbd5cc]">Hub de Inovação Sai do Papel</span>
            <h4 className="font-display font-black text-2xl uppercase tracking-tight mt-1">REALIZE SEU HACKATHON CONOSCO!</h4>
            <p className="font-sans text-xs text-[#fbd5cc]/80 mt-1">Nossa consultoria especializada desenha o roteiro ideal de crescimento corporativo rápido e seguro.</p>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('ajuda');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-black text-[#fc4925] hover:bg-white hover:text-black font-display font-medium text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shrink-0"
          >
            Começar Agora ➔
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="col-span-12 md:col-span-4 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://saidopapel.com.br/wp-content/webp-express/webp-images/uploads/2021/03/cropped-Logo-SdP-fundos-escuros.png.webp"
                alt="Sai do Papel"
                referrerPolicy="no-referrer"
                className="h-10 md:h-13 object-contain transition-transform duration-200 hover:scale-[1.02]"
              />
            </a>
            <p className="text-white/40 text-xs leading-relaxed max-w-sm mt-1">
              Somos especialistas em cultura ágil, hackathons e projetos de transformação digital de ponta a ponta. Ajudamos marcas a desenvolver produtos viáveis e atrair talentos inovadores.
            </p>
          </div>

          {/* Quick Links Cols */}
          <div className="col-span-6 md:col-span-2 flex flex-col gap-3">
            <h4 className="font-display text-white text-xs uppercase tracking-widest font-semibold">Links Úteis</h4>
            <a href="#beneficios" className="text-white/45 hover:text-white text-xs transition-colors font-sans">Benefícios</a>
            <a href="#diferencial" className="text-white/45 hover:text-white text-xs transition-colors font-sans">Diferencial</a>
            <a href="#projetos" className="text-white/45 hover:text-white text-xs transition-colors font-sans">Depoimentos</a>
          </div>

          <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
            <h4 className="font-display text-white text-xs uppercase tracking-widest font-semibold">Legal</h4>
            <span className="text-white/45 hover:text-white text-xs transition-colors font-sans cursor-pointer">Políticas</span>
            <span className="text-white/45 hover:text-white text-xs transition-colors font-sans cursor-pointer">Termos de Uso</span>
            <span className="text-white/45 hover:text-white text-xs transition-colors font-sans cursor-pointer">Privacidade</span>
          </div>

          <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
            <h4 className="font-display text-white text-xs uppercase tracking-widest font-semibold">Nossos Canais</h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.saidopapel.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center justify-center text-white"
                title="Web"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://br.linkedin.com/company/saidopapel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center justify-center text-white"
                title="Linkedin"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.instagram.com/saidopapel/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center justify-center text-white"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-white/30 font-mono text-[10px] uppercase tracking-wider">
          <p>© 2024 Sai do Papel Inovação. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Sai do Papel Innovation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
