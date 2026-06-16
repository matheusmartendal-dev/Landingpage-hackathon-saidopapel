/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Target, 
  Users, 
  Search, 
  Award, 
  TrendingUp, 
  HelpCircle, 
  ArrowUpRight, 
  CheckCircle,
  Lightbulb,
  Zap,
  Cpu
} from 'lucide-react';
import { BenefitCard } from '../types';

export default function AboutSection() {
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);
  const [interactiveEmail, setInteractiveEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const benefits: BenefitCard[] = [
    {
      id: 'custo-beneficio',
      title: 'SOLUÇÕES INOVADORAS COM CUSTO-BENEFÍCIO',
      description: 'Crie projetos personalizados e obtenha soluções que podem transformar desafios em grandes oportunidades para sua empresa.',
      iconName: 'sparkles',
      highlightText: 'Foco em ROI & Entregas Rápidas',
    },
    {
      id: 'teste-servico',
      title: 'TESTE PARA INSERÇÃO DE PRODUTO OU SERVIÇO',
      description: 'Tenha uma visão ampla sobre a aceitação do seu produto e identifique melhorias estratégicas que podem ser usadas por clientes potenciais.',
      iconName: 'target',
      highlightText: 'Validação de MKT em Sampa',
    },
    {
      id: 'conexao-equipe',
      title: 'FORTALECIMENTO DA CONEXÃO ENTRE COLABORADORES',
      description: 'Promova a integração da equipe e crie um ambiente onde ideias são compartilhadas, estimulando uma cultura de inovação dentro da empresa.',
      iconName: 'users',
      highlightText: 'Engajamento & Fit Cultural',
    },
    {
      id: 'novos-talentos',
      title: 'NOVOS TALENTOS PARA SUA EMPRESA',
      description: 'Identifique novos talentos e atraia pessoas com potencial para contribuir com projetos futuros e com a inovação da sua empresa.',
      iconName: 'search',
      highlightText: 'Recrutamento Estratégico Tech',
    },
    {
      id: 'reconhecimento-marca',
      title: 'RECONHECIMENTO NO MERCADO',
      description: 'Demonstre inovação e destaque sua marca diante do mercado, fortalecendo sua imagem como empresa que apoia tecnologia e criatividade.',
      iconName: 'award',
      highlightText: 'Marketing Orgânico & Brand Equity',
    },
    {
      id: 'crescimento-org',
      title: 'IMPULSIONE O CRESCIMENTO ORGANIZACIONAL',
      description: 'Transforme desafios em oportunidades inovadoras, desenvolvendo soluções modernas e estratégicas para melhorar seu negócio.',
      iconName: 'trending',
      highlightText: 'Soberania Digital & Modelos Ágeis',
    }
  ];

  const handleMailingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!interactiveEmail) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setInteractiveEmail('');
    }, 3000);
  };

  // Maps custom internal icons based on config
  const renderBenefitIcon = (name: string, active: boolean) => {
    const strokeColor = active ? '#ffffff' : '#000000';
    switch (name) {
      case 'sparkles':
        return <Sparkles className="w-6 h-6" style={{ color: strokeColor }} />;
      case 'target':
        return <Target className="w-6 h-6" style={{ color: strokeColor }} />;
      case 'users':
        return <Users className="w-6 h-6" style={{ color: strokeColor }} />;
      case 'search':
        return <Search className="w-6 h-6" style={{ color: strokeColor }} />;
      case 'award':
        return <Award className="w-6 h-6" style={{ color: strokeColor }} />;
      case 'trending':
        return <TrendingUp className="w-6 h-6" style={{ color: strokeColor }} />;
      default:
        return <Lightbulb className="w-6 h-6" style={{ color: strokeColor }} />;
    }
  };

  return (
    <section id="beneficios" className="relative bg-canvas-dark pt-16 pb-24 px-6 overflow-hidden">
      {/* Decorative vertical connection node line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header Badge "01 / Benefícios de um Hackathon" representing design fidelity */}
        <div className="flex justify-start mb-8">
          <div className="inline-flex items-center gap-3 bg-[#e5ebed] text-black rounded-full pl-1.5 pr-5 py-1.5 shadow-md">
            <span className="w-6 h-6 rounded-full bg-black text-[#e5ebed] font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <span className="font-display font-medium text-xs uppercase tracking-wider flex items-center">
              BENEFÍCIOS DE UM HACKATHON
            </span>
          </div>
        </div>

        {/* Section Title & Subheading exactly matching copy flow */}
        <div className="max-w-4xl text-left mb-16">
          <h2 className="font-display font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.25] tracking-tight">
            Para encontrar{" "}
            <span className="text-brand-orange italic font-bold">
              soluções transformadoras
            </span>{" "}
            em um ambiente colaborativo e criativo, impulsionando sua marca e resultados.
            <br className="hidden md:inline" />
            <span className="text-white/60 font-light text-xl sm:text-2xl mt-4 block">
              Realize seu hackathon com a <span className="font-display font-medium text-white italic underline decoration-brand-orange decoration-2">Sai do Papel</span>.
            </span>
          </h2>
        </div>

        {/* 6 Benefits Grid Card deck styled with exact color-scheme fidelity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-24">
          {benefits.map((benefit, index) => {
            const isSelected = selectedBenefit === benefit.id;
            return (
              <motion.div
                key={benefit.id}
                onClick={() => setSelectedBenefit(isSelected ? null : benefit.id)}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-3xl p-8 flex flex-col justify-between min-h-[440px] relative overflow-hidden group shadow-lg cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'bg-brand-orange text-white scale-[1.01]' 
                    : 'bg-[#e5ebed] text-[#0c0d0f] hover:scale-[1.005]'
                }`}
              >
                {/* Custom top banner layout just like the "SHARE IT" anchor in the design snapshot */}
                <div className={`absolute top-0 left-0 right-0 h-10 px-6 flex items-center justify-between uppercase text-[10px] font-display font-bold tracking-widest ${
                  isSelected ? 'bg-black text-brand-orange' : 'bg-brand-orange text-white'
                }`}>
                  <span>{benefit.highlightText}</span>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    isSelected ? 'bg-brand-orange text-black' : 'bg-black text-brand-orange'
                  }`}>
                    ➔
                  </div>
                </div>

                {/* Micro Visual Vector Art - Mimicking custom vector shapes in the reference image strictly */}
                <div className="relative w-full h-36 flex items-center justify-center pt-8">
                  {/* Rotating perimeter text circle inside active cards */}
                  <div className={`absolute w-24 h-24 rounded-full border border-dashed pointer-events-none ${
                    isSelected ? 'border-white/20 animate-spin-slow' : 'border-black/5'
                  }`} />

                  {/* Procedural vector rendering depending on index */}
                  {index === 0 && (
                    <svg className={`w-16 h-16 ${isSelected ? 'text-white' : 'text-brand-orange'}`} viewBox="0 0 100 100" fill="none">
                      {/* Cost vs ROI network spark chart */}
                      <path d="M 20,80 L 40,65 L 60,35 L 80,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="20" cy="80" r="6" fill="currentColor" />
                      <circle cx="40" cy="65" r="6" fill="currentColor" />
                      <circle cx="60" cy="35" r="6" fill="currentColor" />
                      <circle cx="80" cy="15" r="8" fill="currentColor" className="animate-ping" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className={`w-16 h-16 ${isSelected ? 'text-white' : 'text-[#fc4925]'}`} viewBox="0 0 100 100" fill="currentColor">
                      {/* Target detector radar shield */}
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path d="M 50,5 M 50,95 M 5,50 M 95,50" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className={`w-16 h-16 ${isSelected ? 'text-white' : 'text-black/80'}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5">
                      {/* Connection node cluster */}
                      <circle cx="30" cy="30" r="8" fill="currentColor" />
                      <circle cx="70" cy="35" r="8" fill="currentColor" />
                      <circle cx="50" cy="70" r="10" fill="currentColor" />
                      <line x1="30" y1="30" x2="70" y2="35" />
                      <line x1="70" y1="35" x2="50" y2="70" />
                      <line x1="50" y1="70" x2="30" y2="30" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className={`w-16 h-16 ${isSelected ? 'text-white' : 'text-[#fc4925]'}`} viewBox="0 0 100 100" fill="currentColor">
                      {/* Fedora minimalist vector hat from image representativeness */}
                      <path d="M 25,60 C 25,35 35,28 50,28 C 65,28 75,35 75,60 Z" />
                      <rect x="25" y="52" width="50" height="8" fill="currentColor" opacity="0.3" />
                      <path d="M 12,62 C 30,60 70,60 88,62 C 92,63 92,68 88,67 C 70,65 30,65 12,67 Z" fillRule="evenodd" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg className={`w-16 h-16 ${isSelected ? 'text-white' : 'text-black'}`} viewBox="0 0 100 100" fill="currentColor">
                      {/* Trophy star vector representativeness */}
                      <path d="M 30,25 h 40 v 25 c 0,15 -10,25 -20,25 c -10,0 -20,-10 -20,-25 Z" />
                      <path d="M 45,75 h 10 v 10 H 45 Z" />
                      <path d="M 35,85 h 30 v 4 H 35 Z" fill="currentColor" />
                      <polygon points="50,30 53,38 62,38 55,43 57,51 50,46 43,51 45,43 38,38 47,38" fill={isSelected ? '#000000' : '#ff3c15'} />
                    </svg>
                  )}
                  {index === 5 && (
                    <svg className={`w-16 h-16 ${isSelected ? 'text-white' : 'text-brand-orange'}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                      {/* Exponential arrow trending curve */}
                      <path d="M 15,85 L 30,85 L 30,70 L 45,70 L 45,50 L 60,50 L 60,25 L 85,25" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="75,15 85,25 75,35" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                {/* Content Block */}
                <div className="mt-8">
                  <h3 className={`font-display font-medium text-lg leading-tight mb-2 tracking-tight ${
                    isSelected ? 'text-white' : 'text-[#0c0d0f]'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`font-sans text-[12.5px] leading-relaxed ${
                    isSelected ? 'text-white/80' : 'text-[#0c0d0f]/70'
                  }`}>
                    {benefit.description}
                  </p>
                  
                  {/* Dynamic footer trace inside cards */}
                  <div className={`mt-4 pt-3 border-t flex items-center justify-between font-mono text-[10px] uppercase ${
                    isSelected ? 'border-white/10 text-white/50' : 'border-black/5 text-[#0c0d0f]/40'
                  }`}>
                    <span>Clique p/ focar</span>
                    <span className={`font-bold ${isSelected ? 'text-white' : 'text-brand-orange'}`}>
                      Mapear Ideia ➔
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🚀 "COMO A SAI DO PAPEL PODE TE AJUDAR COM ISSO?" Large Dynamic Widget Section */}
        <div id="ajuda" className="relative w-full rounded-3xl border border-white/10 bg-[#0c0d0f] overflow-hidden p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 justify-between">
          {/* Radial decorative highlight */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl text-left z-10">
            <span className="font-mono text-[10px] uppercase text-brand-orange tracking-widest font-bold mb-2 block">
              METODOLOGIA SAI DO PAPEL
            </span>
            <h3 className="font-display font-bold text-white text-2xl sm:text-3xl leading-tight uppercase tracking-tight">
              COMO A <span className="text-brand-orange italic font-serif">SAI DO PAPEL</span> PODE TE AJUDAR COM ISSO?
            </h3>
            <p className="text-white/60 font-sans text-xs sm:text-sm mt-4 leading-relaxed">
              Acreditamos que o Hackathon pode ser aplicado na sua estratégia e transformar ideias em resultados de negócios. Com ferramentas de inovação e processos ágeis, podemos ajudar sua empresa a desenvolver soluções criativas e eficientes.
            </p>
          </div>

          <form onSubmit={handleMailingSubmit} className="w-full md:max-w-sm z-10 shrink-0">
            <div className="bg-white/5 border border-white/10 p-2.5 rounded-2xl flex flex-col gap-3 focus-within:border-brand-orange/40 transition-colors">
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/40 block px-2">Assinar Newsletter ou Insights</span>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={interactiveEmail}
                  onChange={(e) => setInteractiveEmail(e.target.value)}
                  className="bg-transparent text-white font-sans text-xs px-2 py-1.5 flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSent}
                  className="px-4 py-2 bg-brand-orange hover:bg-brand-orange/90 rounded-xl text-[10px] uppercase font-display font-bold tracking-wider text-white transition-all scale-100 hover:scale-105"
                >
                  {isSent ? 'ENVIADO!' : 'QUERO SABER MAIS!'}
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
