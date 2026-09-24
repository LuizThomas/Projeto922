import React, { useState } from 'react';
import { Heart, Users, Sparkles, Gift, Home, Smile, ArrowRight } from 'lucide-react';
import communityImg from '../assets/images/community_charity_action_1790266139218.jpg';

export const ProjectsAndMothersClub: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'sociais' | 'maes'>('todos');

  const projects = [
    {
      id: 'arrecadacao-alimentos',
      title: 'Campanhas de Arrecadação de Alimentos',
      category: 'sociais',
      categoryLabel: 'Ação Filantrópica',
      description:
        'Mobilização periódica nos bairros e comércio de Cedro/CE para arrecadação de cestas básicas destinadas a famílias em situação de vulnerabilidade.',
      impact: '+1.500 kg de alimentos entregues em ações solidárias',
      icon: Gift,
    },
    {
      id: 'visitas-solidarias',
      title: 'Visitas Solidárias e Apoio Assistencial',
      category: 'sociais',
      categoryLabel: 'Serviço Comunitário',
      description:
        'Momentos de escuta, afeto e entrega de donativos a abrigos de idosos e instituições assistenciais, desenvolvendo empatia viva em nossos jovens.',
      impact: 'Mais de 10 ações assistenciais diretas realizadas',
      icon: Home,
    },
    {
      id: 'clube-de-maes-apoio',
      title: 'Acolhimento Familiar & Clube de Mães',
      category: 'maes',
      categoryLabel: 'Apoio Familiar',
      description:
        'Espaço dedicado às mães e guardiãs dos membros para planejamento conjunto de eventos, apoio logístico nas cerimônias e amparo afetivo fraterno.',
      impact: '100% de integração entre mães e a diretoria do Capítulo',
      icon: Heart,
    },
    {
      id: 'eventos-integracao',
      title: 'Eventos Cívicos e Confraternizações',
      category: 'sociais',
      categoryLabel: 'Cidadania & Cultura',
      description:
        'Comemorações do Dia das Mães, Dia dos Pais, desfiles cívicos e celebrações abertas que estreitam os laços entre a Ordem e a sociedade cedrense.',
      impact: 'Encontros públicos com mais de 200 convidados da comunidade',
      icon: Users,
    },
  ];

  const filteredProjects =
    filter === 'todos' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projetos" className="py-24 bg-[#08130e] text-stone-200 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Ação Comunitária & Vínculo Afetivo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            Projetos Sociais & Clube de Mães
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            O Capítulo Tio Paulo Romeu Homem de Oliveira Nº 922 atua com foco em impacto comunitário,
            participação social e amparo familiar em Cedro/CE.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* Feature Hero Banner for Projects */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#0b1c15] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-72 sm:h-84 lg:h-full relative">
              <img
                src={communityImg}
                alt="Ação comunitária e voluntariado jovem em Cedro"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0b1c15] via-transparent to-transparent opacity-90 lg:opacity-60" />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-cinzel uppercase tracking-widest text-amber-400 font-bold">
                  Filantropia em Ação
                </span>
                <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-100">
                  Transformando Solidariedade em Dignidade
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Para um DeMolay, a filantropia não é um evento isolado, mas um dever moral inalienável.
                  Através de projetos contínuos, os jovens aprendem a olhar para o próximo com compaixão e
                  responsabilidade social concreta.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#07130e] border border-stone-800">
                  <h4 className="text-amber-300 font-cinzel text-xs font-bold uppercase mb-1">
                    Impacto Real
                  </h4>
                  <p className="text-xs text-stone-400">
                    Ações pensadas para gerar alívio imediato a quem mais precisa em Cedro.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#07130e] border border-stone-800">
                  <h4 className="text-amber-300 font-cinzel text-xs font-bold uppercase mb-1">
                    Participação Social
                  </h4>
                  <p className="text-xs text-stone-400">
                    Espaço aberto para mães, familiares e membros colaborarem com ideias.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#07130e] border border-stone-800">
                  <h4 className="text-amber-300 font-cinzel text-xs font-bold uppercase mb-1">
                    Apoio Familiar
                  </h4>
                  <p className="text-xs text-stone-400">
                    Ambiente que coloca as mães e os pais no centro de cada celebração.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls (Allowed by frontend design: interactive button segmented control) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[#06100c] border border-stone-800 rounded-lg">
            <button
              onClick={() => setFilter('todos')}
              className={`px-4 py-2 text-xs font-cinzel font-semibold rounded-md transition-colors ${
                filter === 'todos'
                  ? 'bg-[#d4af37] text-[#08120e] font-bold shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Todos os Projetos
            </button>
            <button
              onClick={() => setFilter('sociais')}
              className={`px-4 py-2 text-xs font-cinzel font-semibold rounded-md transition-colors ${
                filter === 'sociais'
                  ? 'bg-[#d4af37] text-[#08120e] font-bold shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Ações Filantrópicas
            </button>
            <button
              onClick={() => setFilter('maes')}
              className={`px-4 py-2 text-xs font-cinzel font-semibold rounded-md transition-colors ${
                filter === 'maes'
                  ? 'bg-[#d4af37] text-[#08120e] font-bold shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Clube de Mães & Família
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#0b1c15] p-7 rounded-xl border border-stone-800 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-cinzel uppercase tracking-widest text-amber-400 font-semibold">
                      {item.categoryLabel}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-cinzel font-bold text-stone-100 mb-3 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <span className="text-amber-300/90 font-medium">{item.impact}</span>
                  <span className="font-cinzel text-stone-500 uppercase tracking-wider text-[10px]">
                    Cedro / CE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
