import React from 'react';

export const PlansOfferSection: React.FC<{ onBasicPlanClick?: () => void }> = ({ onBasicPlanClick }) => {
  return (
    <section id="offer" className="py-16 px-4 bg-[#54B1E0] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-xs">Escolha o seu plano</h2>
          <p className="text-lg text-white/95 font-medium leading-relaxed max-w-2xl mx-auto">
            Comece com o essencial ou leve o material completo por um valor especial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Plano Básico */}
          <div
            id="plano-basico"
            className="bg-white p-8 rounded-[3rem] border-2 border-slate-100 shadow-sm flex flex-col justify-between relative"
            style={{ transform: 'none' }}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="inline-block bg-slate-100 text-slate-600 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  Plano Essencial
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">Plano Básico</h3>
                <p className="text-xs text-slate-500">Material ideal para focar na melhoria da escrita caligráfica.</p>
              </div>
              <div className="py-3 border-y border-slate-100">
                <p className="text-slate-400 line-through text-sm">De R$ 37,00</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-slate-900 text-sm font-bold">Por apenas</span>
                  <span className="text-slate-800 text-4xl font-extrabold font-sans">R$ 10,00</span>
                </div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mt-1">
                  Pagamento único • Acesso imediato
                </span>
              </div>
              <div className="space-y-2.5 text-left">
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-action-green shrink-0" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-700 text-sm font-semibold">+300 Atividades de Caligrafia (1º ao 6º ano)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-red-500 shrink-0" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="text-red-500 line-through text-sm font-semibold">BÔNUS 1: Apostila Fônica Essencial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-red-500 shrink-0" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="text-red-500 line-through text-sm font-semibold">BÔNUS 2: Letra, Traço e Som</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-red-500 shrink-0" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="text-red-500 line-through text-sm font-semibold">BÔNUS 3: Alfabeto Fônico de Parede</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-red-500 shrink-0" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="text-red-500 line-through text-sm font-semibold">BÔNUS 4: Interpretação de Texto</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-action-green shrink-0" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-700 text-sm font-semibold">PDF pronto para imprimir e acesso imediato</span>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <button
                onClick={onBasicPlanClick}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-black py-4 px-6 rounded-full shadow-md text-xs sm:text-sm tracking-wide text-center uppercase cursor-pointer flex items-center justify-center gap-2 transition-colors"
                tabIndex={0}
                id="a9ec73e7-4fd9-8bb6-511b-a795e1d336d9"
              >
                <span>QUERO O PLANO BÁSICO</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Plano Completo */}
          <div
            className="bg-[#FFF9E5] border-4 border-solid border-[#3195C6] p-8 rounded-[3rem] shadow-xl flex flex-col justify-between relative"
            style={{
              borderColor: '#3195C6',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px, rgba(49, 149, 198, 0.35) 0px 0px 9.33611px 3.11204px',
              transform: 'translateY(-1.90621px)',
            }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div
                className="bg-[#FF0D0D] text-white font-black text-[10px] md:text-xs px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap"
                style={{
                  boxShadow: 'rgba(255, 13, 13, 0.6) 0px 0px 15px 4px',
                  transform: 'scale(1.04149)',
                }}
              >
                🔥 MAIS ESCOLHIDO
              </div>
            </div>
            <div className="space-y-4 mt-2">
              <div className="space-y-2">
                <span className="inline-block bg-white/60 text-indigo-700 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                  Plano Recomendado
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">Plano Completo</h3>
                <p className="text-xs text-slate-600">O kit definitivo com todos os materiais bônus inclusos.</p>
              </div>
              <div className="!-mt-4 !-mb-5 overflow-hidden rounded-2xl bg-transparent flex justify-center">
                <img
                  alt="Conteúdo do Plano Completo"
                  className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain"
                  referrerPolicy="no-referrer"
                  src="https://i.postimg.cc/hvxHC1pQ/imagem-produto-lp.webp"
                />
              </div>
              <div className="py-3 border-y border-yellow-300/40">
                <p className="text-slate-500 line-through text-sm">De R$ 120,70</p>
                <p className="text-indigo-700 font-extrabold text-[11px] uppercase tracking-wide">
                  Leve 4 bônus exclusivos por apenas mais R$ 9,90
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-slate-900 text-sm font-bold">Por apenas</span>
                  <span className="text-action-green text-4xl sm:text-5xl font-extrabold font-sans">R$ 19,90</span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider mt-1">
                  Acesso imediato • Download vitalício
                </span>
              </div>
              <div className="space-y-2.5 text-left">
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-action-green shrink-0" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-800 text-sm font-extrabold">Tudo do Plano Básico (+300 atividades)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-lg shrink-0 select-none">🎁</span>
                  <span className="text-emerald-700 text-sm font-bold">BÔNUS 1: Apostila Fônica Essencial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-lg shrink-0 select-none">🎁</span>
                  <span className="text-emerald-700 text-sm font-bold">BÔNUS 2: Letra, Traço e Som</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-lg shrink-0 select-none">🎁</span>
                  <span className="text-emerald-700 text-sm font-bold">BÔNUS 3: Alfabeto Fônico de Parede</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-lg shrink-0 select-none">🎁</span>
                  <span className="text-emerald-700 text-sm font-bold">BÔNUS 4: Interpretação de Texto</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-action-green shrink-0" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-slate-800 text-sm font-semibold">PDF pronto para imprimir e acesso imediato</span>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <a
                href="https://pay.wiapy.com/QruNNp6WKqPx?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term="
                className="w-full bg-action-green hover:bg-emerald-600 text-white font-black py-4.5 px-6 rounded-full shadow-lg text-xs sm:text-sm tracking-wide text-center uppercase cursor-pointer flex items-center justify-center gap-2 border-b-4 border-emerald-700 transition-colors"
                tabIndex={0}
                id="a885b4f3-3a63-e2db-517a-f72b9458a21c"
                style={{ transform: 'scale(1.00945)' }}
              >
                <span>QUERO O PLANO COMPLETO</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right stroke-[3]" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-sm font-bold text-white flex items-center justify-center gap-2 drop-shadow-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone text-white/80" aria-hidden="true">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
            Produto 100% digital. Você receberá o PDF para imprimir no e-mail cadastrado.
          </p>
          <div className="flex flex-wrap justify-center gap-4 bg-white/90 py-2.5 px-6 rounded-full w-fit mx-auto shadow-sm">
            <img alt="Visa" className="h-6" src="https://img.icons8.com/color/48/visa.png" />
            <img alt="Mastercard" className="h-6" src="https://img.icons8.com/color/48/mastercard.png" />
            <img alt="Pix" className="h-6" src="https://img.icons8.com/color/48/pix.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
