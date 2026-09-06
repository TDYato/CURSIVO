import React from 'react';

export const BonusSection: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick }) => {
  return (
    <section className="py-12 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-green/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#FFF9E5] border border-yellow-300 text-orange-500 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            ✨ BÔNUS INCLUSOS NO PLANO COMPLETO
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            🎁 Você Ainda Recebe 4 Bônus Exclusivos
          </h2>
          <p className="text-[13px] sm:text-base md:text-lg text-slate-600 font-semibold leading-relaxed max-w-2xl mx-auto">
            <span className="text-action-green font-extrabold">+ R$ 100,60</span> em bônus inclusos{' '}
            <span className="text-action-green font-extrabold">GRÁTIS</span> hoje
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm flex flex-col justify-between"
            style={{ transform: 'none' }}
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner">
                <span className="absolute top-2 left-2 bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs uppercase z-10">
                  BÔNUS 1
                </span>
                <img
                  alt="BÔNUS 1: Apostila Fônica Essencial"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  src="https://i.ibb.co/gZnN9sX1/Apostila-Fo-nica-Essencial-COMPRESSED.webp"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                BÔNUS 1: Apostila Fônica Essencial
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Material completo focado no método fônico para acelerar a alfabetização e associação do som das letras.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <span>De</span>
                <span className="text-red-500 line-through font-bold">R$ 29,90</span>
                <span>por</span>
              </div>
              <span className="bg-indigo-50 text-indigo-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                GRÁTIS
              </span>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm flex flex-col justify-between"
            style={{ transform: 'none' }}
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner">
                <span className="absolute top-2 left-2 bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs uppercase z-10">
                  BÔNUS 2
                </span>
                <img
                  alt="BÔNUS 2: Letra, Traço e Som"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  src="https://i.ibb.co/Q3MV4nHq/Letra-Trac-o-e-Som-COMPRESSED.webp"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                BÔNUS 2: Letra, Traço e Som
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Exercícios dinâmicos que conectam o traçado correto de cada letra ao seu som correspondente.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <span>De</span>
                <span className="text-red-500 line-through font-bold">R$ 25,90</span>
                <span>por</span>
              </div>
              <span className="bg-indigo-50 text-indigo-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                GRÁTIS
              </span>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm flex flex-col justify-between"
            style={{ transform: 'none' }}
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner">
                <span className="absolute top-2 left-2 bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs uppercase z-10">
                  BÔNUS 3
                </span>
                <img
                  alt="BÔNUS 3: Alfabeto Fônico de Parede"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  src="https://i.ibb.co/2YRcKt7M/Alfabeto-Fo-nico-de-Parede-COMPRESSED.webp"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                BÔNUS 3: Alfabeto Fônico de Parede
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pôsteres ilustrados prontos para imprimir e colar no cantinho de estudos para consulta diária.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <span>De</span>
                <span className="text-red-500 line-through font-bold">R$ 19,90</span>
                <span>por</span>
              </div>
              <span className="bg-indigo-50 text-indigo-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                GRÁTIS
              </span>
            </div>
          </div>

          <div
            className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm flex flex-col justify-between"
            style={{ transform: 'none' }}
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner">
                <span className="absolute top-2 left-2 bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs uppercase z-10">
                  BÔNUS 4
                </span>
                <img
                  alt="BÔNUS 4: Interpretação de Texto"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  src="https://i.ibb.co/kVQpnB5Y/Interpretac-a-o-de-Texto-COMPRESSED.webp"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                BÔNUS 4: Interpretação de Texto
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Textos curtos e perguntas simples para desenvolver hábitos de leitura, atenção e compreensão.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <span>De</span>
                <span className="text-red-500 line-through font-bold">R$ 24,90</span>
                <span>por</span>
              </div>
              <span className="bg-indigo-50 text-indigo-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                GRÁTIS
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 space-y-6">
          <p className="text-slate-800 font-extrabold text-lg">
            🎉 Tudo isso já vem incluso no <span className="text-indigo-600">Plano Completo</span>.
          </p>
          <button
            onClick={onCtaClick}
            className="bg-action-green text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg uppercase tracking-wide cursor-pointer inline-flex items-center justify-center text-center animate-pulse-ring-only w-full sm:w-auto"
            tabIndex={0}
            id="e477cb6f-4629-6803-0fa9-d1b6f626450d"
            style={{ transform: 'scale(1.00089)' }}
          >
            ESCOLHER MEU PLANO AGORA
          </button>
        </div>
      </div>
    </section>
  );
};
