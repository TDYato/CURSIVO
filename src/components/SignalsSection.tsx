import React from 'react';
import { MotherChildStressIllustration, ProblemCardIllustration } from './Illustrations';

export const SignalsSection: React.FC = () => {
  const problemCards = [
    {
      id: '1',
      title: 'Letra difícil de entender',
      type: 'handwriting',
      image: 'https://i.postimg.cc/yNxYVMVx/DOR-01.webp',
    },
    {
      id: '2',
      title: 'Escreve muito devagar',
      type: 'slow',
      image: 'https://i.postimg.cc/MphrTRwZ/DOR-02.webp',
    },
    {
      id: '3',
      title: 'Cansa rápido ao escrever',
      type: 'tired',
      image: 'https://i.postimg.cc/50fgYSRd/DOR-03.webp',
    },
    {
      id: '4',
      title: 'Não consegue acompanhar as atividades da escola',
      type: 'classroom',
      image: 'https://i.postimg.cc/vBGhgtSJ/DOR-04.webp',
    },
    {
      id: '5',
      title: 'Tem dificuldade para copiar do quadro',
      type: 'blackboard',
      image: 'https://i.postimg.cc/xC95J34r/DOR-05.webp',
    },
    {
      id: '6',
      title: 'Não gosta de fazer tarefas',
      type: 'dislike',
      image: 'https://i.postimg.cc/KzmfkDHh/DOR-06.webp',
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-gray-50/80 border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Header Stress Illustration */}
        <MotherChildStressIllustration />

        {/* Section Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8 mt-2 tracking-tight uppercase">
          SEU FILHO APRESENTA ALGUM DESTES SINAIS?
        </h2>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {problemCards.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition duration-200 overflow-hidden ${
                card.image ? 'p-0 flex items-center justify-center' : 'p-4 sm:p-5 flex flex-col items-center justify-between'
              }`}
            >
              {card.image ? (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto block rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <>
                  {/* Illustration */}
                  <div className="w-full mb-3 flex items-center justify-center">
                    <ProblemCardIllustration type={card.type} />
                  </div>

                  {/* Title with Red Cross */}
                  <div className="w-full flex items-center justify-center space-x-2 pt-2 border-t border-gray-100">
                    <span className="text-red-600 text-lg font-black flex-shrink-0">❌</span>
                    <p className="font-extrabold text-red-600 text-base sm:text-lg text-center leading-snug">
                      {card.title}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Green Informative Banner */}
        <div className="mt-8 md:mt-10 bg-[#12B856] text-white p-5 md:p-6 rounded-2xl max-w-3xl mx-auto text-left shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
          {/* Brain Icon */}
          <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-3xl flex-shrink-0 shadow-inner relative -translate-x-[120px]">
            🧠
          </div>

          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm md:text-base font-bold leading-relaxed">
              Se respondeu <span className="underline decoration-amber-300 font-black">'sim'</span> para qualquer um deles, saiba que isso pode ser consequência da falta de prática correta da escrita e da coordenação motora. A boa notícia é que isso pode ser desenvolvido com exercícios simples e diários.
            </p>
          </div>

          {/* 3 Circular Badges */}
          <div className="flex items-center space-x-2 flex-shrink-0 relative translate-x-[80px]">
            <span className="w-9 h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-lg">✏️</span>
            <span className="w-9 h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-lg">✋</span>
            <span className="w-9 h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-lg">📅</span>
          </div>
        </div>

      </div>
    </section>
  );
};
