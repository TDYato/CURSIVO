import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: '💬',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      title: 'Chega no WhatsApp',
      description:
        'Após efetuar o pagamento você receberá o acesso via WhatsApp e e-mail para poder baixá-lo.',
    },
    {
      step: 2,
      icon: '🖨️',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200',
      title: 'Baixe as atividades',
      description:
        'Baixe para seu PC ou celular, você pode imprimir quantas vezes desejar.',
    },
    {
      step: 3,
      icon: '✍️',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
      title: 'Realizar as atividades',
      description:
        'Mão na massa, é hora de realiza-las com o seu pequeno (a)! Boa diversão, realize as atividades no seu tempo.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50/70 border-t border-b border-gray-100 text-center">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">
          COMO FUNCIONA?
        </h2>

        {/* 3 Dashed Cyan Border Cards */}
        <div className="space-y-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white border-2 border-dashed border-[#4FB3E8] rounded-2xl p-4 sm:p-5 flex items-start sm:items-center space-x-4 text-left shadow-xs hover:shadow-md transition duration-200"
            >
              {/* Step Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 border ${s.iconBg} shadow-inner`}
              >
                {s.icon}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="font-extrabold text-base sm:text-lg text-gray-900 mb-0.5">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
