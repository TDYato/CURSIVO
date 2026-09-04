import React from 'react';

interface CoverProps {
  className?: string;
}

// Capa: Coleção Completa de Caligrafia
export const CoverColecaoCompleta: React.FC<CoverProps> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#29B6F6] via-[#0288D1] to-[#01579B] p-4 text-white flex flex-col justify-between select-none shadow-lg ${className}`}>
      <div className="absolute top-2 left-3 text-white/80 text-xs">⭐</div>
      <div className="absolute top-3 right-8 text-amber-300 text-sm">✨</div>
      <div className="flex items-start justify-between relative z-10">
        <div className="bg-amber-400 text-slate-900 font-black text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full shadow uppercase tracking-wider border border-amber-300">
          6 Módulos
        </div>
        <div className="w-7 h-7 rounded-full bg-amber-400/90 text-amber-950 flex items-center justify-center text-sm shadow-md">
          💡
        </div>
      </div>
      <div className="my-auto text-center relative z-10 py-1">
        <div className="inline-block bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-sky-100 mb-0.5 border border-white/30">
          Educação Infantil & Fundamental
        </div>
        <h3 className="text-sm sm:text-base md:text-lg font-black text-amber-300 tracking-tight uppercase drop-shadow leading-tight">
          Coleção Completa
        </h3>
        <div className="text-base sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight drop-shadow">
          De Caligrafia
        </div>
        <p className="text-[9px] sm:text-[10px] text-sky-100 font-bold mt-0.5 drop-shadow line-clamp-1">
          Alfabeto, Coordenação, Sílabas e Frases
        </p>
      </div>
      <div className="relative z-10 flex items-end justify-between pt-1 border-t border-white/20">
        <div className="flex items-center gap-1.5">
          <span className="text-xl drop-shadow">👦🏽</span>
          <span className="text-xl drop-shadow">👧🏼</span>
          <span className="text-xl drop-shadow">👧🏽</span>
        </div>
        <div className="text-right">
          <span className="bg-emerald-500 text-white font-black text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
            PDF A4 Pronto
          </span>
        </div>
      </div>
    </div>
  );
};

// Capa 1: Alfabeto Cursivo 03
export const CoverAlfabeto03: React.FC<CoverProps> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#4CAF50] via-[#2E7D32] to-[#1B5E20] p-4 text-white flex flex-col justify-between select-none shadow-lg ${className}`}>
      <div className="absolute top-2 right-3 text-amber-300 text-xs">✨</div>
      <div className="flex items-start justify-between relative z-10">
        <span className="bg-amber-400 text-slate-900 font-black text-[9px] px-2 py-0.5 rounded-full shadow uppercase">
          Módulo 1
        </span>
        <span className="text-xs bg-black/40 px-2 py-0.5 rounded-full font-bold">54 Páginas • 2.4 MB</span>
      </div>
      <div className="my-auto text-center relative z-10 py-1">
        <div className="text-3xl mb-1 drop-shadow">🔤</div>
        <h3 className="text-sm sm:text-base font-black text-amber-200 uppercase tracking-tight drop-shadow leading-tight">
          Alfabeto Cursivo 03
        </h3>
        <p className="text-xs sm:text-sm font-bold text-white drop-shadow">Letra Cursiva A-Z</p>
        <p className="text-[9px] text-emerald-100 mt-1">Setas direcionais & pautas pedagógicas</p>
      </div>
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-white/20 text-[9px] font-bold">
        <span>Alfabetização</span>
        <span className="text-amber-300">⭐ Maiúsculas & Minúsculas</span>
      </div>
    </div>
  );
};

// Capa 2: Caderno Prático Módulo 2
export const CoverCadernoPratico02: React.FC<CoverProps> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#3F51B5] via-[#283593] to-[#1A237E] p-4 text-white flex flex-col justify-between select-none shadow-lg ${className}`}>
      <div className="flex items-start justify-between relative z-10">
        <span className="bg-sky-400 text-slate-900 font-black text-[9px] px-2 py-0.5 rounded-full shadow uppercase">
          Módulo 2
        </span>
        <span className="text-xs bg-black/40 px-2 py-0.5 rounded-full font-bold">60 Páginas • 2.7 MB</span>
      </div>
      <div className="my-auto text-center relative z-10 py-1">
        <div className="text-3xl mb-1 drop-shadow">✍️</div>
        <h3 className="text-sm sm:text-base font-black text-sky-200 uppercase tracking-tight drop-shadow leading-tight">
          Caderno Prático Módulo 2
        </h3>
        <p className="text-xs sm:text-sm font-bold text-white drop-shadow">Caligrafia Contínua & Pautas</p>
        <p className="text-[9px] text-indigo-100 mt-1">Exercícios práticos de ligação e fluidez</p>
      </div>
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-white/20 text-[9px] font-bold">
        <span>1º ao 4º Ano</span>
        <span className="text-sky-300">Treino Progressivo</span>
      </div>
    </div>
  );
};

// Capa 3: Coordenação Aplicada Módulos 2 e 3
export const CoverCoordenacao: React.FC<CoverProps> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#E91E63] via-[#C2185B] to-[#880E4F] p-4 text-white flex flex-col justify-between select-none shadow-lg ${className}`}>
      <div className="flex items-start justify-between relative z-10">
        <span className="bg-rose-300 text-slate-900 font-black text-[9px] px-2 py-0.5 rounded-full shadow uppercase">
          Módulos 2 e 3
        </span>
        <span className="text-xs bg-black/40 px-2 py-0.5 rounded-full font-bold">60 Páginas • 5.1 MB</span>
      </div>
      <div className="my-auto text-center relative z-10 py-1">
        <div className="text-3xl mb-1 drop-shadow">🎯</div>
        <h3 className="text-sm sm:text-base font-black text-rose-200 uppercase tracking-tight drop-shadow leading-tight">
          Coordenação Aplicada
        </h3>
        <p className="text-xs sm:text-sm font-bold text-white drop-shadow">Motricidade Fina & Ondas</p>
        <p className="text-[9px] text-pink-100 mt-1">Laçadas, curvas e flexibilidade muscular</p>
      </div>
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-white/20 text-[9px] font-bold">
        <span>Educação Infantil</span>
        <span className="text-rose-300">Firmeza e Destreza</span>
      </div>
    </div>
  );
};

// Capa 4: Silabário Cursivo 05
export const CoverSilabario05: React.FC<CoverProps> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#FF9800] via-[#E65100] to-[#BF360C] p-4 text-white flex flex-col justify-between select-none shadow-lg ${className}`}>
      <div className="flex items-start justify-between relative z-10">
        <span className="bg-yellow-300 text-slate-900 font-black text-[9px] px-2 py-0.5 rounded-full shadow uppercase">
          Módulo 4
        </span>
        <span className="text-xs bg-black/40 px-2 py-0.5 rounded-full font-bold">35 Páginas • 2.0 MB</span>
      </div>
      <div className="my-auto text-center relative z-10 py-1">
        <div className="text-3xl mb-1 drop-shadow">📖</div>
        <h3 className="text-sm sm:text-base font-black text-yellow-200 uppercase tracking-tight drop-shadow leading-tight">
          Silabário Cursivo 05
        </h3>
        <p className="text-xs sm:text-sm font-bold text-white drop-shadow">Famílias Silábicas & Sons</p>
        <p className="text-[9px] text-orange-100 mt-1">Fixação fonética e escrita com fluidez</p>
      </div>
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-white/20 text-[9px] font-bold">
        <span>1º ao 3º Ano</span>
        <span className="text-yellow-300">Sílabas Cursivas</span>
      </div>
    </div>
  );
};

// Capa 5: Produção de Frases Cursiva 04
export const CoverProducaoFrases04: React.FC<CoverProps> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#9C27B0] via-[#7B1FA2] to-[#4A148C] p-4 text-white flex flex-col justify-between select-none shadow-lg ${className}`}>
      <div className="flex items-start justify-between relative z-10">
        <span className="bg-purple-300 text-slate-900 font-black text-[9px] px-2 py-0.5 rounded-full shadow uppercase">
          Módulo 5
        </span>
        <span className="text-xs bg-black/40 px-2 py-0.5 rounded-full font-bold">25 Páginas • 4.5 MB</span>
      </div>
      <div className="my-auto text-center relative z-10 py-1">
        <div className="text-3xl mb-1 drop-shadow">💬</div>
        <h3 className="text-sm sm:text-base font-black text-purple-200 uppercase tracking-tight drop-shadow leading-tight">
          Produção de Frases 04
        </h3>
        <p className="text-xs sm:text-sm font-bold text-white drop-shadow">Espaçamento & Pontuação</p>
        <p className="text-[9px] text-purple-100 mt-1">Construção de frases do cotidiano</p>
      </div>
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-white/20 text-[9px] font-bold">
        <span>2º ao 5º Ano</span>
        <span className="text-purple-300">Espaço Regular</span>
      </div>
    </div>
  );
};

// Capa 6: Frases Cursiva 06
export const CoverFrases06: React.FC<CoverProps> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#009688] via-[#00796B] to-[#004D40] p-4 text-white flex flex-col justify-between select-none shadow-lg ${className}`}>
      <div className="flex items-start justify-between relative z-10">
        <span className="bg-teal-300 text-slate-900 font-black text-[9px] px-2 py-0.5 rounded-full shadow uppercase">
          Módulo 6
        </span>
        <span className="text-xs bg-black/40 px-2 py-0.5 rounded-full font-bold">50 Páginas • 2.5 MB</span>
      </div>
      <div className="my-auto text-center relative z-10 py-1">
        <div className="text-3xl mb-1 drop-shadow">📝</div>
        <h3 className="text-sm sm:text-base font-black text-teal-200 uppercase tracking-tight drop-shadow leading-tight">
          Frases Cursiva 06
        </h3>
        <p className="text-xs sm:text-sm font-bold text-white drop-shadow">Versos, Rimas & Expressões</p>
        <p className="text-[9px] text-teal-100 mt-1">Frases contextualizadas e ritmo de leitura</p>
      </div>
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-white/20 text-[9px] font-bold">
        <span>2º ao 6º Ano</span>
        <span className="text-teal-300">Fluidez e Clareza</span>
      </div>
    </div>
  );
};

// Aliases para manter compatibilidade com importações anteriores
export const CoverCaderno1 = CoverAlfabeto03;
export const CoverCaderno2 = CoverCadernoPratico02;
export const CoverCaderno3 = CoverSilabario05;
export const CoverCadernoPedagogo: React.FC<CoverProps> = ({ className = "w-full h-full" }) => (
  <CoverCadernoPratico02 className={className} />
);
export const CoverCronograma30Dias: React.FC<CoverProps> = ({ className = "w-full h-full" }) => (
  <CoverCoordenacao className={className} />
);
