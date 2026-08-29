import React, { useState } from 'react';

export const ActivitiesPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const modules = [
    {
      id: 1,
      title: 'Módulo 1: Traçados do Alfabeto',
      subtitle: 'Treino de traçados minúsculos e maiúsculos',
      letters: ['a', 'b', 'c', 'd'],
      phrase: 'a a a a a a a a a a a a',
      bgColor: 'from-amber-50 to-orange-50',
    },
    {
      id: 2,
      title: 'Módulo 2: Caligrafia Cursiva',
      subtitle: 'Formação de palavras com ligação correta',
      letters: ['Amor', 'Bola', 'Casa', 'Dado'],
      phrase: 'A terra é perfeita para plantar.',
      bgColor: 'from-sky-50 to-blue-50',
    },
    {
      id: 3,
      title: 'Módulo 3: Sílabas Simples',
      subtitle: 'Associação de famílias silábicas',
      letters: ['Ba', 'Be', 'Bi', 'Bo', 'Bu'],
      phrase: 'O pato nada no lago azul.',
      bgColor: 'from-emerald-50 to-teal-50',
    },
    {
      id: 4,
      title: 'Módulo 4: Produção de Frases',
      subtitle: 'Estruturação de frases completas e pontuação',
      letters: ['Frase 1', 'Frase 2', 'Frase 3'],
      phrase: 'Maria ama ler livros de aventuras.',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      id: 5,
      title: 'Módulo 5: Coordenação Motora',
      subtitle: 'Linhas pontilhadas, curvas e labirintos',
      letters: ['➰', '〰️', '🌀', '⚡'],
      phrase: 'Cubra o pontilhado com firmeza.',
      bgColor: 'from-rose-50 to-orange-50',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase tracking-tight">
          EXEMPLOS DE ATIVIDADES
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-bold mb-8 max-w-2xl mx-auto">
          São 5 módulos com mais de 400 páginas para aprender e treinar letra cursiva
        </p>

        {/* Module Navigation Tabs */}
        <div className="flex justify-center items-center space-x-1 sm:space-x-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
          {modules.map((mod, idx) => (
            <button
              key={mod.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
                activeTab === idx
                  ? 'bg-sky-500 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Módulo {mod.id}
            </button>
          ))}
        </div>

        {/* Activity Sheet Interactive Preview Mockup */}
        <div className="relative max-w-md mx-auto my-4 group">
          <div
            onClick={() => setLightboxOpen(true)}
            className="cursor-pointer bg-white rounded-2xl border-4 border-amber-300 p-5 shadow-xl hover:shadow-2xl transition duration-300 text-left relative overflow-hidden"
          >
            {/* Page Header (EBOOKTECA Style) */}
            <div className="border-b-2 border-dashed border-sky-300 pb-3 mb-4 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest block">EBOOKTECA</span>
                <span className="text-xs font-bold text-gray-700 block">Nome: _______________________</span>
                <span className="text-[11px] text-gray-500 block">Professora: ________ Data: __/__/__</span>
              </div>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2 py-0.5 rounded">
                Pág. {activeTab * 20 + 1}
              </span>
            </div>

            {/* Instruction Banner */}
            <div className="bg-sky-50 p-2.5 rounded-lg border border-sky-200 mb-4">
              <p className="text-xs font-extrabold text-sky-800">
                ✍️ {modules[activeTab].subtitle}
              </p>
              <p className="text-[11px] text-sky-600 font-semibold">
                Cubra o pontilhado e forme a letra:
              </p>
            </div>

            {/* Handwriting Lines */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="border-b border-gray-200 pb-2">
                <div className="flex justify-between text-base font-mono tracking-widest text-gray-400 font-bold">
                  <span className="border-b-2 border-dashed border-sky-400 text-sky-600">
                    {modules[activeTab].letters[0]}
                  </span>
                  <span className="border-b border-dashed border-gray-300">
                    {modules[activeTab].letters[0]}
                  </span>
                  <span className="border-b border-dashed border-gray-300">
                    {modules[activeTab].letters[0]}
                  </span>
                  <span className="border-b border-dashed border-gray-300">
                    {modules[activeTab].letters[0]}
                  </span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="border-b border-gray-200 pb-2">
                <p className="text-xs font-bold text-gray-500 mb-1">Frase Cursiva Guiada:</p>
                <p className="text-sm font-serif italic text-sky-700 tracking-wide font-extrabold">
                  {modules[activeTab].phrase}
                </p>
                <p className="text-sm font-serif italic text-gray-300 tracking-wide font-extrabold select-none mt-1">
                  {modules[activeTab].phrase}
                </p>
              </div>

              {/* Row 3 */}
              <div className="border-b border-gray-200 pb-2">
                <div className="h-10 border-b-2 border-dashed border-gray-200 flex items-center justify-between text-xs text-gray-300">
                  <span>................................................................</span>
                </div>
              </div>
            </div>

            {/* Zoom Overlay Hint */}
            <div className="absolute inset-0 bg-sky-900/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-2xl">
              <span className="bg-white text-gray-900 font-extrabold text-xs px-4 py-2 rounded-full shadow-lg flex items-center space-x-1">
                <span>🔍</span>
                <span>Clique para ampliar</span>
              </span>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-4">
            {modules.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === idx ? 'bg-sky-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para módulo ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold text-xl w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>

              <h3 className="text-xl font-black text-gray-900 mb-1">
                {modules[activeTab].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                {modules[activeTab].subtitle}
              </p>

              <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-300">
                <div className="border-b-2 border-dashed border-amber-400 pb-2 mb-4">
                  <span className="font-mono font-bold text-amber-900 text-sm">MUNDO CURSIVO • PDF PARA IMPRESSÃO</span>
                </div>
                <div className="space-y-4 font-serif italic text-lg text-sky-800 font-bold">
                  <p className="border-b border-sky-200 pb-2">✓ {modules[activeTab].phrase}</p>
                  <p className="border-b border-sky-200 pb-2">✓ Atividade pronta e 100% diagramada</p>
                  <p className="border-b border-sky-200 pb-2">✓ Para crianças do 1º ao 6º ano</p>
                </div>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="mt-6 w-full bg-[#12B856] text-white font-extrabold py-3 rounded-xl shadow-md uppercase tracking-wider cursor-pointer"
              >
                Fechar Visualização
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
