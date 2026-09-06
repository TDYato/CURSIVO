import React from 'react';

interface ActivityItem {
  id: string;
  title: string;
  image: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    title: 'Alfabeto maiúsculo e minúsculo',
    image: 'https://i.ibb.co/bgBXV58M/1-demo-alfabeto.png',
  },
  {
    id: 'act-2',
    title: 'Sílabas e palavras',
    image: 'https://i.ibb.co/Kcv7WMMz/2-demo-silabas.png',
  },
  {
    id: 'act-3',
    title: 'Frases para copiar',
    image: 'https://i.ibb.co/nN23wQmy/3-demo-frases.png',
  },
  {
    id: 'act-4',
    title: 'Números e traçados',
    image: 'https://i.ibb.co/DfRvxrKK/4-demo-numeros.png',
  },
  {
    id: 'act-5',
    title: 'Coordenação motora fina',
    image: 'https://i.ibb.co/bj3kFxdy/5-demo-coordenacao.png',
  },
  {
    id: 'act-6',
    title: 'Caderno prático de caligrafia',
    image: 'https://i.ibb.co/1DDpVB4/6-demo-caderno.png',
  },
];

export const ActivitiesPreview: React.FC = () => {
  return (
    <section id="examples" className="py-8 sm:py-12 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 leading-tight text-slate-900">
          Veja exemplos do que a criança vai praticar
        </h2>
        <p className="text-sm sm:text-lg text-slate-600 mb-4 sm:mb-6">
          São atividades simples, organizadas e prontas para imprimir, pensadas para facilitar o treino da escrita no dia a dia.
        </p>
      </div>

      <div className="w-full overflow-hidden relative py-4 select-none">
        {/* Sombras/Fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Carrossel Infinito (Marquee) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {/* Bloco 1 (Original) */}
          <div className="flex shrink-0">
            {ACTIVITIES.map((activity) => (
              <div key={`block1-${activity.id}`} className="px-2 md:px-3 shrink-0">
                <div className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2rem] border-2 border-slate-100 shadow-xs flex flex-col items-center group w-[210px] sm:w-[280px] md:w-[350px] transition-all duration-300">
                  <div className="aspect-[1/1.4] w-full bg-slate-50 rounded-[1rem] md:rounded-[1.5rem] relative overflow-hidden border border-slate-100">
                    <img
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      src={activity.image}
                    />
                  </div>
                  <div className="py-2 px-1 text-center w-full">
                    <span className="font-extrabold text-slate-800 text-xs sm:text-sm md:text-base block leading-tight truncate">
                      {activity.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bloco 2 (Duplicado para o efeito contínuo) */}
          <div className="flex shrink-0">
            {ACTIVITIES.map((activity) => (
              <div key={`block2-${activity.id}`} className="px-2 md:px-3 shrink-0">
                <div className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2rem] border-2 border-slate-100 shadow-xs flex flex-col items-center group w-[210px] sm:w-[280px] md:w-[350px] transition-all duration-300">
                  <div className="aspect-[1/1.4] w-full bg-slate-50 rounded-[1rem] md:rounded-[1.5rem] relative overflow-hidden border border-slate-100">
                    <img
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      src={activity.image}
                    />
                  </div>
                  <div className="py-2 px-1 text-center w-full">
                    <span className="font-extrabold text-slate-800 text-xs sm:text-sm md:text-base block leading-tight truncate">
                      {activity.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
