import React from 'react';
import { Trophy, Award, Scroll, Star, CheckCircle, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Carta Constitutiva Regular',
      tag: 'Reconhecimento Oficial',
      description:
        'Regularidade plena e atestada perante o Supremo Conselho da Ordem DeMolay para o Brasil (SCODB/SCDB).',
      date: 'Nº 922 Oficial',
    },
    {
      icon: Award,
      title: '+1.500 kg em Campanhas Sociais',
      tag: 'Filantropia Comunitária',
      description:
        'Alimentos e itens de primeira necessidade arrecadados e entregues a famílias assistidas em Cedro/CE.',
      date: 'Compromisso Contínuo',
    },
    {
      icon: Scroll,
      title: 'Formação de Dezenas de Líderes',
      tag: 'Legado Educacional',
      description:
        'Jovens que passaram pelo Capítulo e hoje são profissionais graduados, servidores públicos e cidadãos de conduta ilibada.',
      date: 'Impacto Social',
    },
    {
      icon: Star,
      title: 'Excelência Ritualística e Administrativa',
      tag: 'Mérito de Gestão',
      description:
        'Cumprimento rigoroso de cronogramas, balancetes fiscais, transmissão de cargos e instruções de alto nível.',
      date: 'Cedro / Ceará',
    },
  ];

  return (
    <section className="py-24 bg-[#060e0a] text-stone-200 relative overflow-hidden border-b border-stone-800">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Galeria de Honra & Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            Parede de Conquistas
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Reconhecimentos que refletem a dedicação ininterrupta dos membros, conselheiros e do Clube de Mães
            na construção de uma instituição exemplar.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* Digital Trophy Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-b from-[#0b1c15] to-[#07130e] p-8 rounded-2xl border border-stone-800/90 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 via-[#d4af37]/15 to-transparent border border-[#d4af37]/40 flex items-center justify-center mb-6 text-amber-300 group-hover:scale-110 group-hover:border-amber-400 transition-all shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-amber-400/90 block mb-1">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-cinzel font-bold text-stone-100 mb-3 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>{item.date}</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Statement Seal */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0b1c15]/60 border border-stone-800 text-center max-w-4xl mx-auto space-y-2">
          <p className="font-cinzel text-sm sm:text-base font-medium text-stone-300 italic">
            "Não medimos o nosso valor pelas honrarias passageiras, mas pelo caráter dos homens que formamos e pelo bem que semeamos."
          </p>
          <span className="text-xs font-cinzel uppercase tracking-widest text-[#d4af37] block font-bold">
            Capítulo Tio Paulo Romeu Homem de Oliveira Nº 922 · Cedro/CE
          </span>
        </div>
      </div>
    </section>
  );
};
