import React, { useState } from 'react';
import officialEmblemImg from '../assets/images/emblema_oficial_1790267045327.jpg';

interface ChapterEmblemProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
}

const sizeMap = {
  xs: 'w-8 h-8',
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
  hero: 'w-60 h-60 sm:w-76 sm:h-76 lg:w-92 lg:h-92',
};

export const ChapterEmblem: React.FC<ChapterEmblemProps> = ({
  className = '',
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);
  const sizeClass = sizeMap[size];

  return (
    <div className={`relative select-none inline-flex items-center justify-center shrink-0 ${sizeClass} ${className}`}>
      {!imageError ? (
        <img
          src={officialEmblemImg}
          alt="Brasão Oficial do Capítulo Tio Paulo Romeu Homem de Oliveira Nº 922"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:scale-[1.03]"
        />
      ) : (
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-[1.02]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Brasão do Capítulo Tio Paulo Romeu Homem de Oliveira Nº 922"
        >
          <defs>
            <linearGradient id="goldBezel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fae6a6" />
              <stop offset="25%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#966d18" />
              <stop offset="75%" stopColor="#d8b449" />
              <stop offset="100%" stopColor="#815712" />
            </linearGradient>
            <linearGradient id="shieldGreen" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#175038" />
              <stop offset="50%" stopColor="#0d3524" />
              <stop offset="100%" stopColor="#061d13" />
            </linearGradient>
            <path
              id="textPathLower"
              d="M 55,200 A 145,145 0 0,0 345,200"
            />
          </defs>
          <circle cx="200" cy="200" r="192" fill="url(#goldBezel)" stroke="#fff2bf" strokeWidth="2.5" />
          <circle cx="200" cy="200" r="176" fill="#081711" stroke="#d4af37" strokeWidth="4" />
          <path
            d="M 92,100 L 308,100 L 308,210 C 308,275 200,325 200,325 C 200,325 92,275 92,210 Z"
            fill="url(#shieldGreen)"
            stroke="url(#goldBezel)"
            strokeWidth="7"
          />
          <text className="font-cinzel text-[14px] font-bold tracking-[0.2em] fill-[#faeab5]">
            <textPath href="#textPathLower" startOffset="50%" textAnchor="middle">
              CAPÍTULO TIO PAULO ROMEU HOMEM DE OLIVEIRA N.º 922
            </textPath>
          </text>
        </svg>
      )}
    </div>
  );
};

