import React, { useState, useEffect } from 'react';

export const TopAlertBar: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick }) => {
  const [currentDate, setCurrentDate] = useState<string>(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}`;
  });

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      setCurrentDate(`${day}/${month}`);
    };

    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={onCtaClick}
      className={`w-full bg-[#E52E2D] text-white py-2.5 sm:py-3 px-4 text-center font-extrabold text-xs sm:text-sm md:text-base tracking-wide flex items-center justify-center gap-2 shadow-sm select-none ${
        onCtaClick ? 'cursor-pointer hover:bg-[#d62828] transition-colors' : ''
      }`}
    >
      <span className="text-base sm:text-lg" role="img" aria-label="Alarme">
        ⏰
      </span>
      <span className="uppercase">
        OFERTA DISPONÍVEL APENAS HOJE ({currentDate})
      </span>
    </div>
  );
};
