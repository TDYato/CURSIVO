import React, { useState, useEffect, useCallback } from 'react';
import { TopAlertBar } from './components/TopAlertBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignalsSection } from './components/SignalsSection';
import { MethodSection } from './components/MethodSection';
import { ActivitiesPreview } from './components/ActivitiesPreview';
import { SocialProofSection } from './components/SocialProofSection';
import { BonusSection } from './components/BonusSection';
import { PlansOfferSection } from './components/PlansOfferSection';
import { HowItWorks } from './components/HowItWorks';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Footer } from './components/Footer';
import { DownsellModal } from './components/DownsellModal';
import { LoginPage } from './components/LoginPage';
import { MembersArea } from './components/MembersArea';

const getInitialPath = (): string => {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase().replace('#', '');
  if (path.includes('/login') || hash === '/login' || hash === 'login') return '/login';
  if (path.includes('/membros') || hash === '/membros' || hash === 'membros') return '/membros';
  return '/';
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('membros_auth');
  });
  const [isDownsellOpen, setIsDownsellOpen] = useState(false);

  // Sync with browser navigation (back/forward buttons)
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (path.includes('/login') || hash === '/login' || hash === 'login') {
        setCurrentPath('/login');
      } else if (path.includes('/membros') || hash === '/membros' || hash === 'membros') {
        setCurrentPath('/membros');
      } else {
        setCurrentPath('/');
      }
      setIsAuthenticated(!!localStorage.getItem('membros_auth'));
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setIsAuthenticated(!!localStorage.getItem('membros_auth'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleLoginSuccess = useCallback(() => {
    setIsAuthenticated(true);
    navigate('/membros');
  }, [navigate]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('membros_auth');
    setIsAuthenticated(false);
    navigate('/login');
  }, [navigate]);

  const handleNavigateHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const scrollToOffer = useCallback(() => {
    const offerElement = document.getElementById('offer') || document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleOpenDownsell = useCallback(() => {
    setIsDownsellOpen(true);
  }, []);

  const handleCloseDownsell = useCallback(() => {
    setIsDownsellOpen(false);
  }, []);

  const handleAcceptDownsell = useCallback(() => {
    setIsDownsellOpen(false);
  }, []);

  const handleDeclineDownsell = useCallback(() => {
    setIsDownsellOpen(false);
  }, []);

  // Route: /login
  if (currentPath === '/login') {
    return (
      <LoginPage
        onLoginSuccess={handleLoginSuccess}
        onNavigateHome={handleNavigateHome}
      />
    );
  }

  // Route: /membros (Protected Route)
  if (currentPath === '/membros') {
    if (!isAuthenticated) {
      return (
        <LoginPage
          onLoginSuccess={handleLoginSuccess}
          onNavigateHome={handleNavigateHome}
        />
      );
    }

    return (
      <MembersArea
        onLogout={handleLogout}
        onNavigateHome={handleNavigateHome}
      />
    );
  }

  // Route: / (Landing Page)
  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Montserrat',sans-serif] antialiased flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Top Urgency Alert Bar */}
      <TopAlertBar onCtaClick={scrollToOffer} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onCtaClick={scrollToOffer} />

        {/* Signals / Difficulties Section */}
        <SignalsSection />

        {/* Method Section (Sky Blue Background) */}
        <MethodSection />

        {/* Activities Preview Carousel */}
        <ActivitiesPreview />

        {/* Social Proof Section (Mães e professoras que já usam e recomendam) */}
        <SocialProofSection />

        {/* Bonus Section */}
        <BonusSection onCtaClick={scrollToOffer} />

        {/* Offer / Plans Section (Escolha o seu plano) */}
        <PlansOfferSection onBasicPlanClick={handleOpenDownsell} />

        {/* How It Works Section */}
        <HowItWorks />

        {/* 7-Day Satisfaction Guarantee Section */}
        <GuaranteeSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Downsell Retention Modal (Triggered by Plano Básico) */}
      <DownsellModal
        isOpen={isDownsellOpen}
        onClose={handleCloseDownsell}
        onAccept={handleAcceptDownsell}
        onDecline={handleDeclineDownsell}
        checkoutUrl="https://pay.kiwify.com.br/bXd3PL9"
        basicPlanCheckoutUrl="https://pay.kiwify.com.br/lQDvHZo"
      />
    </div>
  );
}
