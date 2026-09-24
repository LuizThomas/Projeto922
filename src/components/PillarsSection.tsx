import React, { useState } from 'react';
import { Award, Mic, ShieldCheck, HeartHandshake, Users2, Landmark, ChevronRight } from 'lucide-react';
import { Pillar } from '../types';

export const PillarsSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const pillars: (Pillar & { iconComponent: React.ComponentType<{ className?: string }> })[] = [
    {
      id: 'lideranca',
      title: 'Liderança',
      description: 'Aprenda a guiar equipes e conduzir projetos reais com protagonismo juvenil.',
      detail: 'Desde a presidência de comissões até a gestão geral do Capítulo, cada jovem vivencia desafios práticos de liderança assertiva, diplomacia e tomada de decisões sob pressão.',
      icon: 'Award',
      iconComponent: Award,
    },
    {
      id: 'oratoria',
      title: 'Oratória',
      description: 'Falar em público com segurança e clareza para expressar ideias transformadoras.',
      detail: 'A prática ritualística e os debates em assembleia desenvolvem postura, dicção, argumentação lógica e a coragem necessária para se comunicar com autoridade em qualquer ambiente.',
      icon: 'Mic',
      iconComponent: Mic,
    },
    {
      id: 'responsabilidade',
      title: 'Responsabilidade',
      description: 'Gestão administrativa e financeira do próprio capítulo desde cedo.',
      detail: 'Elaboração de atas oficiais, prestação de contas fiscais, cumprimento de prazos e respeito a estatutos ensinam governança responsável antes mesmo da vida universitária.',
      icon: 'ShieldCheck',
      iconComponent: ShieldCheck,
    },
    {
      id: 'servico',
      title: 'Serviço',
      description: 'Ações coordenadas que geram impacto real no município de Cedro.',
      detail: 'Campanhas de arrecadação, voluntariado em comunidades vulneráveis e projetos sociais constroem uma consciência empática e ativa de auxílio ao próximo.',
      icon: 'HeartHandshake',
      iconComponent: HeartHandshake,
    },
    {
      id: 'companheirismo',
      title: 'Companheirismo',
      description: 'Amizades verdadeiras e eternas fundamentadas no apoio mútuo.',
      detail: 'A irmandade DeMolay transcende fronteiras geográficas: um laço de fraternidade leal onde cada irmão apoia o crescimento moral e pessoal do outro para a vida inteira.',
      icon: 'Users2',
      iconComponent: Users2,
    },
    {
      id: 'cidadania',
      title: 'Cidadania',
      description: 'Consciência de direitos e deveres para moldar o futuro da sociedade.',
      detail: 'Amor ao país, respeito às leis republicanas e compromisso cívico com o desenvolvimento sustentável e ético do município de Cedro e do Ceará.',
      icon: 'Landmark',
      iconComponent: Landmark,
    },
  ];

  return (
    <section className="py-24 bg-[#06100c] text-stone-200 relative overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Formação Integral do Jovem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            O que você desenvolve?
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Nossa jornada educativa foca no desenvolvimento equilibrado através de seis pilares de formação moral e cívica.
          </p>
        </div>

        {/* 6 Pillars Grid with Editorial Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.iconComponent;
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(isSelected ? null : pillar.id)}
                className={`group p-8 rounded-xl bg-[#0b1c15]/90 border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.2)] bg-[#0e241c]'
                    : 'border-stone-800/90 hover:border-[#d4af37]/50 hover:bg-[#0d221a]'
                }`}
              >
                {/* Editorial Index in corner */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#07130e] border border-[#d4af37]/30 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-cinzel text-xs font-bold text-stone-500 group-hover:text-amber-400 transition-colors tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl font-cinzel font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Expandable Practical Impact Detail */}
                  {isSelected && (
                    <div className="pt-3 mt-3 border-t border-stone-800 text-xs text-amber-200/90 leading-relaxed animate-in fade-in duration-200">
                      {pillar.detail}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs text-stone-400 group-hover:text-amber-300 transition-colors">
                  <span className="font-medium">
                    {isSelected ? 'Ocultar detalhes' : 'Ver aplicação prática'}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-90 text-amber-400' : 'group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
