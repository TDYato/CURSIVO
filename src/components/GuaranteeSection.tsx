import React from 'react';
import { GuaranteeSeal } from './Illustrations';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* 7-Day Gold Guarantee Ribbon Seal */}
        <div className="mb-6">
          <GuaranteeSeal />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight">
          Satisfação garantida ou seu dinheiro de volta!
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-semibold max-w-xl mx-auto">
          Aqui, sua satisfação vem em primeiro lugar! Por isso, oferecemos{' '}
          <span className="font-extrabold text-gray-900 underline decoration-amber-400">
            garantia de 7 dias
          </span>
          : se o produto não atender às suas expectativas, você pode solicitar o reembolso total dentro desse prazo. Simples assim!
        </p>

      </div>
    </section>
  );
};
