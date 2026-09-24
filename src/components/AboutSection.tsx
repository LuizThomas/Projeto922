import React from 'react';
import { Award, Users, HeartHandshake, Compass, CheckCircle2 } from 'lucide-react';
import { ChapterEmblem } from './ChapterEmblem';
import youthMeetingImg from '../assets/images/youth_leadership_meeting_1790266125428.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 bg-[#08120e] text-stone-200 border-t border-b border-stone-800/80 overflow-hidden">
      {/* Subtle background ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Fundamentos & Propósito
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            O que é a DeMolay?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-2" />
        </div>

        {/* Editorial Presentation: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Documentary Narrative & Core Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-stone-300 text-base sm:text-lg leading-relaxed first-letter:text-5xl first-letter:font-cinzel first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-amber-300 first-letter:leading-none">
                A Ordem DeMolay é a maior organização juvenil voltada à formação de caráter e liderança do mundo.
                Patrocinada pela Maçonaria e estruturada sob valores universais, ela foi concebida para unir jovens
                e integrá-los à vida social ativa com retidão moral, estimulando o companheirismo prático, a caridade exemplar
                e os fundamentos da boa governança.
              </p>
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                Presente com excelência no município de <strong>Cedro, Ceará</strong> através do <strong>Capítulo Nº 922</strong>,
                a instituição oferece aos jovens entre 12 e 21 anos um ambiente saudável de amadurecimento cívico, debate reflexivo
                e protagonismo real, preparando cada membro para os grandes desafios do século XXI.
              </p>
            </div>

            {/* 2 Big Feature Highlights from Prototype */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-lg bg-[#0e2119]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-lg font-cinzel font-bold text-stone-100 mb-2">
                  Liderança Prática
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Oportunidade real de atuar como gestor de projetos, liderar comissões, gerir orçamentos
                  e conduzir assembleias com rigor e diplomacia.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#0e2119]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-lg group">
                <div className="w-12 h-12 rounded-md bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-lg font-cinzel font-bold text-stone-100 mb-2">
                  Filantropia Real
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Serviço ativo e desinteressado para transformar a realidade da cidade de Cedro,
                  mobilizando recursos e amparando famílias necessitadas.
                </p>
              </div>
            </div>

            {/* Key Commitments Checklist */}
            <div className="pt-2 border-t border-stone-800/80 space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Supervisão contínua por Conselho Consultivo composto por Maçons regulares</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Total incentivo ao desempenho escolar, amor à família e integridade moral</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Espaço acolhedor e transparente aberto à participação de pais e mães</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composite with Documentary Photography & Crest */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
              <img
                src={youthMeetingImg}
                alt="Jovens do Capítulo em momento de planejamento e liderança"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08120e] via-[#08120e]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                <span className="text-[11px] font-cinzel uppercase tracking-widest text-amber-300">
                  Formação de Liderança
                </span>
                <p className="text-stone-200 text-sm font-medium">
                  Assembleias deliberativas, oratória e trabalho em equipe estruturado.
                </p>
              </div>
            </div>

            {/* Inset Chapter Tribute Note */}
            <div className="p-5 rounded-lg bg-[#0c1c15] border border-stone-800 flex items-start gap-4">
              <ChapterEmblem size="sm" className="shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Patrono Tio Paulo Romeu Homem de Oliveira
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  O patrono que dá nome ao nosso Capítulo simboliza a dedicação fraterna, sabedoria e apoio incansável
                  à mocidade. Seu legado inspira cada cerimônia e ação comunitária realizada em Cedro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
