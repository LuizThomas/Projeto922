import React from 'react';
import { MessageCircle, Instagram, MapPin, Mail, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';
import { ChapterEmblem } from './ChapterEmblem';

interface ContactSectionProps {
  onOpenInterestModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenInterestModal,
}) => {
  const whatsappUrl = 'https://wa.me/5588999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Cap%C3%ADtulo%20Tio%20Paulo%20Romeu%20Homem%20de%20Oliveira%20N%C2%BA%20922%20da%20Ordem%20DeMolay.';
  const instagramUrl = 'https://instagram.com/demolaycedro_';

  return (
    <section id="contato" className="py-24 bg-[#050d09] text-stone-200 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0c2219] via-[#091812] to-[#07130e] rounded-3xl border border-[#d4af37]/35 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle 922 watermark */}
          <div
            aria-hidden="true"
            className="absolute -right-10 -bottom-16 select-none pointer-events-none text-[220px] font-cinzel font-black text-amber-400/5"
          >
            922
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-cinzel font-semibold uppercase tracking-widest text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Capítulo Nº 922 · Cedro / CE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight [text-wrap:balance]">
                Inicie sua Jornada de Liderança e Honra
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Junte-se à maior irmandade juvenil do mundo. Converse diretamente com nossa diretoria
                ou com os conselheiros adultos para conhecer nossas assembleias e projetos em Cedro/CE.
              </p>

              {/* Action Buttons from prototype */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-cinzel font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-200" />
                  <span>Falar no WhatsApp Oficial</span>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-cinzel font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:opacity-95 shadow-lg transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram Oficial (@demolaycedro_)</span>
                </a>
              </div>

              {/* Direct modal trigger */}
              <div className="pt-2">
                <button
                  onClick={onOpenInterestModal}
                  className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold tracking-wider text-amber-400 hover:text-amber-300 transition-colors uppercase border-b border-amber-400/40 hover:border-amber-300 pb-0.5"
                >
                  <span>Ou preencha a manifestação de interesse online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Institutional Contacts & Location Card */}
            <div className="lg:col-span-5 bg-[#06100c]/90 p-8 rounded-2xl border border-stone-800 space-y-6">
              <div className="flex items-center gap-4">
                <ChapterEmblem size="sm" />
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-stone-100">
                    Capítulo Tio Paulo Romeu
                  </h4>
                  <p className="text-xs text-amber-400/90 font-cinzel">
                    Homem de Oliveira Nº 922
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-200 font-cinzel">Sede dos Trabalhos:</strong>
                    <span>Templo Maçônico Cedrense · Cedro, Ceará · Brasil</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-200 font-cinzel">Contato Oficial:</strong>
                    <span>Comissão de Relações e Conselho Consultivo</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-200 font-cinzel">Correspondência:</strong>
                    <span>capitulo922demolay@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800/80 text-[11px] text-stone-400 leading-relaxed">
                Reuniões regulares periódicas aos finais de semana com supervisão presencial contínua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
