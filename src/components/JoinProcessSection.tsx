import React from 'react';
import { Search, MessageSquare, Users, Sparkles, ArrowRight, Check } from 'lucide-react';

interface JoinProcessSectionProps {
  onOpenInterestModal: () => void;
}

export const JoinProcessSection: React.FC<JoinProcessSectionProps> = ({
  onOpenInterestModal,
}) => {
  const steps = [
    {
      step: '1',
      title: 'Conhecer',
      subtitle: 'Entenda os Princípios',
      description:
        'Conheça a proposta pedagógica, os valores morais e a história centenária que a Ordem DeMolay representa para a juventude mundial.',
      icon: Search,
    },
    {
      step: '2',
      title: 'Conversar',
      subtitle: 'Diálogo com Líderes',
      description:
        'Converse com membros ativos, o Mestre Conselheiro e os tios do Conselho Consultivo para tirar dúvidas e compreender a rotina do Capítulo.',
      icon: MessageSquare,
    },
    {
      step: '3',
      title: 'Participar',
      subtitle: 'Sessões Públicas',
      description:
        'Participe com seus familiares de cerimônias abertas ao público, confraternizações e ações filantrópicas para vivenciar a fraternidade.',
      icon: Users,
    },
    {
      step: '4',
      title: 'Iniciar',
      subtitle: 'A Cerimônia de Ingresso',
      description:
        'Após a orientação e consentimento formal dos pais/responsáveis, o jovem é convidado a ingressar oficialmente através da histórica Cerimônia de Iniciação.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="como-entrar" className="py-24 bg-[#081510] text-stone-200 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Passo a Passo de Ingresso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            Como Entrar?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            A jornada no Capítulo Tio Paulo Romeu Homem de Oliveira Nº 922 começa com um caminho claro, transparente
            e acolhedor para o jovem e sua família.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#0b1c15] p-7 rounded-2xl border border-stone-800 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-[#d4af37]/30 flex items-center justify-center text-amber-300 font-cinzel font-bold text-base tabular-nums group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-stone-400 group-hover:text-amber-300 transition-colors" />
                  </div>

                  <span className="text-[10px] font-cinzel uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-cinzel font-bold text-stone-100 mb-2 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Etapa fundamental</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0c231a] via-[#102d21] to-[#0c231a] border border-[#d4af37]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-100">
              Pronto para dar o primeiro passo?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Manifeste seu interesse ou envie sua mensagem para que a comissão de relações do Capítulo Nº 922
              entre em contato direto com você e seus responsáveis.
            </p>
          </div>

          <button
            onClick={onOpenInterestModal}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-cinzel font-bold uppercase tracking-wider bg-gradient-to-r from-[#fae6a6] via-[#d4af37] to-[#ba8a1c] hover:from-[#fff2c7] hover:to-[#d8a72e] text-[#08120e] rounded-md transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] active:scale-95"
          >
            <span>Manifestar Interesse</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
