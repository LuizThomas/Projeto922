import React from 'react';
import { ArrowDown, Compass, Shield, Sparkles } from 'lucide-react';
import { ChapterEmblem } from './ChapterEmblem';
import heroCeremonyImg from '../assets/images/hero_demolay_ceremony_1790266113275.jpg';

interface HeroProps {
  onOpenInterestModal: () => void;
  onExploreVirtues: () => void;
  onHowToJoin: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInterestModal,
  onHowToJoin,
}) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-32">
      {/* Background Photography with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCeremonyImg}
          alt="Cerimônia solene e histórica da Ordem DeMolay"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] contrast-[1.12]"
        />
        {/* Layered gradients: deep green vignette and dark edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110d] via-[#07110d]/85 to-[#050a08]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07110d]/60 to-[#07110d]" />
      </div>

      {/* Giant Typographic 922 in background */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-[1] opacity-[0.06] text-[28vw] font-cinzel font-black tracking-tighter text-amber-200"
      >
        922
      </div>

      {/* Fine Geometric Gold Grid Lines */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-20 bg-[linear-gradient(to_right,#d4af3715_1px,transparent_1px),linear-gradient(to_bottom,#d4af3715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Editorial Column */}
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-6">
            {/* Kicker badge */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.24em] uppercase text-amber-300 font-cinzel">
              <span className="w-2.5 h-2.5 bg-amber-400 rotate-45 inline-block shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
              <span>ORDEM DEMOLAY · CAPÍTULO Nº 922 · CEDRO, CEARÁ</span>
            </div>

            {/* Imposing Headline with text-wrap: balance */}
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-stone-100 leading-[1.08] [text-wrap:balance]">
              SEU CAMINHO <br />
              <span className="text-gold-gradient drop-shadow-md">
                COMEÇA AQUI.
              </span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-2 max-w-2xl">
              <p className="font-cinzel text-lg sm:text-xl md:text-2xl text-stone-300 font-medium tracking-wide">
                Capítulo Tio Paulo Romeu Homem de Oliveira Nº 922
              </p>
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                Formando líderes éticos, cidadãos conscientes e homens de valor através de princípios
                inabaláveis, fraternidade genuína e filantropia ativa no sertão central cearense.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenInterestModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase font-cinzel text-[#09110d] bg-gradient-to-r from-[#fae6a6] via-[#d4af37] to-[#ba8a1c] hover:from-[#fff2c7] hover:to-[#d8a72e] rounded-md shadow-[0_4px_24px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <Sparkles className="w-4 h-4 text-[#09110d]" />
                <span>Quero Conhecer</span>
              </button>

              <button
                onClick={onHowToJoin}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase font-cinzel text-amber-200 bg-[#091712]/90 hover:bg-[#0f271f] border border-[#d4af37]/40 hover:border-[#d4af37] rounded-md shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Como Entrar?</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div className="space-y-0.5">
                <span className="text-xl font-cinzel font-bold text-amber-300 tabular-nums">+10 anos</span>
                <p className="text-[11px] text-stone-400 font-medium">de Fundação</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-xl font-cinzel font-bold text-amber-300 tabular-nums">Nº 922</span>
                <p className="text-[11px] text-stone-400 font-medium">Capítulo Nacional</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-xl font-cinzel font-bold text-amber-300">Cedro/CE</span>
                <p className="text-[11px] text-stone-400 font-medium">Sede & Atuação</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-xl font-cinzel font-bold text-amber-300">100%</span>
                <p className="text-[11px] text-stone-400 font-medium">Desenvolvimento Profissional</p>
              </div>
            </div>
          </div>

          {/* Heraldic Visual Column */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            {/* Subtle luminous halo */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative group p-4">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/20 via-emerald-500/10 to-amber-400/20 blur-md opacity-70 group-hover:opacity-100 transition duration-700" />
              
              <div className="relative flex flex-col items-center">
                <ChapterEmblem size="hero" className="filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]" />
                
                <div className="mt-4 px-4 py-1.5 rounded-full bg-[#0a1813]/80 border border-[#d4af37]/30 text-[11px] tracking-widest font-cinzel text-amber-300 uppercase shadow-lg flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>Brasão do Capítulo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-stone-400 hover:text-amber-300 transition-colors focus:outline-none"
            aria-label="Rolar para a próxima seção"
          >
            <span className="text-[10px] tracking-widest uppercase font-cinzel">Explore o Capítulo</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
