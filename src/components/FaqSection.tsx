import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs: FaqItem[] = [
    {
      question: 'Qual a idade ideal para ingressar na Ordem DeMolay?',
      answer:
        'A Ordem DeMolay recebe jovens do sexo masculino com idades entre 12 e 21 anos incompletos. A faixa etária foi pensada para acompanhar o período crucial de formação moral, desenvolvimento acadêmico e transição para a maturidade cívica.',
    },
    {
      question: 'Precisa ser filho de Maçom para entrar no Capítulo?',
      answer:
        'Não. Não é necessário ter qualquer parentesco com maçons. Qualquer jovem de boa índole, que respeite seus pais e atenda aos requisitos de integridade moral e escolar, pode ser indicado por um membro ou manifestar interesse para ingressar no Capítulo Nº 922.',
    },
    {
      question: 'A Ordem DeMolay é uma religião ou seita?',
      answer:
        'Não. A Ordem DeMolay não é uma religião, não possui dogmas confessionais nem substitui os deveres espirituais de ninguém. Exige-se apenas a crença em um Ser Supremo (Deus) e a prática da tolerância religiosa universal, acolhendo jovens católicos, evangélicos, espíritas e de todas as crenças monoteístas.',
    },
    {
      question: 'Quais são os custos e taxas envolvidos?',
      answer:
        'A Ordem DeMolay é uma entidade sem fins lucrativos. Existem taxas estatuárias de filiação regular ao Supremo Conselho, manutenção básica do Capítulo e o investimento pessoal na capa cerimonial e vestuário formal. O Capítulo preza pela total transparência financeira com os pais.',
    },
    {
      question: 'Como e quando ocorrem as reuniões do Capítulo em Cedro?',
      answer:
        'As reuniões ordinárias ocorrem de forma presencial e periódica em templo maçônico sede em Cedro/CE, sempre aos finais de semana e com horários fixos para não interferir na rotina de estudos e descanso da família. Todas as sessões contam obrigatoriamente com a supervisão de tios Maçons do Conselho Consultivo.',
    },
    {
      question: 'Como os pais e mães podem acompanhar as atividades?',
      answer:
        'A presença da família é um dos maiores pilares do Capítulo. As mães participam ativamente do Clube de Mães e Amigos, e os pais são sempre bem-vindos em sessões públicas (como a Cerimônia das Flores, homenagens de Dia das Mães e Dia dos Pais, instalações de diretoria e jantares de integração).',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#06100c] text-stone-200 relative overflow-hidden border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Esclarecimentos Institucionais
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            Dúvidas Frequentes
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Perguntas comuns sobre ingresso, funcionamento, supervisão e rotina no Capítulo Nº 922.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2" />
        </div>

        {/* Quick Search Bar */}
        <div className="mb-10 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar dúvida ou assunto..."
            className="w-full py-3.5 pl-12 pr-4 rounded-xl bg-[#091510] border border-stone-800 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
          />
          <Search className="w-5 h-5 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0b1c15] rounded-xl border border-stone-800/90 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-cinzel text-base sm:text-lg font-bold text-stone-100 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#081510] border border-stone-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 border-amber-400 text-amber-300' : 'text-stone-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-stone-500 space-y-2">
              <HelpCircle className="w-8 h-8 mx-auto text-stone-600" />
              <p>Nenhuma dúvida encontrada para a busca informada.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
