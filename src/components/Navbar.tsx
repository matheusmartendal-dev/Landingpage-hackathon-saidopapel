/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, User, LogIn, Award, HelpCircle } from 'lucide-react';
import { NavItem } from '../types';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [personName, setPersonName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'beneficios', label: 'Benefícios', href: '#beneficios' },
    { id: 'ajuda', label: 'Como Ajudamos', href: '#ajuda' },
    { id: 'diferencial', label: 'Diferenciais', href: '#diferencial' },
    { id: 'projetos', label: 'Depoimentos', href: '#projetos' },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail || !personName) return;
    setMessageSubmitted(true);
    setTimeout(() => {
      setShowContactModal(false);
      setMessageSubmitted(false);
      setPersonName('');
      setCompanyName('');
      setUserEmail('');
    }, 2000);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand "Sai do Papel" */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="https://saidopapel.com.br/wp-content/webp-express/webp-images/uploads/2021/03/cropped-Logo-SdP-fundos-escuros.png.webp"
              alt="Sai do Papel"
              referrerPolicy="no-referrer"
              className="h-10 md:h-13 object-contain transition-transform duration-200 hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="font-sans text-[12px] text-white/60 hover:text-white hover:text-brand-orange transition-colors duration-200 uppercase tracking-widest font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            {/* CTA Match with primary style */}
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-orange text-white hover:bg-white hover:text-black transition-all duration-300 text-xs font-display font-medium uppercase tracking-widest"
            >
              Falar com Especialista
              <span className="text-[10px] ml-1">➔</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white p-2 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0a0a0b]/98 border-b border-white/5 overflow-hidden px-6"
            >
              <div className="flex flex-col gap-5 py-6 border-t border-white/5 mt-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-sm text-white/60 hover:text-brand-orange transition-colors duration-200 uppercase tracking-widest"
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="h-px bg-white/5 my-2" />
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowContactModal(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-orange hover:bg-white hover:text-black text-white transition-all duration-300 text-xs font-display font-medium uppercase tracking-widest"
                >
                  FALAR COM ESPECIALISTA <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Interactive Contact / Solution Modal */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-md p-8 bg-[#0f0f11] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* background atmospheric orange glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/15 blur-3xl rounded-full" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-mono font-bold text-xs">
                  &gt;_
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base">Inicie seu Projeto</h3>
                  <p className="text-[#f1a491] text-[10px] uppercase tracking-wider font-mono">Quero Realizar um Hackathon</p>
                </div>
              </div>

              {messageSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <Award className="w-12 h-12 text-brand-orange mx-auto mb-4 animate-bounce" />
                  <h4 className="text-white font-display font-medium text-sm uppercase tracking-wide">Mensagem Enviada!</h4>
                  <p className="text-white/50 text-xs mt-2">Nossos especialistas em hackathon entrarão em contato em até 24 horas.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-[10px] uppercase tracking-wider font-display mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Pedro Silva"
                      value={personName}
                      onChange={(e) => setPersonName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-sans text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-[10px] uppercase tracking-wider font-display mb-1">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Microsoft"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-sans text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-[10px] uppercase tracking-wider font-display mb-1">
                      Seu E-mail Corporativo
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: pedro@empresa.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-sans text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setShowContactModal(false)}
                      className="px-4 py-3 text-white/50 hover:text-white text-xs uppercase tracking-wider font-display transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-display text-xs font-semibold uppercase tracking-widest rounded-lg shadow-lg"
                    >
                      Enviar Proposta ➔
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
