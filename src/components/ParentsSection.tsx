import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, GraduationCap, CheckCircle } from 'lucide-react';
import parentsImg from '../assets/images/parents_and_mentors_session_1790266150564.jpg';

interface ParentsSectionProps {
  onContactAdvisory: () => void;
}

export const ParentsSection: React.FC<ParentsSectionProps> = ({ onContactAdvisory }) => {
  return (
    <section className="py-24 bg-[#06100c] text-stone-200 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Documentary Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl group">
              <img
                src={parentsImg}
                alt="Pais e mães participando com orgulho de cerimônia do Capítulo"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06100c] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#081510]/90 backdrop-blur-md border border-stone-800">
                <div className="flex items-center gap-2 text-amber-300 font-cinzel text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Ambiente Seguro & Supervisionado</span>
                </div>
                <p className="text-[11px] text-stone-400 mt-1">
                  100% das reuniões e viagens ocorrem sob a presença vigilante de adultos conselheiros.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Message for Parents */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
                Transparência & Confiança
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
                Espaço dedicado aos Pais
              </h2>
            </div>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              A Ordem DeMolay preza pela transparência absoluta. Todas as nossas atividades são rigorosamente
              supervisionadas por uma diretoria de adultos (o <strong>Conselho Consultivo composto por Maçons</strong>).
              Pais, mães e responsáveis são sempre encorajados a estarem presentes em nossas sessões públicas,
              cerimônias comemorativas e atividades festivas.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-100">
                    A Escola e os Estudos são Prioridade Máxima
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                    Nenhum jovem pode descuidar de seus deveres escolares. Exigimos bom rendimento escolar e estimulamos
                    disciplina, leitura e dedicação ao aprendizado contínuo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-100">
                    Fortalecimento dos Laços Familiares
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                    O primeiro preceito ensinado em nossas assembleias é o Amor Filial. O objetivo da Ordem é devolver ao lar
                    filhos mais atenciosos, respeitosos e gratos aos seus genitores.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Eye className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-100">
                    Portas Abertas ao Diálogo com o Conselho
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                    Nossos tios conselheiros estão à inteira disposição para conversar com os pais, tirar dúvidas sobre o
                    desenvolvimento do jovem e recebê-los em nossas reuniões abertas.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onContactAdvisory}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-cinzel font-bold uppercase tracking-wider text-amber-300 bg-[#0d261b] hover:bg-[#123626] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all"
              >
                <span>Falar com o Conselho Consultivo</span>
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
