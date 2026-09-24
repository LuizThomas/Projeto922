import React, { useState } from 'react';
import { HistoryEvent } from '../types';
import { Landmark, Award, Users, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { ChapterEmblem } from './ChapterEmblem';

export const HistoryTimeline: React.FC = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(0);

  const milestones: HistoryEvent[] = [
    {
      year: 'Ideal',
      dateStr: 'Marco de Fundação',
      title: 'A Semente da Ordem DeMolay em Cedro',
      tag: 'Fundação & Origem',
      description:
        'A aspiração fraterna de criar um Capítulo DeMolay no município de Cedro/CE nasceu do anseio de oferecer aos jovens um espaço de sólida formação moral, oratória e cidadania ativa sob a égide dos ideais maçônicos.',
      details:
        'Maçons dedicados reuniram-se com famílias e jovens para estruturar as bases éticas do futuro Capítulo, delineando sua vocação comunitária no sertão cearense.',
    },
    {
      year: 'Patrono',
      dateStr: 'Identidade Histórica',
      title: 'Tributo ao Tio Paulo Romeu Homem de Oliveira',
      tag: 'Patrono Honorário',
      description:
        'A escolha unânime do patrono eternizou a memória, generosidade e integridade do Tio Paulo Romeu Homem de Oliveira — figura exemplar que sempre defendeu a juventude como o maior patrimônio de uma nação.',
      details:
        'Seu retrato e seus ensinamentos ornam solenemente o brasão oficial do Capítulo Nº 922, inspirando cada irmão a honrar sua memória através do trabalho incansável pelo bem.',
    },
    {
      year: 'Nº 922',
      dateStr: 'Instalação Oficial',
      title: 'Instalação e Concessão da Carta Constitutiva',
      tag: 'Instalação Canônica',
      description:
        'Com a cerimônia solene de instalação, o Capítulo Nº 922 foi formalmente registrado perante as autoridades da Ordem DeMolay, iniciando seus trabalhos regulares no templo e na sociedade.',
      details:
        'Investidura dos primeiros oficiais, entrega dos paramentos ritualísticos e a consagração do altar com as 7 velas sagradas na presença de comitivas de toda a região.',
    },
    {
      year: 'Liderança',
      dateStr: 'Primeira Gestão',
      title: 'A Primeira Gestão & O Conselho Consultivo',
      tag: 'Governança Inicial',
      description:
        'Posse do primeiro Mestre Conselheiro eleito pelos jovens e a constituição do primeiro Conselho Consultivo adulto formado por Mestres Maçons responsáveis pela salvaguarda do Capítulo.',
      details:
        'Estruturação das comissões permanentes: ritualística, finanças, filantropia, esportes e comissão de comunicação.',
    },
    {
      year: 'Família',
      dateStr: 'Clube de Mães',
      title: 'Instalação do Clube de Mães e Amigos',
      tag: 'Apoio Familiar',
      description:
        'Compreendendo que a família é o esteio do jovem DeMolay, as mães e familiares organizaram-se em um clube fraterno de suporte contínuo às iniciativas assistenciais e eventos comemorativos.',
      details:
        'Participação ativa em jantares beneficentes, apoio ao vestuário cerimonial e caloroso acolhimento aos novos iniciados.',
    },
    {
      year: 'Presente',
      dateStr: 'Atividades Atuais',
      title: 'Atuação Contínua, Conquistas e Legado em Cedro',
      tag: 'Tempo Presente',
      description:
        'Hoje, o Capítulo Nº 922 mantém uma rotina vibrante de sessões, campanhas filantrópicas e formação de líderes que se destacam nas universidades, no mercado de trabalho e na liderança cívica.',
      details:
        'Parcerias com a sociedade civil de Cedro, participação destacada em eventos estaduais da Ordem DeMolay e constante aperfeiçoamento ritualístico.',
    },
  ];

  const current = milestones[selectedMilestoneIndex];

  return (
    <section id="historia" className="py-24 bg-[#081510] text-stone-200 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Tradição & Memória Documental
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            História do Nosso Capítulo
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Uma trajetória de honra, liderança e serviço à comunidade no município de Cedro/CE,
            construída pela dedicação de gerações de jovens e tios conselheiros.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* Interactive Timeline Rail */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center min-w-[700px] justify-between relative px-6">
            {/* Timeline Connecting Line */}
            <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-stone-800 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-6 h-0.5 bg-gradient-to-r from-amber-400 to-[#d4af37] -translate-y-1/2 z-0 transition-all duration-500"
              style={{
                width: `${(selectedMilestoneIndex / (milestones.length - 1)) * 100}%`,
              }}
            />

            {milestones.map((m, idx) => {
              const isSelected = idx === selectedMilestoneIndex;
              const isPast = idx <= selectedMilestoneIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedMilestoneIndex(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                  aria-label={`Ver marco ${m.title}`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-cinzel text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#d4af37] text-[#07130e] scale-125 shadow-[0_0_20px_rgba(212,175,55,0.6)] ring-4 ring-[#081510]'
                        : isPast
                        ? 'bg-[#0f2c1f] text-amber-300 border-2 border-[#d4af37]/60 group-hover:scale-110'
                        : 'bg-[#091510] text-stone-500 border-2 border-stone-800 group-hover:border-stone-600'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <span
                    className={`text-[11px] font-cinzel font-semibold mt-2 transition-colors ${
                      isSelected ? 'text-amber-300' : 'text-stone-400 group-hover:text-stone-300'
                    }`}
                  >
                    {m.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Narrative Spotlight Display */}
        <div className="bg-[#0b1c15] rounded-2xl border border-[#d4af37]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-xs font-cinzel font-bold text-amber-300 uppercase tracking-widest">
                  {current.tag}
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  {current.dateStr}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-100">
                {current.title}
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-lg bg-[#07130e]/70 border border-stone-800 text-xs sm:text-sm text-stone-300 leading-relaxed">
                <strong className="text-amber-300 font-cinzel block mb-1">
                  Registro Histórico:
                </strong>
                {current.details}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={selectedMilestoneIndex === 0}
                  onClick={() => setSelectedMilestoneIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-cinzel font-bold uppercase rounded border border-stone-700 hover:border-amber-400 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Anterior
                </button>
                <button
                  disabled={selectedMilestoneIndex === milestones.length - 1}
                  onClick={() => setSelectedMilestoneIndex((prev) => Math.min(milestones.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-cinzel font-bold uppercase rounded bg-[#d4af37] text-[#08120e] hover:bg-[#e4bf49] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1"
                >
                  <span>Próximo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Heraldic Seal of the Chapter */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#07130e]/90 rounded-xl border border-stone-800/80">
              <ChapterEmblem size="lg" className="mb-4" />
              <div className="text-center space-y-1">
                <h4 className="font-cinzel text-sm font-bold text-amber-300">
                  Capítulo Nº 922
                </h4>
                <p className="text-xs text-stone-400">
                  Cedro · Ceará · Brasil
                </p>
                <p className="text-[11px] text-stone-500 font-mono pt-2">
                  Registro Regular DeMolay Internacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
