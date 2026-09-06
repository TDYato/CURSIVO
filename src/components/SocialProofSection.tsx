import React from 'react';

// Imagens de provas sociais reais geradas
import prova4 from '../assets/images/prova_social_whatsapp_4_1788656882025.jpg';

interface ProofItem {
  id: string;
  image: string;
  author: string;
}

const SOCIAL_PROOFS: ProofItem[] = [
  {
    id: 'proof-1',
    image: 'https://i.postimg.cc/pLmw9xtp/social-01.webp',
    author: 'Depoimento 1',
  },
  {
    id: 'proof-2',
    image: 'https://i.postimg.cc/sgPp4Gz9/social-02.webp',
    author: 'Depoimento 2',
  },
  {
    id: 'proof-3',
    image: 'https://i.postimg.cc/6Q3f65sR/social-03.webp',
    author: 'Depoimento 3',
  },
  {
    id: 'proof-4',
    image: prova4,
    author: 'Depoimento 4',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-14 md:py-20 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-sky-100/60 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight mb-3">
            Mães e professoras que já usam e recomendam
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed">
            Quem já recebeu o material destaca a praticidade de imprimir e usar as atividades no dia a dia.
          </p>
        </div>

        {/* Grid de Divs com Imagens de Provas Sociais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-start">
          {SOCIAL_PROOFS.map((proof) => (
            <div
              key={proof.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm min-h-[220px] flex items-center justify-center bg-slate-50"
            >
              <img
                src={proof.image}
                alt={proof.author}
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
