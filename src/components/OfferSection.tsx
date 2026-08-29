import React from 'react';
import { ProductBundleMockup, PaymentLogos } from './Illustrations';

export const OfferSection: React.FC<{ onBuyClick: () => void }> = ({ onBuyClick }) => {
  return (
    <section id="oferta" className="bg-[#4FB3E8] py-12 md:py-20 px-4 relative">
      <div className="max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-7 shadow-2xl text-center border-4 border-dashed border-red-500 relative">
        
        {/* Banner Oferta Especial */}
        <div className="bg-red-600 text-white font-black py-2.5 px-4 rounded-xl text-base sm:text-lg uppercase tracking-wider mb-4 shadow-md">
          OFERTA ESPECIAL APENAS HOJE!!!
        </div>

        {/* Product Bundle Mockup */}
        <div className="mb-4">
          <ProductBundleMockup />
        </div>

        {/* Price Box */}
        <div className="mb-4 mt-6">
          <p className="text-xs sm:text-sm text-gray-400 font-extrabold line-through uppercase">
            De R$ 37,90 Por Apenas
          </p>
          <div className="flex items-baseline justify-center space-x-1">
            <span className="text-xl font-black text-emerald-600">R$</span>
            <span className="text-4xl sm:text-5xl font-black text-[#12B856] tracking-tight">
              15,00
            </span>
          </div>
        </div>

        {/* Comprar Agora CTA Button */}
        <button
          onClick={onBuyClick}
          className="block w-full bg-[#12B856] hover:bg-[#0e9645] text-white font-black text-lg sm:text-xl py-4 rounded-xl shadow-xl hover:shadow-2xl transform active:scale-95 transition-all duration-200 uppercase tracking-wider cursor-pointer"
        >
          COMPRAR AGORA
        </button>
      </div>
    </section>
  );
};
