import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ChapterEmblem } from './ChapterEmblem';

interface NavbarProps {
  onOpenInterestModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterestModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O que é?', href: '#sobre' },
    { label: 'Virtudes', href: '#virtudes' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'História & Gestão', href: '#historia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09110d]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_8px_32px_rgba(0,0,0,0.65)] py-3'
          : 'bg-gradient-to-b from-[#060c09]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Zone */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            aria-label="Capítulo Tio Paulo Romeu Homem de Oliveira Nº 922"
          >
            <ChapterEmblem size="sm" className="transition-transform group-hover:scale-105 duration-300" />
            <div className="flex flex-col">
              <span className="font-cinzel text-sm sm:text-base md:text-lg font-bold tracking-wider text-stone-100 group-hover:text-amber-300 transition-colors whitespace-nowrap">
                Capítulo Tio Paulo Romeu
              </span>
              <span className="text-[10px] tracking-widest text-[#d4af37] font-semibold uppercase font-cinzel">
                Ordem DeMolay · Nº 922
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-amber-300 transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenInterestModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase font-cinzel text-[#09110d] bg-gradient-to-r from-[#fae6a6] via-[#d4af37] to-[#c59a2a] hover:from-[#fff0bd] hover:to-[#dfaf35] rounded-md shadow-md transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 active:scale-95"
            >
              <span>Quero Conhecer</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09110d]/98 border-b border-[#d4af37]/30 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2.5 rounded-md text-base font-medium text-stone-200 hover:text-amber-300 hover:bg-stone-800/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterestModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold tracking-wider uppercase font-cinzel text-[#09110d] bg-gradient-to-r from-[#fae6a6] via-[#d4af37] to-[#c59a2a] shadow-md"
            >
              <span>Quero Conhecer o Capítulo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
