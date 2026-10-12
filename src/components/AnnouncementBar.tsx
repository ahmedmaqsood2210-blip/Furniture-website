import React, { useState, useEffect } from 'react';
import { Truck, RotateCcw, Phone } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const announcements = [
    { icon: Truck, text: 'Free Shipping on All Orders Over $199' },
    { icon: RotateCcw, text: '30-Day Easy Returns Guarantee' },
    { icon: Phone, text: 'Need Help? Call (888) 123-4567' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div className="bg-[#17241C] text-white text-[11px] sm:text-xs font-normal tracking-wide h-[30px] sm:h-[32px] flex items-center border-b border-[#243329] px-4 select-none transition-colors">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Desktop 3 Columns */}
        <div className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors">
          <Truck className="w-3.5 h-3.5 text-[#B29A78]" />
          <span>Free Shipping on All Orders Over $199</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors">
          <RotateCcw className="w-3.5 h-3.5 text-[#B29A78]" />
          <span>30-Day Easy Returns</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors">
          <Phone className="w-3.5 h-3.5 text-[#B29A78]" />
          <span className="text-white/70">Need Help?</span>
          <a href="tel:8881234567" className="font-medium underline decoration-white/30 hover:decoration-white hover:text-white">
            (888) 123-4567
          </a>
        </div>

        {/* Mobile Single Sliding Notice */}
        <div className="flex md:hidden items-center justify-center w-full gap-2 text-center overflow-hidden">
          {React.createElement(announcements[mobileIndex].icon, { className: 'w-3.5 h-3.5 text-[#B29A78] shrink-0' })}
          <span className="truncate transition-opacity duration-300">
            {announcements[mobileIndex].text}
          </span>
        </div>
      </div>
    </div>
  );
};
