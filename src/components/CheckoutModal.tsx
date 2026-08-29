import React, { useState } from 'react';

export const CheckoutModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(
      '00020126580014BR.GOV.BCB.PIX0136mundocursivo-kit-caligrafia-15real520400005303986540515.005802BR5925Mundo Cursivo Ebookteca6009SAO PAULO62070503***6304E8A2'
    );
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleCompletePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full relative shadow-2xl border-4 border-emerald-500 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold text-xl w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
        >
          ✕
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center mb-4">
              <span className="bg-emerald-100 text-emerald-800 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                Checkout 100% Seguro
              </span>
              <h3 className="text-xl font-black text-gray-900">
                Garanta Seu Kit por Apenas R$ 15,00
              </h3>
              <p className="text-xs text-gray-500 font-bold">
                Acesso imediato enviado via WhatsApp e E-mail.
              </p>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`py-3 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center space-x-1.5 border transition cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-md'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <span>❖</span>
                <span>PIX (Acesso Instantâneo)</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-3 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center space-x-1.5 border transition cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-md'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <span>💳</span>
                <span>Cartão de Crédito</span>
              </button>
            </div>

            {paymentMethod === 'pix' ? (
              <div className="text-center bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200">
                <p className="text-xs font-black text-emerald-800 mb-2">
                  Escaneie o QR Code ou Copie o Código Pix:
                </p>
                {/* Simulated QR Code */}
                <div className="w-36 h-36 bg-white mx-auto p-2 rounded-xl border border-gray-300 shadow-inner flex items-center justify-center mb-3">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="5" y="5" width="30" height="30" fill="#000" />
                    <rect x="10" y="10" width="20" height="20" fill="#fff" />
                    <rect x="15" y="15" width="10" height="10" fill="#000" />

                    <rect x="65" y="5" width="30" height="30" fill="#000" />
                    <rect x="70" y="10" width="20" height="20" fill="#fff" />
                    <rect x="75" y="15" width="10" height="10" fill="#000" />

                    <rect x="5" y="65" width="30" height="30" fill="#000" />
                    <rect x="10" y="70" width="20" height="20" fill="#fff" />
                    <rect x="15" y="75" width="10" height="10" fill="#000" />

                    <rect x="40" y="40" width="20" height="20" fill="#10b981" />
                    <path d="M 40 10 L 60 10 M 40 25 L 55 25 M 65 65 L 95 65 M 70 80 L 90 90" stroke="#000" strokeWidth="6" />
                  </svg>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 rounded-xl shadow-sm transition mb-2 cursor-pointer uppercase tracking-wider"
                >
                  {copiedPix ? '✓ PIX COPIADO COM SUCESSO!' : '📋 COPIAR CÓDIGO PIX'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsSuccess(true)}
                  className="w-full bg-[#12B856] text-white font-black text-sm py-3 rounded-xl shadow-md uppercase tracking-wide cursor-pointer hover:bg-emerald-700"
                >
                  Já Realizei o Pagamento
                </button>
              </div>
            ) : (
              <form onSubmit={handleCompletePayment} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sua Nome Completo"
                    className="w-full px-3 py-2 border rounded-xl text-xs font-semibold focus:outline-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="0000 0000 0000 0000"
                    className="w-full px-3 py-2 border rounded-xl text-xs font-semibold focus:outline-sky-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      Validade
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MM/AA"
                      className="w-full px-3 py-2 border rounded-xl text-xs font-semibold focus:outline-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      className="w-full px-3 py-2 border rounded-xl text-xs font-semibold focus:outline-sky-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#12B856] hover:bg-[#0e9645] text-white font-black text-sm py-3 rounded-xl shadow-md uppercase tracking-wide cursor-pointer mt-2"
                >
                  PAGAR R$ 15,00 AGORA
                </button>
              </form>
            )}
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
              ✓
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Pagamento Confirmado!
            </h3>
            <p className="text-sm text-gray-600 font-semibold mb-6">
              O link de acesso com os 5 cadernos em PDF foi enviado para o seu WhatsApp e E-mail!
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="bg-emerald-600 text-white font-black px-6 py-3 rounded-xl uppercase tracking-wider text-xs cursor-pointer shadow-md"
            >
              Concluir
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
