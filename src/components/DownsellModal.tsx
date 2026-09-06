import React, { useEffect } from 'react';

interface DownsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
  checkoutUrl?: string;
}

export const DownsellModal: React.FC<DownsellModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  onDecline,
  checkoutUrl = 'https://pay.wiapy.com/QruNNp6WKqPx?offer=downsell_1590&utm_source=organic&utm_campaign=downsell_1590',
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[2.5rem] p-6 sm:p-8 max-w-md w-full relative shadow-2xl border border-slate-100 overflow-hidden max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fechar pop-up"
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Tag no topo */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 bg-[#FFF4E5] border border-orange-200 text-[#F97316] font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
            <span>🎁</span>
            <span>OFERTA ESPECIAL</span>
          </span>
        </div>

        {/* Título Principal */}
        <h3 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 leading-tight text-center mt-3 max-w-xs mx-auto">
          Espere! Leve o Plano Completo por apenas R$ 15,90
        </h3>

        {/* Texto descritivo */}
        <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-sm mx-auto text-center mt-2.5">
          Você está levando o Plano Básico por R$ 10,00. Que tal desbloquear o Plano Completo com 4 materiais bônus por apenas R$ 15,90?
        </p>

        {/* Imagem Central */}
        <div className="my-3 flex justify-center">
          <img
            src="https://i.ibb.co/r2dBRxNM/plano-completo-sem-fundo.webp"
            alt="Plano Completo com Bônus"
            className="w-full max-w-[240px] sm:max-w-[260px] mx-auto object-contain drop-shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caixa de Benefícios */}
        <div className="bg-slate-50 rounded-3xl p-4 sm:p-5 space-y-2.5 text-left border border-slate-100">
          <div className="flex items-start gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check text-emerald-500 shrink-0 mt-0.5"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-slate-800 text-xs sm:text-[13px] font-bold leading-tight">
              Todas as Atividades de Caligrafia (Plano Básico incluso)
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="text-base leading-none shrink-0 select-none">🎁</span>
            <span className="text-slate-800 text-xs sm:text-[13px] font-bold leading-tight">
              BÔNUS 1: Apostila Fônica Essencial
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="text-base leading-none shrink-0 select-none">🎁</span>
            <span className="text-slate-800 text-xs sm:text-[13px] font-bold leading-tight">
              BÔNUS 2: Letra, Traço e Som
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="text-base leading-none shrink-0 select-none">🎁</span>
            <span className="text-slate-800 text-xs sm:text-[13px] font-bold leading-tight">
              BÔNUS 3: Alfabeto Fônico de Parede
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="text-base leading-none shrink-0 select-none">🎁</span>
            <span className="text-slate-800 text-xs sm:text-[13px] font-bold leading-tight">
              BÔNUS 4: Interpretação de Texto
            </span>
          </div>
        </div>

        {/* Bloco de Preço */}
        <div className="text-center my-3.5 space-y-0.5">
          <p className="line-through text-slate-400 text-xs sm:text-sm font-semibold">
            De R$ 19,90
          </p>
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="text-slate-900 font-extrabold text-sm sm:text-base">Por apenas</span>
            <span className="text-emerald-500 font-black text-3xl sm:text-4xl font-sans tracking-tight">
              R$ 15,90
            </span>
          </div>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
            OFERTA EXCLUSIVA • ACESSO IMEDIATO
          </span>
        </div>

        {/* Botão Verde de Ação Principal */}
        <a
          href={checkoutUrl}
          onClick={onAccept}
          className="w-full bg-[#12B856] hover:bg-[#0E9E48] text-white font-extrabold py-3.5 sm:py-4 px-5 sm:px-6 rounded-full shadow-lg shadow-emerald-500/20 text-xs sm:text-sm tracking-wide text-center uppercase cursor-pointer flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] border-b-4 border-emerald-700"
        >
          <span>SIM, QUERO O PLANO COMPLETO POR R$ 15,90</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right stroke-[3]"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>

        {/* Link Secundário de Recusa */}
        <button
          type="button"
          onClick={onDecline}
          className="text-slate-400 hover:text-slate-600 text-xs font-bold underline cursor-pointer block mx-auto mt-3 transition-colors text-center"
        >
          Não, quero apenas o Plano Básico por R$ 10,00
        </button>
      </div>
    </div>
  );
};
