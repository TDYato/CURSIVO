import React from 'react';
import { HeroBoyIllustration, LogoImage } from './Illustrations';

export const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-white pt-0 pb-8 md:pt-2 md:pb-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center bg-[#FFFFFF]">
        
        {/* Left Column (Desktop) / Main Column (Mobile) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 pt-0">
          
          {/* Logo on top */}
          <div className="mt-1 mb-1 md:mt-2 md:mb-2">
            <LogoImage className="h-10 sm:h-12 md:h-14 mx-auto md:mx-0" />
          </div>

          {/* Boy Illustration Prominent on Mobile View */}
          <div className="block md:hidden -mx-4 w-[calc(100%+2rem)] mb-4 overflow-hidden">
            <HeroBoyIllustration />
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight uppercase">
            A LETRA DO SEU FILHO TA DIFÍCIL DE ENTENDER?
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 font-semibold leading-relaxed max-w-xl">
            Mais de 350 atividades de caligrafia para crianças do 1º ao 6º ano, desenvolvidas para melhorar a escrita.
          </p>

          {/* Mobile Green CTA Button */}
          <div className="block md:hidden w-full mb-6">
            <button
              onClick={onCtaClick}
              className="w-full bg-[#12B856] hover:bg-[#0e9645] text-white text-center font-black text-base sm:text-lg py-4 px-6 rounded-xl shadow-xl transform active:scale-95 transition-all duration-200 uppercase tracking-wide cursor-pointer"
            >
              QUERO O KIT COM DESCONTO
            </button>
          </div>



          {/* Desktop CTA Button under checkmarks */}
          <div className="hidden md:block mt-8 w-full max-w-md">
            <button
              onClick={onCtaClick}
              className="w-full bg-[#12B856] hover:bg-[#0e9645] text-white text-center font-black text-lg py-4 px-8 rounded-xl shadow-xl transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 uppercase tracking-wider cursor-pointer"
            >
              QUERO O KIT COM DESCONTO
            </button>
          </div>

        </div>

        {/* Right Column (Desktop ONLY) */}
        <div className="hidden md:flex w-1/2 relative pl-4 items-center justify-center self-stretch">
          <HeroBoyIllustration />
        </div>

      </div>
    </section>
  );
};
