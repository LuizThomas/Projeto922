import React from 'react';
import { CalendarDays, HeartHandshake, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onLearnMore: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onLearnMore }) => {
  const steps = [
    {
      step: '01',
      title: 'Reuniões Periódicas',
      kicker: 'Ritualística & Deliberação',
      description:
        'Encontros formais e administrativos ocorridos periodicamente. Os jovens conduzem suas próprias assembleias com regras parlamentares, aprendendo oratória, respeito à ordem e tomada de decisões coletivas.',
      details: [
        'Supervisão integral de tios Maçons do Conselho Consultivo',
        'Treinamento continuado de oratória e protocolo',
        'Votação de projetos, orçamentos e relatórios de comissões',
      ],
      icon: CalendarDays,
    },
    {
      step: '02',
      title: 'Projetos e Ações Sociais',
      kicker: 'Filantropia em Cedro/CE',
      description:
        'A fraternidade se materializa em ações concretas de serviço à comunidade do Cedro. Os jovens planejam campanhas de arrecadação, visitam instituições assistenciais e aprendem a transformar a realidade ao seu redor.',
      details: [
        'Campanhas anuais de alimentos, agasalhos e brinquedos',
        'Parcerias com entidades beneficentes municipais',
        'Engajamento conjunto com o Clube de Mães e Amigos',
      ],
      icon: HeartHandshake,
    },
    {
      step: '03',
      title: 'Integração & Gestão Jovem',
      kicker: 'Liderança Participativa',
      description:
        'Administração direta do Capítulo realizada pelos próprios jovens (Mestre Conselheiro, Conselheiros, Tesoureiro, Escrivão). Uma verdadeira escola prática de gestão e companheirismo fraternal.',
      details: [
        'Mandatos democráticos com prestação de contas',
        'Gestão de comissões de finanças, filantropia e integração',
        'Participação em congressos estaduais e encontros regionais',
      ],
      icon: Award,
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#07130e] text-stone-200 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Estrutura & Rotina
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            Como Funciona?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Uma dinâmica formativa séria, baseada no protagonismo juvenil supervisionado, onde os próprios jovens
            administram, planejam e executam as diretrizes do Capítulo.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* 3 Steps Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#0b1c15] rounded-xl p-8 border border-stone-800/90 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-[#d4af37]/40 flex items-center justify-center text-amber-300 font-cinzel font-bold text-lg tabular-nums">
                      {item.step}
                    </span>
                    <Icon className="w-6 h-6 text-stone-400 group-hover:text-amber-300 transition-colors" />
                  </div>

                  <span className="text-[11px] font-cinzel font-semibold uppercase tracking-wider text-amber-400/90">
                    {item.kicker}
                  </span>
                  <h3 className="text-xl font-cinzel font-bold text-stone-100 mt-1 mb-3 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2 border-t border-stone-800/80 pt-4 text-xs text-stone-300">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">·</span>
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/50 flex items-center gap-2 text-xs font-cinzel font-semibold text-amber-400 group-hover:text-amber-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Ambiente ético e seguro</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#0c2219] via-[#0e271d] to-[#0c2219] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-cinzel text-base font-bold text-stone-100">
              Quer saber como acompanhar uma sessão pública ou atividade do Capítulo?
            </h4>
            <p className="text-xs text-stone-400">
              Recebemos visitantes, pais e interessados em datas especiais previamente agendadas pela diretoria.
            </p>
          </div>
          <button
            onClick={onLearnMore}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-xs font-cinzel font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#e6be48] text-[#08120e] rounded-md transition-all shadow-md active:scale-95"
          >
            <span>Tirar Dúvidas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
