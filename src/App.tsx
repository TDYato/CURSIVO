import { useState } from 'react';
import { Hero } from './components/Hero';
import { SignalsSection } from './components/SignalsSection';
import { MethodSection } from './components/MethodSection';
import { ActivitiesPreview } from './components/ActivitiesPreview';
import { HowItWorks } from './components/HowItWorks';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Montserrat',sans-serif] antialiased flex flex-col selection:bg-sky-500 selection:text-white">
      
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

        {/* How It Works Section */}
        <HowItWorks />

        {/* Special Offer Section (#oferta) */}
        <OfferSection onBuyClick={handleOpenCheckout} />

        {/* 7-Day Satisfaction Guarantee Section */}
        <GuaranteeSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />



    </div>
  );
}
