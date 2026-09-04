import React, { useState } from 'react';
import { LogoImage } from './Illustrations';
import { Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle2, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (email: string) => void;
  onNavigateHome: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onNavigateHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) {
      setError('Por favor, digite seu e-mail de acesso.');
      return;
    }

    if (!trimmedPassword) {
      setError('Por favor, digite sua senha de acesso.');
      return;
    }

    setIsLoading(true);

    // Save session in localStorage (accepting any email/password as requested)
    setTimeout(() => {
      const sessionData = {
        email: trimmedEmail,
        name: trimmedEmail.split('@')[0],
        loggedInAt: Date.now()
      };
      
      localStorage.setItem('membros_auth', JSON.stringify(sessionData));
      setIsLoading(false);
      onLoginSuccess(trimmedEmail);
    }, 600);
  };

  const handleQuickDemoLogin = () => {
    const demoEmail = 'aluno@mundocursivo.com.br';
    setEmail(demoEmail);
    setPassword('123456');
    
    setIsLoading(true);
    setTimeout(() => {
      const sessionData = {
        email: demoEmail,
        name: 'Aluno VIP',
        loggedInAt: Date.now()
      };
      localStorage.setItem('membros_auth', JSON.stringify(sessionData));
      setIsLoading(false);
      onLoginSuccess(demoEmail);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 via-white to-amber-50 flex flex-col justify-between py-8 px-4 sm:px-6 font-['Montserrat',sans-serif]">
      {/* Top Header */}
      <div className="max-w-md w-full mx-auto flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1.5 transition cursor-pointer bg-white px-3 py-1.5 rounded-full shadow-xs border border-sky-100"
        >
          ← Voltar à página inicial
        </button>

        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          Acesso Seguro
        </span>
      </div>

      {/* Main Card */}
      <div className="max-w-md w-full mx-auto my-auto py-6">
        <div className="bg-white rounded-3xl shadow-xl border border-sky-100 p-6 sm:p-8 relative overflow-hidden">
          {/* Top Decorative bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-sky-400 via-[#12B856] to-amber-400" />

          {/* Brand Logo & Title */}
          <div className="text-center mb-6 pt-2">
            <div className="flex justify-center mb-3">
              <LogoImage className="h-14 sm:h-16" />
            </div>
            
            <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Área de Membros VIP
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Acesse seus Materiais em PDF
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">
              Digite seus dados para entrar e baixar todos os cadernos de caligrafia.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 animate-shake">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-extrabold text-gray-700 mb-1.5 text-left">
                E-mail de Acesso
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs sm:text-sm font-extrabold text-gray-700">
                  Senha
                </label>
                <span className="text-[11px] text-gray-400 font-medium">
                  (Qualquer senha)
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sua senha de acesso"
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition cursor-pointer"
                  aria-label={showPassword ? 'Ocultar senha' : 'Ver senha'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#12B856] hover:bg-[#0e9645] text-white font-black text-base py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider mt-2 disabled:opacity-75"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Entrando na área de membros...</span>
                </div>
              ) : (
                <>
                  <span>Entrar</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="mt-5 pt-4 border-t border-gray-100 text-center">
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-sky-600 hover:text-sky-800 transition cursor-pointer bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Testar Acesso com 1 Clique (Demo)</span>
            </button>
          </div>

          {/* Help & Benefits */}
          <div className="mt-6 bg-slate-50 rounded-2xl p-3.5 border border-slate-100 text-left">
            <p className="text-[11px] font-extrabold text-gray-700 uppercase tracking-wide mb-1.5">
              O que você encontra na área de membros:
            </p>
            <ul className="space-y-1 text-xs text-gray-600 font-semibold">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Todos os 6 Cadernos de Caligrafia em PDF</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Bônus e Cartazes de Apoio em Alta Resolução</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Impressão ilimitada para seus filhos ou alunos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer note */}
      <div className="text-center text-xs text-gray-500 font-semibold">
        Precisa de suporte? Envie um e-mail para <span className="text-sky-600 font-bold">contatoebookteca@gmail.com</span>
      </div>
    </div>
  );
};
