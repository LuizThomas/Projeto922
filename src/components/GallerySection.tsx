import React, { useState, useEffect, useCallback } from 'react';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

import heroCeremonyImg from '../assets/images/hero_demolay_ceremony_1790266113275.jpg';
import youthMeetingImg from '../assets/images/youth_leadership_meeting_1790266125428.jpg';
import communityImg from '../assets/images/community_charity_action_1790266139218.jpg';
import parentsImg from '../assets/images/parents_and_mentors_session_1790266150564.jpg';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'item-1',
      title: 'Sessão Magna Ritualística no Templo',
      category: 'cerimonia',
      categoryLabel: 'Cerimônia & Ritualística',
      description:
        'Trabalhos ritualísticos solenes com a presença dos oficiais em seus respectivos postos e as sete velas acesas no altar central.',
      imageUrl: heroCeremonyImg,
    },
    {
      id: 'item-2',
      title: 'Assembleia Jovem e Planejamento Estratégico',
      category: 'lideranca',
      categoryLabel: 'Liderança & Reuniões',
      description:
        'Jovens do Capítulo Nº 922 debatendo planos de gestão, comissões de trabalho e oratória formal sob regras parlamentares.',
      imageUrl: youthMeetingImg,
    },
    {
      id: 'item-3',
      title: 'Ação Filantrópica de Arrecadação de Alimentos',
      category: 'social',
      categoryLabel: 'Ação Comunitária',
      description:
        'Mobilização solidária em prol de famílias assistidas no município de Cedro/CE, unindo voluntariado e fraternidade ativa.',
      imageUrl: communityImg,
    },
    {
      id: 'item-4',
      title: 'Cerimônia de Homenagem aos Pais e Mães',
      category: 'familia',
      categoryLabel: 'Família & Eventos',
      description:
        'Sessão pública emocionante celebrando a gratidão eterna aos pais e o apoio inestimável do Clube de Mães ao Capítulo.',
      imageUrl: parentsImg,
    },
  ];

  const filteredItems =
    activeCategory === 'todos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="galeria" className="py-24 bg-[#081510] text-stone-200 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Registros Visuais & Memória Viva
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            Galeria de Momentos
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Fotografias oficiais de eventos, reuniões, ações sociais e momentos marcantes do Capítulo
            Tio Paulo Romeu Homem de Oliveira Nº 922.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-[#06100c] border border-stone-800 rounded-lg">
            {[
              { id: 'todos', label: 'Todas as Fotos' },
              { id: 'cerimonia', label: 'Cerimônias' },
              { id: 'lideranca', label: 'Liderança' },
              { id: 'social', label: 'Filantropia' },
              { id: 'familia', label: 'Família' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-cinzel font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#d4af37] text-[#08120e] font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-xl overflow-hidden border border-stone-800 hover:border-[#d4af37]/70 cursor-pointer shadow-xl transition-all duration-500 bg-[#0b1c15] flex flex-col justify-end min-h-[340px] sm:min-h-[400px]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06100c] via-[#06100c]/40 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />

              <div className="relative z-10 p-6 sm:p-8 space-y-2">
                <span className="text-[11px] font-cinzel uppercase tracking-widest text-amber-300 font-bold block">
                  {item.categoryLabel}
                </span>
                <h3 className="text-xl font-cinzel font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 flex items-center gap-2 text-xs text-amber-400 font-cinzel font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Clique para ampliar foto</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700 hover:border-amber-400 transition-colors z-50 focus:outline-none"
            aria-label="Fechar visualizador"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation previous */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700 hover:border-amber-400 transition-colors z-50 focus:outline-none"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation next */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700 hover:border-amber-400 transition-colors z-50 focus:outline-none"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Expanded Card */}
          <div className="max-w-4xl w-full bg-[#091510] rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl flex flex-col">
            <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-[#091510] border-t border-stone-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-cinzel text-amber-400 uppercase tracking-widest font-bold">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {lightboxIndex + 1} de {filteredItems.length}
                </span>
              </div>
              <h3 className="text-xl font-cinzel font-bold text-stone-100">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
