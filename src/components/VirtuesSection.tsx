import React, { useState } from 'react';
import { Heart, Sparkles, UserCheck, Users, ShieldAlert, Sun, Flag, Flame, Check } from 'lucide-react';
import { Virtue } from '../types';

export const VirtuesSection: React.FC = () => {
  const [selectedVirtueId, setSelectedVirtueId] = useState<number>(1);

  const virtues: Virtue[] = [
    {
      id: 1,
      name: 'Amor Filial',
      latinName: 'Amor Filialis',
      candleNumber: 1,
      summary: 'O amor sagrado entre pais e filhos, alicerce primeiro de toda conduta humana.',
      description:
        'Ensina o jovem a honrar seus pais e responsáveis em todos os momentos da existência. É o reconhecimento sincero dos sacrifícios feitos para sua educação, conforto e formação, cultivando gratidão eterna e obediência respeitosa no seio do lar.',
      practicalReflection:
        'Como praticamos: Expressar carinho diário, escutar os conselhos com humildade, colaborar ativamente nos deveres domésticos e ser o orgulho da família através de atitudes corretas.',
      iconName: 'Heart',
    },
    {
      id: 2,
      name: 'Reverência pelas Coisas Sagradas',
      latinName: 'Reverentia',
      candleNumber: 2,
      summary: 'O respeito incondicional pelas crenças e escolhas espirituais de cada indivíduo.',
      description:
        'A Ordem DeMolay acolhe jovens de todas as fés monoteístas com profundo respeito ecumênico. Ensina que todo homem deve manter comunhão sincera com o Criador e jamais ridicularizar ou menosprezar a fé alheia.',
      practicalReflection:
        'Como praticamos: Defender a liberdade religiosa, cultivar a própria vida espiritual com sinceridade e honrar os momentos sagrados com postura digna e reflexiva.',
      iconName: 'Sparkles',
    },
    {
      id: 3,
      name: 'Cortesia',
      latinName: 'Comitas',
      candleNumber: 3,
      summary: 'A gentileza nobre, educação e empatia praticadas em cada detalhe cotidiano.',
      description:
        'Mais do que mera etiqueta social, a cortesia DeMolay é a manifestação exterior de uma alma nobre. É a palavra gentil dita sem ostentação, o respeito aos mais velhos, o amparo aos mais frágeis e o tratamento fraterno a todos os seres.',
      practicalReflection:
        'Como praticamos: Cumprimentar a todos com sinceridade, praticar a escuta atenta, repudiar a arrogância e transformar a convivência diária em um ambiente de paz e consideração mútua.',
      iconName: 'UserCheck',
    },
    {
      id: 4,
      name: 'Companheirismo',
      latinName: 'Fraternitas',
      candleNumber: 4,
      summary: 'O laço fraternal indissolúvel que une os jovens em prol de ideais superiores.',
      description:
        'A fraternidade DeMolay é um vínculo que transcende o tempo e a distância. É saber que, em qualquer lugar do mundo, existe um irmão pronto a estender a mão, apoiar nos momentos de dor e celebrar com júbilo as vitórias.',
      practicalReflection:
        'Como praticamos: Manter a união no Capítulo, apoiar o irmão com dificuldades escolares ou pessoais e defender os companheiros com lealdade inabalável.',
      iconName: 'Users',
    },
    {
      id: 5,
      name: 'Fidelidade',
      latinName: 'Fidelitas',
      candleNumber: 5,
      summary: 'A lealdade irrestrita aos próprios valores, promessas e compromissos honrados.',
      description:
        'Inspirada no sacrifício histórico de Jacques DeMolay — que preferiu a morte na fogueira a trair seus amigos e juramentos —, esta virtude ensina que a palavra de um homem deve valer mais do que qualquer papel assinado.',
      practicalReflection:
        'Como praticamos: Cumprir os compromissos assumidos, ser leal aos amigos na sua ausência e jamais renunciar aos princípios éticos sob conveniências passageiras.',
      iconName: 'ShieldAlert',
    },
    {
      id: 6,
      name: 'Pureza',
      latinName: 'Castitas et Puritas',
      candleNumber: 6,
      summary: 'A integridade de pensamentos, retidão de palavras e nobreza de ações diárias.',
      description:
        'Exorta o jovem a manter seu corpo saudável, sua mente limpa de rancores e sua fala isenta de calúnias ou baixeza. É a busca permanente pela dignidade pessoal e pela moderação em todos os aspectos da vida.',
      practicalReflection:
        'Como praticamos: Preservar a saúde física e mental, rejeitar vícios e conversas degradantes, e manter a consciência tranquila como o bem mais precioso de um líder.',
      iconName: 'Sun',
    },
    {
      id: 7,
      name: 'Patriotismo',
      latinName: 'Patriotismus',
      candleNumber: 7,
      summary: 'O amor cívico à terra natal, respeito às leis e serviço dedicado à comunidade.',
      description:
        'Ser patriota na Ordem DeMolay significa ser um cidadão exemplar: consciente de seus deveres constitucionais, defensor das instituições democráticas e agente ativo do bem-estar social em sua própria cidade.',
      practicalReflection:
        'Como praticamos: Honrar os símbolos nacionais, estudar com empenho para contribuir com o país, e participar ativamente de melhorias concretas para o povo de Cedro.',
      iconName: 'Flag',
    },
  ];

  const getVirtueIcon = (name: string, className?: string) => {
    switch (name) {
      case 'Heart':
        return <Heart className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'UserCheck':
        return <UserCheck className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'Sun':
        return <Sun className={className} />;
      case 'Flag':
        return <Flag className={className} />;
      default:
        return <Flame className={className} />;
    }
  };

  const currentVirtue = virtues.find((v) => v.id === selectedVirtueId) || virtues[0];

  return (
    <section id="virtudes" className="py-24 bg-[#091510] text-stone-100 relative overflow-hidden border-b border-stone-800">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-cinzel font-semibold tracking-[0.28em] uppercase text-amber-400">
            Princípios Eternos & Imutáveis
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            As 7 Virtudes Cardeais
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            A estrutura do caráter DeMolay baseia-se em princípios eternos e inabaláveis, representados pelas
            sete velas sagradas acesas no altar de cada assembleia.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        {/* Interactive Altar / Candle Bar Navigation */}
        <div className="mb-12">
          <div className="bg-[#060e0a]/90 p-3 sm:p-4 rounded-2xl border border-[#d4af37]/25 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {virtues.map((virtue) => {
                const isSelected = virtue.id === selectedVirtueId;
                return (
                  <button
                    key={virtue.id}
                    onClick={() => setSelectedVirtueId(virtue.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#143325] to-[#0a1c14] border border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                        : 'bg-[#0a1611]/60 hover:bg-[#0e2119] border border-stone-800/80 hover:border-amber-400/40'
                    }`}
                  >
                    {/* Flame Indicator */}
                    <div className="relative mb-2">
                      <Flame
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isSelected
                            ? 'text-amber-300 fill-amber-400 scale-125 drop-shadow-[0_0_10px_rgba(250,204,21,0.9)] animate-pulse'
                            : 'text-stone-600 group-hover:text-amber-400 group-hover:scale-110'
                        }`}
                      />
                    </div>

                    <span className="text-[10px] font-cinzel font-bold text-amber-400/90 tracking-wider">
                      {virtue.id}ª Vela
                    </span>

                    <span
                      className={`text-xs font-cinzel font-bold mt-1 text-center line-clamp-1 transition-colors ${
                        isSelected ? 'text-stone-100 font-semibold' : 'text-stone-400 group-hover:text-stone-200'
                      }`}
                    >
                      {virtue.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Deep Dive of Selected Virtue */}
        <div className="bg-gradient-to-br from-[#0c1f17] to-[#07130e] rounded-2xl border border-[#d4af37]/35 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle watermark candle number */}
          <div
            aria-hidden="true"
            className="absolute -right-8 -bottom-12 select-none pointer-events-none text-[180px] sm:text-[220px] font-cinzel font-black text-amber-400/5"
          >
            0{currentVirtue.id}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Heraldic Icon & Latin Name */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-[#d4af37]/30 to-amber-300/10 border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.25)]">
                {getVirtueIcon(currentVirtue.iconName, 'w-10 h-10 text-amber-300')}
              </div>

              <div>
                <span className="text-xs font-cinzel tracking-widest uppercase text-amber-400 font-semibold">
                  Preceito {currentVirtue.id} · {currentVirtue.latinName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-stone-100 mt-1">
                  {currentVirtue.name}
                </h3>
              </div>

              <p className="text-amber-200/90 text-sm font-medium italic border-l-2 border-[#d4af37] pl-3 py-1">
                "{currentVirtue.summary}"
              </p>
            </div>

            {/* Right: Rich Explanation & Practical Application */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-cinzel tracking-wider uppercase text-stone-400 font-bold">
                  Significado Ritual & Moral
                </h4>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {currentVirtue.description}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#06100c]/80 border border-stone-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-cinzel font-bold tracking-wider uppercase">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>Aplicação Prática no Dia a Dia</span>
                </div>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {currentVirtue.practicalReflection}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
