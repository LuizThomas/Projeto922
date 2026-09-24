/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { VirtuesSection } from './components/VirtuesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { HistoryTimeline } from './components/HistoryTimeline';
import { LeadershipSection } from './components/LeadershipSection';
import { ProjectsAndMothersClub } from './components/ProjectsAndMothersClub';
import { ParentsSection } from './components/ParentsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { GallerySection } from './components/GallerySection';
import { JoinProcessSection } from './components/JoinProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InterestModal } from './components/InterestModal';

export default function App() {
  const [interestModalOpen, setInterestModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07100c] text-stone-100 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-amber-200">
      {/* Top Navigation */}
      <Navbar onOpenInterestModal={() => setInterestModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenInterestModal={() => setInterestModalOpen(true)}
          onExploreVirtues={() => scrollToSection('virtudes')}
          onHowToJoin={() => scrollToSection('como-entrar')}
        />

        {/* 2. O que é a DeMolay? */}
        <AboutSection />

        {/* 3. O que você desenvolve? (6 Pilares) */}
        <PillarsSection />

        {/* 4. As 7 Virtudes Cardeais (Interativo) */}
        <VirtuesSection />

        {/* 5. Como Funciona? */}
        <HowItWorksSection onLearnMore={() => scrollToSection('faq')} />

        {/* 6. História do Nosso Capítulo (Timeline Documental) */}
        <HistoryTimeline />

        {/* 7. Gestão do Capítulo (Hierarquia Visual) */}
        <LeadershipSection />

        {/* 8. Projetos Sociais & Clube de Mães */}
        <ProjectsAndMothersClub />

        {/* 9. Espaço dedicado aos Pais */}
        <ParentsSection onContactAdvisory={() => setInterestModalOpen(true)} />

        {/* 10. Parede de Conquistas */}
        <AchievementsSection />

        {/* 11. Galeria de Momentos */}
        <GallerySection />

        {/* 12. Como Entrar / Ingresso */}
        <JoinProcessSection onOpenInterestModal={() => setInterestModalOpen(true)} />

        {/* 13. Dúvidas Frequentes */}
        <FaqSection />

        {/* 14. Inicie sua Jornada / Contato */}
        <ContactSection onOpenInterestModal={() => setInterestModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal */}
      <InterestModal
        isOpen={interestModalOpen}
        onClose={() => setInterestModalOpen(false)}
      />
    </div>
  );
}
