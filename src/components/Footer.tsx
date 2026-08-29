import React from 'react';
import { PaymentLogos, SecuritySeals } from './Illustrations';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 text-xs text-gray-600">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left items-center">
        
        {/* Payment Methods & Security Seals */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="font-extrabold text-gray-800 uppercase tracking-wider text-sm">
            Formas de Pagamento
          </h4>
          <PaymentLogos />
          <SecuritySeals />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2 border-t md:border-t-0 pt-6 md:pt-0 border-gray-200">
          <h4 className="font-extrabold text-gray-800 uppercase tracking-wider text-sm mb-1">
            Contato
          </h4>
          <a
            href="https://wa.me/5599984283075"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 font-bold transition"
          >
            <span>📱</span>
            <span>(99) 98428-3075</span>
          </a>
          <a
            href="mailto:contatoebookteca@gmail.com"
            className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 font-bold transition"
          >
            <span>✉️</span>
            <span>contatoebookteca@gmail.com</span>
          </a>
          <div className="flex items-center space-x-2 text-gray-700 font-bold">
            <span>📷</span>
            <span>@atividadescursiva</span>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-4xl mx-auto px-4 mt-8 pt-4 border-t border-gray-200 text-center text-[11px] text-gray-400 font-semibold">
        © {new Date().getFullYear()} Mundo Cursivo. Todos os direitos reservados. Kit de Caligrafia Infantil PDF.
      </div>
    </footer>
  );
};
