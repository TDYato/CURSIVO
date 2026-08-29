import React from 'react';

// Logo Mundo Cursivo
export const LogoImage: React.FC<{ className?: string }> = ({ className = "h-16" }) => (
  <div className={`flex items-center space-x-2 select-none ${className}`}>
    <div className="relative flex items-center">
      {/* Decorative cloud background */}
      <svg viewBox="0 0 280 90" className="h-full w-auto max-w-[220px] md:max-w-[260px] filter drop-shadow-sm">
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f9ff" />
          </linearGradient>
          <linearGradient id="pencilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        
        {/* Cloud background */}
        <path d="M 25,60 C 10,60 0,48 5,35 C 10,22 25,20 35,25 C 45,10 70,5 90,20 C 105,8 135,10 145,25 C 160,12 190,15 200,30 C 215,25 235,35 230,50 C 235,65 220,75 200,72 C 180,75 40,75 25,60 Z" fill="url(#cloudGrad)" stroke="#e0f2fe" strokeWidth="2" />
        
        {/* Sparkles */}
        <path d="M 12 22 L 15 15 L 22 12 L 15 9 L 12 2 L 9 9 L 2 12 L 9 15 Z" fill="#f59e0b" transform="scale(0.5) translate(20, 10)" />
        <path d="M 12 22 L 15 15 L 22 12 L 15 9 L 12 2 L 9 9 L 2 12 L 9 15 Z" fill="#3b82f6" transform="scale(0.4) translate(480, 20)" />

        {/* Text MUNDO in colorful 3D bubbly font */}
        <g textAnchor="middle" fontWeight="900" fontSize="28" fontFamily="Montserrat, sans-serif">
          {/* M */}
          <text x="35" y="45" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5">M</text>
          {/* U */}
          <text x="58" y="43" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5">u</text>
          {/* N */}
          <text x="80" y="45" fill="#4ade80" stroke="#16a34a" strokeWidth="1.5">n</text>
          {/* D */}
          <text x="103" y="44" fill="#f472b6" stroke="#db2777" strokeWidth="1.5">d</text>
          {/* O */}
          <text x="126" y="45" fill="#a78bfa" stroke="#7c3aed" strokeWidth="1.5">o</text>
        </g>
        
        {/* Cute Pencil Graphic */}
        <g transform="translate(142, 18) rotate(25)">
          <rect x="0" y="0" width="30" height="10" rx="2" fill="url(#pencilGrad)" />
          <polygon points="30,0 38,5 30,10" fill="#fde047" />
          <polygon points="35,3 38,5 35,7" fill="#475569" />
          <rect x="-6" y="0" width="6" height="10" fill="#f43f5e" rx="1" />
          <rect x="-2" y="0" width="2" height="10" fill="#cbd5e1" />
        </g>

        {/* Cursivo Script Subtitle */}
        <text x="120" y="66" textAnchor="middle" fill="#0284c7" fontStyle="italic" fontWeight="800" fontSize="22" fontFamily="cursive, Montserrat, sans-serif">
          Cursivo
        </text>
      </svg>
    </div>
  </div>
);

// Hero Illustration: Boy jumping with pencil + backpack
export const HeroBoyIllustration: React.FC = () => (
  <div className="relative w-full max-w-none mx-auto flex justify-center items-center h-full">
    {/* Circular background glow (Desktop) */}
    <div className="hidden md:block absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-sky-200 via-sky-100 to-amber-100 -z-10 blur-xl opacity-80" />
    
    {/* Stamp Badge Top Left "Projeto Study" - Elemento 1 */}
    <div className="absolute top-2 -left-[16px] md:-left-[8px] z-20 transform -rotate-12">
      <img
        src="https://i.postimg.cc/BZLXR9Jr/ELEMENTO1.webp"
        alt="Elemento 1"
        className="w-auto h-auto max-w-[150px] sm:max-w-[185px] md:max-w-[235px] drop-shadow-md object-contain"
        referrerPolicy="no-referrer"
      />
    </div>

    {/* Floating Badge 1 (Bottom Left) - Elemento 2 */}
    <div className="absolute bottom-2 left-1 md:bottom-6 md:left-2 z-20 transform -rotate-3">
      <img
        src="https://i.postimg.cc/DycFMB4t/ELEMENTO2.png"
        alt="Elemento 2"
        className="w-auto h-auto max-w-[185px] sm:max-w-[220px] md:max-w-[290px] drop-shadow-md object-contain"
        referrerPolicy="no-referrer"
      />
    </div>

    {/* Floating Badge 2 (Middle Right) - Elemento 3 */}
    <div className="absolute top-[calc(50%+25px)] -translate-y-1/2 right-1 md:right-0 z-20 transform rotate-3">
      <img
        src="https://i.postimg.cc/RhMp6QCj/ELEMENTO3.png"
        alt="Elemento 3"
        className="w-auto h-auto max-w-[185px] sm:max-w-[220px] md:max-w-[290px] drop-shadow-md object-contain"
        referrerPolicy="no-referrer"
      />
    </div>

    {/* Main Illustration Boy Image - Mobile (Full Width Edge-to-Edge) */}
    <img
      src="https://i.postimg.cc/c4KstQCN/P1-MOBILE.webp"
      alt="Menino feliz com lápis - Kit Mundo Cursivo"
      className="w-full h-auto block md:hidden"
      referrerPolicy="no-referrer"
    />

    {/* Main Illustration Boy Image - Desktop */}
    <img
      src="https://i.postimg.cc/VvbWPNrw/BACKGROUND.webp"
      alt="Menino feliz com lápis - Kit Mundo Cursivo"
      className="w-full h-auto md:w-full md:h-full md:max-w-none max-w-md object-contain object-center mx-auto drop-shadow-xl z-10 rounded-2xl hidden md:block"
      referrerPolicy="no-referrer"
    />
  </div>
);

// Mother & Child Homework Stress Illustration (Header of Signals section)
export const MotherChildStressIllustration: React.FC = () => (
  <div className="-mx-4 sm:mx-auto w-[calc(100%+2rem)] sm:w-full sm:max-w-xl flex justify-center items-center py-0 sm:py-2 mb-6">
    <img
      src="https://i.postimg.cc/RCQGByqM/P2-MOBILE.webp"
      alt="Dificuldades e sinais no aprendizado"
      className="w-full h-auto block rounded-none sm:rounded-2xl"
      referrerPolicy="no-referrer"
    />
  </div>
);

// Problem Card Vector Illustrations
export const ProblemCardIllustration: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'handwriting':
      // Letra difícil de entender
      return (
        <div className="w-full h-32 flex items-center justify-center bg-orange-50/60 rounded-lg p-2 overflow-hidden">
          <svg viewBox="0 0 200 130" className="w-full h-full">
            {/* Lined notebook paper */}
            <rect x="25" y="10" width="100" height="110" fill="#ffffff" rx="4" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="40" y1="10" x2="40" y2="120" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1="25" y1="30" x2="125" y2="30" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="25" y1="50" x2="125" y2="50" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="25" y1="70" x2="125" y2="70" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="25" y1="90" x2="125" y2="90" stroke="#e2e8f0" strokeWidth="1" />
            
            {/* Messy illegible cursive scribbles */}
            <path d="M 45 28 Q 50 20 55 32 T 65 24 T 75 35 T 85 22 T 110 30" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <path d="M 45 48 Q 55 40 65 52 T 80 44 T 95 55 T 115 45" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <path d="M 45 68 Q 60 60 75 72 T 90 62 T 110 70" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            {/* Ink blotch */}
            <circle cx="95" cy="48" r="4" fill="#1e293b" />

            {/* Kid looking sad next to paper */}
            <g transform="translate(125, 20)">
              <circle cx="35" cy="40" r="22" fill="#fed7aa" />
              <path d="M 18 35 C 18 15 52 15 52 35 Z" fill="#78350f" />
              {/* Sad eyes */}
              <circle cx="28" cy="38" r="2.5" fill="#451a03" />
              <circle cx="42" cy="38" r="2.5" fill="#451a03" />
              <path d="M 27 50 Q 35 44 43 50" fill="none" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
              {/* Sweat drop */}
              <path d="M 48 32 C 48 35 50 36 50 33 Z" fill="#38bdf8" />
            </g>
          </svg>
        </div>
      );
    case 'slow':
      // Escreve muito devagar
      return (
        <div className="w-full h-32 flex items-center justify-center bg-sky-50/60 rounded-lg p-2 overflow-hidden">
          <svg viewBox="0 0 200 130" className="w-full h-full">
            {/* Ticking Clock background */}
            <g transform="translate(35, 20)">
              <circle cx="30" cy="30" r="28" fill="#ffffff" stroke="#ef4444" strokeWidth="3" />
              {/* Clock marks */}
              <line x1="30" y1="6" x2="30" y2="10" stroke="#ef4444" strokeWidth="2" />
              <line x1="30" y1="50" x2="30" y2="54" stroke="#ef4444" strokeWidth="2" />
              <line x1="6" y1="30" x2="10" y2="30" stroke="#ef4444" strokeWidth="2" />
              <line x1="50" y1="30" x2="54" y2="30" stroke="#ef4444" strokeWidth="2" />
              {/* Clock hands showing time running out */}
              <line x1="30" y1="30" x2="30" y2="12" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="30" y1="30" x2="46" y2="30" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <circle cx="30" cy="30" r="3" fill="#ef4444" />
              {/* Motion lines around clock */}
              <path d="M 10 10 Q 4 4 0 8" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <path d="M 50 10 Q 56 4 60 8" fill="none" stroke="#f59e0b" strokeWidth="2" />
            </g>

            {/* Kid writing slowly sweating */}
            <g transform="translate(105, 15)">
              {/* Kid Head */}
              <circle cx="40" cy="45" r="25" fill="#fed7aa" />
              <path d="M 18 40 C 18 15 62 15 62 40 Z" fill="#1c1917" />
              {/* Stressed eyes */}
              <ellipse cx="32" cy="44" rx="3" ry="4" fill="#1c1917" />
              <ellipse cx="48" cy="44" rx="3" ry="4" fill="#1c1917" />
              {/* Spiral sweat drop */}
              <path d="M 58 35 C 58 40 61 42 61 37 Z" fill="#38bdf8" />
              <path d="M 28 58 Q 40 50 52 58" fill="none" stroke="#991b1b" strokeWidth="2" strokeLinecap="round" />
              
              {/* Hand with pencil */}
              <rect x="20" y="75" width="45" height="25" rx="3" fill="#ffffff" stroke="#cbd5e1" />
              <path d="M 35 70 Q 25 85 20 95" fill="none" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" />
              <line x1="18" y1="92" x2="45" y2="78" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      );
    case 'tired':
      // Cansa rápido ao escrever
      return (
        <div className="w-full h-32 flex items-center justify-center bg-red-50/60 rounded-lg p-2 overflow-hidden">
          <svg viewBox="0 0 200 130" className="w-full h-full">
            {/* Hand with ache waves */}
            <g transform="translate(25, 20)">
              {/* Pain/Ache lines around hand */}
              <path d="M 10 30 L 2 20" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              <path d="M 20 15 L 18 2" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              <path d="M 40 10 L 48 0" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              
              {/* Hand vector */}
              <path d="M 20 60 L 25 35 Q 28 25 34 35 L 36 60 L 42 32 Q 45 22 51 32 L 53 60 L 58 38 Q 61 28 67 38 L 68 65 L 75 75 C 80 90 60 100 45 95 C 30 90 15 80 20 60 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />

              {/* Red pain glow circle */}
              <circle cx="45" cy="55" r="14" fill="#ef4444" opacity="0.3" />
              <circle cx="45" cy="55" r="8" fill="#ef4444" opacity="0.5" />
            </g>

            {/* Low Battery Icon + Kid Exhausted */}
            <g transform="translate(125, 15)">
              {/* Low Battery Indicator */}
              <rect x="15" y="10" width="40" height="22" rx="4" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
              <rect x="55" y="16" width="4" height="10" rx="1" fill="#dc2626" />
              <rect x="18" y="13" width="10" height="16" rx="2" fill="#dc2626" />

              {/* Exhausted Kid Head */}
              <circle cx="35" cy="60" r="24" fill="#fed7aa" />
              <path d="M 15 55 C 15 30 55 30 55 55 Z" fill="#451a03" />
              {/* Closed tired eyes */}
              <path d="M 25 58 L 32 62" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 45 58 L 38 62" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
              <ellipse cx="35" cy="72" rx="6" ry="4" fill="#991b1b" />
            </g>
          </svg>
        </div>
      );
    case 'classroom':
      // Não consegue acompanhar as atividades
      return (
        <div className="w-full h-32 flex items-center justify-center bg-amber-50/60 rounded-lg p-2 overflow-hidden">
          <svg viewBox="0 0 200 130" className="w-full h-full">
            {/* Classroom Blackboard */}
            <rect x="15" y="15" width="170" height="65" rx="5" fill="#1e3a8a" stroke="#b45309" strokeWidth="4" />
            {/* Teacher writing on board */}
            <line x1="25" y1="30" x2="110" y2="30" stroke="#ffffff" strokeWidth="2" strokeDasharray="4,4" />
            <line x1="25" y1="45" x2="90" y2="45" stroke="#ffffff" strokeWidth="2" strokeDasharray="4,4" />
            <line x1="25" y1="60" x2="120" y2="60" stroke="#ffffff" strokeWidth="2" opacity="0.7" />

            {/* Clock on wall */}
            <circle cx="160" cy="35" r="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="160" y1="35" x2="160" y2="29" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="160" y1="35" x2="165" y2="35" stroke="#1e293b" strokeWidth="1.5" />

            {/* Teacher standing on right */}
            <g transform="translate(135, 45)">
              <ellipse cx="15" cy="20" rx="10" ry="12" fill="#fed7aa" />
              <path d="M 5 15 C 5 2 25 2 25 15 Z" fill="#78350f" />
              <path d="M 2 32 L 28 32 L 24 70 L 6 70 Z" fill="#ec4899" />
              {/* Teacher pointing */}
              <line x1="5" y1="40" x2="-15" y2="25" stroke="#fed7aa" strokeWidth="5" strokeLinecap="round" />
            </g>

            {/* Confused Kid at desk in foreground */}
            <g transform="translate(45, 60)">
              <rect x="-15" y="40" width="70" height="15" fill="#b45309" rx="2" />
              <circle cx="20" cy="25" r="18" fill="#fed7aa" />
              <path d="M 4 20 C 4 2 36 2 36 20 Z" fill="#1c1917" />
              {/* Dizzy eyes */}
              <text x="12" y="28" fontSize="11" fill="#1c1917" fontStyle="bold">x</text>
              <text x="22" y="28" fontSize="11" fill="#1c1917" fontStyle="bold">x</text>
              <path d="M 14 36 Q 20 32 26 36" fill="none" stroke="#451a03" strokeWidth="2" />
              {/* Question marks floating */}
              <text x="-5" y="10" fontSize="14" fill="#ef4444" fontWeight="bold">?</text>
              <text x="35" y="8" fontSize="12" fill="#ef4444" fontWeight="bold">?</text>
            </g>
          </svg>
        </div>
      );
    case 'blackboard':
      // Tem dificuldade para copiar do quadro
      return (
        <div className="w-full h-32 flex items-center justify-center bg-blue-50/60 rounded-lg p-2 overflow-hidden">
          <svg viewBox="0 0 200 130" className="w-full h-full">
            {/* Blackboard */}
            <rect x="25" y="10" width="150" height="60" rx="4" fill="#065f46" stroke="#78350f" strokeWidth="3" />
            <text x="35" y="32" fill="#ffffff" fontSize="12" fontFamily="monospace" opacity="0.9">A a  B b  C c</text>
            <text x="35" y="52" fill="#ffffff" fontSize="12" fontFamily="monospace" opacity="0.9">Escrita Cursiva...</text>

            {/* Question mark coming from board */}
            <circle cx="145" cy="38" r="12" fill="#fef08a" />
            <text x="141" y="44" fontSize="16" fill="#dc2626" fontStyle="bold" fontWeight="900">?</text>

            {/* Two kids comparing notes confused */}
            <g transform="translate(30, 70)">
              {/* Kid 1 */}
              <circle cx="25" cy="20" r="15" fill="#fed7aa" />
              <path d="M 12 15 C 12 2 38 2 38 15 Z" fill="#78350f" />
              <ellipse cx="20" cy="20" rx="2" ry="3" fill="#1e293b" />
              <ellipse cx="30" cy="20" rx="2" ry="3" fill="#1e293b" />
              <path d="M 18 28 Q 25 24 32 28" fill="none" stroke="#1e293b" strokeWidth="1.5" />

              {/* Kid 2 */}
              <circle cx="115" cy="20" r="15" fill="#fed7aa" />
              <path d="M 102 15 C 102 2 128 2 128 15 Z" fill="#1c1917" />
              <ellipse cx="110" cy="20" rx="2" ry="3" fill="#1e293b" />
              <ellipse cx="120" cy="20" rx="2" ry="3" fill="#1e293b" />
              <path d="M 108 28 Q 115 24 122 28" fill="none" stroke="#1e293b" strokeWidth="1.5" />

              {/* Desk with open notebook */}
              <rect x="0" y="35" width="140" height="15" fill="#b45309" rx="2" />
              <rect x="45" y="28" width="50" height="18" fill="#ffffff" stroke="#cbd5e1" />
              <line x1="70" y1="28" x2="70" y2="46" stroke="#cbd5e1" />
            </g>
          </svg>
        </div>
      );
    case 'dislike':
    default:
      // Não gosta de fazer tarefas
      return (
        <div className="w-full h-32 flex items-center justify-center bg-rose-50/60 rounded-lg p-2 overflow-hidden">
          <svg viewBox="0 0 200 130" className="w-full h-full">
            {/* Angry Kid sitting with folded arms */}
            <g transform="translate(60, 15)">
              {/* Kid Head */}
              <circle cx="40" cy="35" r="24" fill="#fed7aa" />
              <path d="M 18 30 C 18 5 62 5 62 30 Z" fill="#451a03" />

              {/* Angry Eyebrows & Eyes */}
              <path d="M 24 28 L 34 33" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
              <path d="M 56 28 L 46 33" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
              <circle cx="28" cy="36" r="3" fill="#1c1917" />
              <circle cx="52" cy="36" r="3" fill="#1c1917" />

              {/* Pouting Mouth */}
              <path d="M 30 48 Q 40 42 50 48" fill="none" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" />

              {/* Folded Arms Shirt */}
              <path d="M 18 58 Q 40 52 62 58 L 65 95 L 15 95 Z" fill="#ef4444" />
              {/* Crossed arms overlay */}
              <path d="M 22 72 Q 40 82 58 72" fill="none" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" />
            </g>

            {/* Pushed away books on desk */}
            <g transform="translate(15, 80)">
              <rect x="0" y="25" width="170" height="12" fill="#b45309" rx="2" />
              {/* Stack of unused books */}
              <rect x="15" y="5" width="35" height="10" rx="2" fill="#3b82f6" />
              <rect x="12" y="15" width="40" height="10" rx="2" fill="#10b981" />
              {/* Angrily pushed pencil */}
              <line x1="120" y1="18" x2="155" y2="8" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      );
  }
};

// Method Section Artwork: Kid studying happily at desk
export const MethodKidStudyingIllustration: React.FC = () => (
  <div className="w-full sm:max-w-xl mx-auto py-0 sm:py-2 flex justify-center items-center">
    <img
      src="https://i.postimg.cc/L4tg5ZdP/P3-MOBILE.webp"
      alt="Método de Caligrafia Infantil"
      className="w-full h-auto block rounded-none sm:rounded-2xl"
      referrerPolicy="no-referrer"
    />
  </div>
);

// Method Circular Seal Icons
export const MethodSealIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'coord':
      return (
        <div className="w-14 h-14 rounded-full bg-amber-50 border-2 border-sky-300 flex items-center justify-center text-2xl shadow-inner">
          ⚙️
        </div>
      );
    case 'cursiva':
      return (
        <div className="w-14 h-14 rounded-full bg-sky-50 border-2 border-sky-300 flex items-center justify-center text-xl font-bold font-serif italic text-sky-700 shadow-inner">
          Letra
        </div>
      );
    case 'formacao':
      return (
        <div className="w-14 h-14 rounded-full bg-indigo-50 border-2 border-sky-300 flex items-center justify-center text-xl font-black text-indigo-700 shadow-inner">
          Ll li
        </div>
      );
    case 'silabas':
      return (
        <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-sky-300 flex flex-col items-center justify-center leading-none text-xs font-black text-emerald-700 shadow-inner">
          <span>Ba, Be</span>
          <span>Bi, Bo</span>
        </div>
      );
    case 'frases':
      return (
        <div className="w-14 h-14 rounded-full bg-rose-50 border-2 border-sky-300 flex flex-col items-center justify-center leading-none text-[10px] font-bold text-rose-700 text-center p-1 shadow-inner">
          <span>A completa,</span>
          <span>senlençou.</span>
        </div>
      );
    case 'texto':
    default:
      return (
        <div className="w-14 h-14 rounded-full bg-purple-50 border-2 border-sky-300 flex items-center justify-center text-2xl shadow-inner">
          📝
        </div>
      );
  }
};

// Ebook Mockup 3D Stack Graphic (Offer Section)
export const ProductBundleMockup: React.FC = () => (
  <div className="relative w-full max-w-xs mx-auto my-3 flex justify-center items-center">
    <svg viewBox="0 0 320 240" className="w-full h-auto drop-shadow-2xl">
      <defs>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Book 1 (Bottom Left - Red) */}
      <g transform="translate(20, 40) rotate(-12)" filter="url(#shadow)">
        <rect x="0" y="0" width="120" height="160" rx="6" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
        <rect x="8" y="8" width="104" height="144" rx="4" fill="#ffffff" opacity="0.9" />
        <rect x="12" y="16" width="96" height="24" rx="3" fill="#fee2e2" />
        <text x="60" y="32" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">ALFABETO</text>
        <text x="60" y="80" textAnchor="middle" fontSize="30">🔤</text>
        <rect x="20" y="125" width="80" height="14" rx="7" fill="#ef4444" />
        <text x="60" y="135" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">MUNDO CURSIVO</text>
      </g>

      {/* Book 2 (Bottom Right - Blue) */}
      <g transform="translate(170, 40) rotate(12)" filter="url(#shadow)">
        <rect x="0" y="0" width="120" height="160" rx="6" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <rect x="8" y="8" width="104" height="144" rx="4" fill="#ffffff" opacity="0.9" />
        <rect x="12" y="16" width="96" height="24" rx="3" fill="#dbeafe" />
        <text x="60" y="32" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1d4ed8">CALIGRAFIA</text>
        <text x="60" y="80" textAnchor="middle" fontSize="30">✍️</text>
        <rect x="20" y="125" width="80" height="14" rx="7" fill="#3b82f6" />
        <text x="60" y="135" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">MUNDO CURSIVO</text>
      </g>

      {/* Book 3 (Middle Stack - Yellow) */}
      <g transform="translate(95, 20) rotate(-4)" filter="url(#shadow)">
        <rect x="0" y="0" width="130" height="175" rx="6" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
        <rect x="8" y="8" width="114" height="159" rx="4" fill="#ffffff" opacity="0.95" />
        <rect x="14" y="18" width="102" height="28" rx="4" fill="#fef3c7" />
        <text x="65" y="35" textAnchor="middle" fontSize="10" fontWeight="extrabold" fill="#b45309">SÍLABAS SIMPLES</text>
        <text x="65" y="90" textAnchor="middle" fontSize="36">🧩</text>
        <rect x="20" y="140" width="90" height="16" rx="8" fill="#f59e0b" />
        <text x="65" y="151" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">MUNDO CURSIVO</text>
      </g>

      {/* Front Book (Center Highlight - Green) */}
      <g transform="translate(85, 45)" filter="url(#shadow)">
        <rect x="0" y="0" width="150" height="185" rx="8" fill="#10b981" stroke="#059669" strokeWidth="3" />
        <rect x="8" y="8" width="134" height="169" rx="6" fill="#ffffff" />
        
        {/* Header Ribbon */}
        <rect x="14" y="16" width="122" height="32" rx="6" fill="#d1fae5" />
        <text x="75" y="30" textAnchor="middle" fontSize="10" fontWeight="900" fill="#047857">KIT DE CALIGRAFIA</text>
        <text x="75" y="42" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#065f46">INFANTIL</text>

        {/* Cursive Handwriting sample graphic */}
        <path d="M 25 70 Q 40 55 55 75 T 90 65 T 125 75" fill="none" stroke="#0284c7" strokeWidth="2.5" />
        <path d="M 25 90 Q 40 75 55 95 T 90 85 T 125 95" fill="none" stroke="#0284c7" strokeWidth="2.5" />
        
        {/* Child pencil illustration */}
        <circle cx="75" cy="115" r="18" fill="#fef08a" />
        <text x="75" y="121" textAnchor="middle" fontSize="20">✏️</text>

        {/* Footer Pill */}
        <rect x="25" y="146" width="100" height="18" rx="9" fill="#10b981" />
        <text x="75" y="158" textAnchor="middle" fontSize="9" fontWeight="900" fill="#ffffff">350+ ATIVIDADES</text>
      </g>
    </svg>

    {/* Offer Badges stacked below */}
    <div className="absolute -bottom-3 left-0 right-0 flex flex-col items-center space-y-1 z-20">
      <span className="bg-amber-400 text-gray-900 font-extrabold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wide border border-amber-300">
        ATIVIDADES FÁCEIS DE APLICAR
      </span>
      <span className="bg-sky-500 text-white font-extrabold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wide border border-sky-400">
        PARA CRIANÇAS ACIMA DE 4 ANOS
      </span>
      <span className="bg-red-600 text-white font-extrabold text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wide border border-red-500">
        PROMOÇÃO ESPECIAL DE ANO NOVO
      </span>
    </div>
  </div>
);

// 7-Day Guarantee Ribbon / Medal
export const GuaranteeSeal: React.FC = () => (
  <div className="w-28 h-28 md:w-36 md:h-36 mx-auto relative flex items-center justify-center">
    <svg viewBox="0 0 160 160" className="w-full h-full filter drop-shadow-xl">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>

      {/* Ribbon tails hanging down */}
      <polygon points="50,110 35,155 60,140 85,155 70,110" fill="#ca8a04" />
      <polygon points="110,110 95,155 120,140 145,155 130,110" fill="#a16207" />

      {/* Outer Starburst / Scallop Gold Circle */}
      <circle cx="80" cy="75" r="62" fill="url(#goldGrad)" stroke="#fef08a" strokeWidth="3" />
      <circle cx="80" cy="75" r="52" fill="#ffffff" />
      <circle cx="80" cy="75" r="46" fill="url(#goldGrad)" />

      {/* Text inside */}
      <path id="circlePathTop" d="M 42,75 A 38,38 0 0,1 118,75" fill="none" />
      <text fill="#713f12" fontSize="9" fontWeight="900" letterSpacing="1">
        <textPath href="#circlePathTop" startOffset="50%" textAnchor="middle">
          COMPRA GARANTIDA
        </textPath>
      </text>

      <text x="80" y="76" textAnchor="middle" fontSize="32" fontWeight="900" fill="#ffffff">7</text>
      <text x="80" y="90" textAnchor="middle" fontSize="11" fontWeight="800" fill="#713f12">DIAS</text>

      <path id="circlePathBottom" d="M 118,75 A 38,38 0 0,1 42,75" fill="none" />
      <text fill="#ffffff" fontSize="9" fontWeight="900" letterSpacing="0.5">
        <textPath href="#circlePathBottom" startOffset="50%" textAnchor="middle">
          100% SEGURO
        </textPath>
      </text>
    </svg>
  </div>
);

// Payment Methods & Security Icons
export const PaymentLogos: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
    {/* PIX */}
    <div className="bg-emerald-50 border border-emerald-200 px-2 py-1 rounded flex items-center space-x-1">
      <div className="w-3.5 h-3.5 bg-emerald-500 transform rotate-45 flex items-center justify-center rounded-[1px]">
        <span className="text-[7px] text-white font-black transform -rotate-45">❖</span>
      </div>
      <span className="text-xs font-black text-emerald-700">pix</span>
    </div>

    {/* Mercado Pago */}
    <div className="bg-sky-50 border border-sky-200 px-2 py-1 rounded flex items-center space-x-1">
      <span className="text-[10px] font-black text-sky-600">mercado</span>
      <span className="text-[10px] font-bold text-sky-400">pago</span>
    </div>

    {/* VISA */}
    <div className="bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-black tracking-wider italic">
      VISA
    </div>

    {/* Mastercard */}
    <div className="bg-slate-100 border px-2 py-1 rounded flex items-center space-x-[-4px]">
      <div className="w-2.5 h-2.5 rounded-full bg-red-600 opacity-90" />
      <div className="w-2.5 h-2.5 rounded-full bg-amber-500 opacity-90" />
    </div>

    {/* ELO */}
    <div className="bg-black text-white px-2 py-1 rounded text-[10px] font-extrabold">
      elo
    </div>

    {/* Hipercard */}
    <div className="bg-red-700 text-white px-2 py-1 rounded text-[9px] font-bold">
      hipercard
    </div>

    {/* Boleto */}
    <div className="bg-gray-100 border border-gray-300 px-2 py-1 rounded flex items-center space-x-1">
      <span className="text-[10px] text-gray-700 font-mono font-bold">|||</span>
      <span className="text-[9px] font-semibold text-gray-600">Boleto</span>
    </div>
  </div>
);

// Security Badges Footer
export const SecuritySeals: React.FC = () => (
  <div className="flex items-center justify-center space-x-3 py-2">
    <div className="flex items-center space-x-1 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full text-[10px] font-bold text-amber-800">
      <span>🛡️</span>
      <span>COMPRA 100% SEGURA</span>
    </div>
    <div className="flex items-center space-x-1 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full text-[10px] font-bold text-emerald-800">
      <span>🔒</span>
      <span>SITE SEGURO</span>
    </div>
  </div>
);
