import React from 'react';
import { LogoImage } from './Illustrations';

export const Header: React.FC<{ onCtaClick: () => void; onNavigateLogin?: () => void }> = ({ onCtaClick, onNavigateLogin }) => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-3 px-4 sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <LogoImage className="h-12 md:h-14" />
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={onNavigateLogin}
            className="text-xs sm:text-sm font-extrabold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-3 py-2 rounded-lg border border-sky-200 transition cursor-pointer flex items-center gap-1.5"
          >
            <span>🔐</span>
            <span className="hidden sm:inline">Área de Membros</span>
            <span className="sm:hidden">Entrar</span>
          </button>

          <span className="hidden lg:inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 animate-pulse">
            🔥 Desconto de 60% Ativo Hoje!
          </span>

          <button
            onClick={onCtaClick}
            className="bg-[#12B856] hover:bg-[#0e9645] text-white font-extrabold text-xs sm:text-sm py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-lg shadow-md transition transform active:scale-95 cursor-pointer uppercase tracking-wide"
          >
            Quero o Kit
          </button>
        </div>
      </div>
    </header>
  );
};
