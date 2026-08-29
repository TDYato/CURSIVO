import React from 'react';
import { LogoImage } from './Illustrations';

export const Header: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-3 px-4 sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <LogoImage className="h-12 md:h-14" />
        
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-xs lg:text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 animate-pulse">
            🔥 Desconto de 60% Ativo Hoje!
          </span>
          <button
            onClick={onCtaClick}
            className="bg-[#12B856] hover:bg-[#0e9645] text-white font-extrabold text-sm py-2.5 px-5 rounded-lg shadow-md transition transform active:scale-95 cursor-pointer uppercase tracking-wide"
          >
            Quero o Kit
          </button>
        </div>
      </div>
    </header>
  );
};
