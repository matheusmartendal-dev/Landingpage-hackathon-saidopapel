/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Layers, BrainCircuit, Users, Compass, Network } from 'lucide-react';
import { DifferentialItem } from '../types';

export default function Differentials() {
  const differentials: DifferentialItem[] = [
    {
      number: 1,
      title: "Última plataforma tecnológica para criação e execução de projetos",
      description: "Nossa infraestrutura digital proprietária garante acompanhamento em tempo real, submissões seguras de código e painéis intuitivos de avaliação para as bancas de jurados."
    },
    {
      number: 2,
      title: "Consultoria e inteligência para transformar ideias em grandes projetos",
      description: "Mentores especializados em negócios e tecnologia refinam cada proposta desde o primeiro pitch, assegurando soluções maduras e alinhadas aos objetivos estratégicos."
    },
    {
      number: 3,
      title: "Transformação digital com foco em inovação e resultados",
      description: "Não geramos apenas debates teóricos. Desenvolvemos MVPs reais de alta fidelidade que podem ser acoplados diretamente ao stack tecnológico existente da sua empresa."
    },
    {
      number: 4,
      title: "Processos seguros e personalizados para cada necessidade",
      description: "Garantimos a proteção total de propriedade intelectual do início ao fim, oferecendo contratos de confidencialidade padrão mercado e customização de regras do hackathon."
    },
    {
      number: 5,
      title: "Conectamos pessoas e empresas em um ecossistema inovador",
      description: "Integração direta com universidades, hubs digitais, seniores da engenharia e líderes de startups para injetar diversidade intelectual e criatividade na sua empresa."
    },
    {
      number: 6,
      title: "Uma cultura de inovação que transforma oportunidades em negócios",
      description: "Incentivamos seus próprios colaboradores a agirem como intraempreendedores, estimulando uma postura inovadora que permanece ativa mesmo após a entrega dos prêmios."
    }
  ];

  const getDifferentialIcon = (num: number) => {
    const size = "w-5 h-5";
    const color = "text-white";
    switch (num) {
      case 1:
        return <Layers className={`${size} ${color}`} />;
      case 2:
        return <BrainCircuit className={`${size} ${color}`} />;
      case 3:
        return <Compass className={`${size} ${color}`} />;
      case 4:
        return <ShieldCheck className={`${size} ${color}`} />;
      case 5:
        return <Network className={`${size} ${color}`} />;
      case 6:
        return <Users className={`${size} ${color}`} />;
      default:
        return <ShieldCheck className={`${size} ${color}`} />;
    }
  };

  return (
    <section id="diferencial" className="relative bg-canvas-dark pt-12 pb-24 px-6 overflow-hidden">
      {/* Decorative center halo ring */}
      <div className="absolute top-[50%] right-[-10vw] w-[40vw] h-[40vw] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Badge "03 / Nosso Diferencial" */}
        <div className="flex justify-start mb-8">
          <div className="inline-flex items-center gap-3 bg-[#e5ebed] text-black rounded-full pl-1.5 pr-5 py-1.5 shadow-md">
            <span className="w-6 h-6 rounded-full bg-black text-[#e5ebed] font-mono text-xs font-bold flex items-center justify-center">
              03
            </span>
            <span className="font-display font-medium text-xs uppercase tracking-wider flex items-center">
              Diferenciais de Impacto
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-left mb-12 max-w-xl">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight uppercase leading-none">
            NOSSO DIFERENCIAL
          </h2>
          <p className="font-sans text-xs text-white/50 mt-3 whitespace-pre-wrap">
            Por que escolher a Sai do Papel para estruturar seu hackathon corporativo? Unimos tecnologia própria, curadoria técnica de alto nível e estratégia ágil focada em gerar valor real.
          </p>
        </div>

        {/* Beautiful, highly polished 3-column grid for differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {differentials.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-6 rounded-2xl border bg-brand-orange border-transparent shadow-lg shadow-brand-orange/10 hover:shadow-xl hover:shadow-brand-orange/20 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  {/* Leading stylized numbers box */}
                  <div className="w-9 h-9 rounded-xl font-mono text-xs font-bold flex items-center justify-center bg-black/15 text-white">
                    {item.number < 10 ? `0${item.number}` : item.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                    {getDifferentialIcon(item.number)}
                  </div>
                </div>

                {/* Content */}
                <h4 className="font-display font-semibold text-sm sm:text-base tracking-tight uppercase text-white leading-snug mb-3 select-text">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-white/90 leading-relaxed transition-colors duration-300 select-text">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
