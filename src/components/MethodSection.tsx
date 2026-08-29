import React from 'react';
import { MethodKidStudyingIllustration } from './Illustrations';

export const MethodSection: React.FC = () => {
  return (
    <section className="bg-[#4FB3E8] text-white py-12 md:py-20 px-4 text-center relative overflow-hidden">
      {/* Subtle decorative background sparkles */}
      <div className="absolute top-10 left-10 text-white/20 text-4xl select-none">✨</div>
      <div className="absolute bottom-10 right-10 text-white/20 text-4xl select-none">✨</div>

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight mb-3 tracking-tight">
          UM MÉTODO SIMPLES QUE TRANSFORMA A ESCRITA EM POUCOS MINUTOS POR DIA
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl font-semibold opacity-95 mb-8 max-w-2xl mx-auto">
          O <span className="font-extrabold underline decoration-amber-300">KIT DE CALIGRAFIA INFANTIL</span> reúne mais de 350 atividades organizadas para desenvolver:
        </p>

        {/* Card Container with #54B1E0 background - Edge-to-Edge on Mobile */}
        <div className="-mx-4 sm:mx-auto w-[calc(100%+2rem)] sm:w-full bg-[#54B1E0] text-white rounded-none sm:rounded-3xl p-0 sm:p-4 max-w-none sm:max-w-3xl overflow-hidden">
          {/* Central Artwork */}
          <MethodKidStudyingIllustration />
        </div>

        {/* Footer Tagline */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl font-black text-white drop-shadow-sm tracking-wide">
          Tudo em um formato leve, divertido e fácil de imprimir.
        </p>

      </div>
    </section>
  );
};
