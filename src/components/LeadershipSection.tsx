import React, { useState } from 'react';
import { LeadershipOfficer } from '../types';
import { Crown, Shield, Scroll, DollarSign, Heart, Sparkles, UserCheck } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'executiva' | 'consultivo' | 'oficiais'>('executiva');

  const executiveOfficers: LeadershipOfficer[] = [
    {
      name: 'Mestre Conselheiro',
      role: 'Mestre Conselheiro',
      tier: 'executive',
      term: 'Gestão Administrativa Vigente',
      description:
        'Líder executivo eleito pelos membros do Capítulo. Preside as assembleias, representa a instituição perante a sociedade e coordena todos os projetos.',
      symbol: 'Crown',
    },
    {
      name: 'Primeiro Conselheiro',
      role: '1º Conselheiro',
      tier: 'executive',
      term: 'Gestão Administrativa Vigente',
      description:
        'Segundo na linha de sucessão, orienta as instruções ritualísticas e cuida do aperfeiçoamento moral e doutrinário dos membros.',
      symbol: 'Shield',
    },
    {
      name: 'Segundo Conselheiro',
      role: '2º Conselheiro',
      tier: 'executive',
      term: 'Gestão Administrativa Vigente',
      description:
        'Responsável pelo zelo ao companheirismo, harmonia entre os irmãos e recepção atenta aos visitantes e recém-iniciados.',
      symbol: 'UserCheck',
    },
  ];

  const councilAdvisory: LeadershipOfficer[] = [
    {
      name: 'Presidente do Conselho Consultivo',
      role: 'Presidente do Conselho',
      tier: 'advisory',
      term: 'Conselho Maçônico',
      description:
        'Mestre Maçom regular que lidera a equipe de adultos conselheiros, garantindo a fidelidade às normas e a segurança de todas as atividades do Capítulo.',
      symbol: 'Shield',
    },
    {
      name: 'Consultor do Capítulo',
      role: 'Consultor de Relações Juvenis',
      tier: 'advisory',
      term: 'Conselho Maçônico',
      description:
        'Tio orientador pedagógico com atuação direta junto aos jovens no planejamento de ações cívicas e formação de líderes.',
      symbol: 'Sparkles',
    },
  ];

  const administrativeOfficers: LeadershipOfficer[] = [
    {
      name: 'Escrivão do Capítulo',
      role: 'Escrivão (Secretaria)',
      tier: 'officer',
      term: 'Corpo de Oficiais',
      description:
        'Responsável pela lavratura das atas, correspondências oficiais, certidões e livros de presenças.',
      symbol: 'Scroll',
    },
    {
      name: 'Tesoureiro do Capítulo',
      role: 'Tesoureiro (Finanças)',
      tier: 'officer',
      term: 'Corpo de Oficiais',
      description:
        'Gestão responsável das receitas, despesas, prestação de contas fiscais e orçamentos do Capítulo.',
      symbol: 'DollarSign',
    },
    {
      name: 'Hospitaleiro',
      role: 'Hospitaleiro (Filantropia)',
      tier: 'officer',
      term: 'Corpo de Oficiais',
      description:
        'Responsável pelo tronco de solidariedade, visitas a irmãos enfermos e amparo imediato a famílias carentes.',
      symbol: 'Heart',
    },
  ];

  const getSymbolIcon = (symbol: string) => {
    switch (symbol) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-amber-300" />;
      case 'Scroll':
        return <Scroll className="w-5 h-5 text-amber-300" />;
      case 'DollarSign':
        return <DollarSign className="w-5 h-5 text-amber-300" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-amber-300" />;
      default:
        return <Shield className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section className="py-24 bg-[#06100c] text-stone-200 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Governança & Liderança
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            Gestão do Capítulo
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            A estrutura administrativa do Capítulo Tio Paulo Romeu Nº 922 combina a energia protagonista da juventude
            com a sabedoria e tutela vigilante do Conselho Consultivo Maçônico.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* Tab Controls for Hierarchy */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-[#091510] border border-[#d4af37]/30 shadow-lg">
            <button
              onClick={() => setActiveTab('executiva')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-cinzel font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'executiva'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#ba8a1c] text-[#08120e] shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Diretoria Executiva
            </button>
            <button
              onClick={() => setActiveTab('consultivo')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-cinzel font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'consultivo'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#ba8a1c] text-[#08120e] shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Conselho Consultivo Adulto
            </button>
            <button
              onClick={() => setActiveTab('oficiais')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-cinzel font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'oficiais'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#ba8a1c] text-[#08120e] shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Secretaria & Finanças
            </button>
          </div>
        </div>

        {/* Tier Presentation */}
        {activeTab === 'executiva' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {executiveOfficers.map((officer, idx) => (
              <div
                key={idx}
                className="bg-[#0b1c15] rounded-xl p-8 border border-stone-800 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Gold accent badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getSymbolIcon(officer.symbol)}
                  </div>
                  <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-amber-400/80 bg-[#081510] px-3 py-1 rounded border border-stone-800">
                    Liderança Jovem
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-cinzel font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                    {officer.role}
                  </h3>
                  <span className="text-xs text-[#d4af37] font-medium block">
                    {officer.term}
                  </span>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {officer.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                  <span className="font-mono">Capítulo Nº 922</span>
                  <span className="text-amber-300 font-cinzel text-[11px]">Cedro/CE</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'consultivo' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-in fade-in duration-300">
            {councilAdvisory.map((officer, idx) => (
              <div
                key={idx}
                className="bg-[#0b1c15] rounded-xl p-8 border border-stone-800 hover:border-emerald-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getSymbolIcon(officer.symbol)}
                  </div>
                  <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-emerald-400 bg-[#081510] px-3 py-1 rounded border border-stone-800">
                    Supervisão Maçônica
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-cinzel font-bold text-stone-100">
                    {officer.role}
                  </h3>
                  <span className="text-xs text-emerald-400 font-medium block">
                    {officer.term}
                  </span>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {officer.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-800/80 text-xs text-stone-400 flex justify-between">
                  <span>Tutela Legal & Moral</span>
                  <span className="text-emerald-300 font-cinzel">Maçonaria Regular</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'oficiais' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {administrativeOfficers.map((officer, idx) => (
              <div
                key={idx}
                className="bg-[#0b1c15] rounded-xl p-8 border border-stone-800 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getSymbolIcon(officer.symbol)}
                  </div>
                  <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-stone-400 bg-[#081510] px-3 py-1 rounded border border-stone-800">
                    Gestão Operacional
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-cinzel font-bold text-stone-100">
                    {officer.role}
                  </h3>
                  <span className="text-xs text-amber-300 font-medium block">
                    {officer.term}
                  </span>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {officer.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-800/80 text-xs text-stone-400 flex justify-between">
                  <span>Governança Interna</span>
                  <span className="text-amber-400 font-cinzel">Ordem DeMolay</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
