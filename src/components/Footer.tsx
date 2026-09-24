import React from 'react';
import { ChapterEmblem } from './ChapterEmblem';
import { ArrowUp, Instagram, MessageCircle, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040906] text-stone-400 border-t border-stone-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Fine gold border line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/60">
          {/* Col 1: Brand & Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <ChapterEmblem size="sm" />
              <div>
                <span className="font-cinzel text-lg font-bold text-stone-100 block">
                  Capítulo Tio Paulo Romeu
                </span>
                <span className="text-[11px] font-cinzel text-amber-400 uppercase tracking-widest block font-semibold">
                  Homem de Oliveira Nº 922 · Cedro/CE
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Instituição fraternal dedicada à formação de liderança moral, cidadania ativa e amparo
              comunitário para jovens de 12 a 21 anos incompletos. Sob os auspícios da Ordem DeMolay.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/5588999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0b1c15] border border-stone-800 hover:border-amber-400 text-stone-300 hover:text-amber-300 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/demolaycedro_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0b1c15] border border-stone-800 hover:border-amber-400 text-stone-300 hover:text-amber-300 flex items-center justify-center transition-colors"
                aria-label="Instagram Oficial (@demolaycedro_)"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-amber-300 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-300 transition-colors">
                  O que é a DeMolay?
                </a>
              </li>
              <li>
                <a href="#virtudes" className="hover:text-amber-300 transition-colors">
                  As 7 Virtudes Cardeais
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-amber-300 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-amber-300 transition-colors">
                  História & Gestão
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-amber-300 transition-colors">
                  Projetos & Clube de Mães
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-300 transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Notice */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wider">
              Garantia Institucional
            </h4>
            <div className="p-4 rounded-xl bg-[#08120e] border border-stone-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <Shield className="w-4 h-4 shrink-0" />
                <span>Supervisão por Mestres Maçons</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Todas as atividades, finanças, viagens e assembleias do Capítulo são legal e moralmente
                assistidas pelo Conselho Consultivo adulto.
              </p>
            </div>
            <p className="text-[11px] text-stone-500">
              Cedro, Ceará · Brasil
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Capítulo Tio Paulo Romeu Homem de Oliveira Nº 922. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-cinzel tracking-wider text-stone-400 uppercase text-[10px]">
              Tradição, Liderança & Desenvolvimento Juvenil
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#0b1c15] border border-stone-800 text-stone-400 hover:text-amber-300 hover:border-amber-400 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
