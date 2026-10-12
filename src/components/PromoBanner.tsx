import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const PromoBanner: React.FC = () => {
  const { navigateTo, setActiveCategoryFilter } = useStore();

  const handleExplore = () => {
    setActiveCategoryFilter('all');
    navigateTo('shop');
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wide Promotional Banner Card */}
        <div className="bg-[#E9E2DA]/40 border border-[#E7E3DD] rounded-[10px] overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-sm">
          
          {/* Left Text Panel (~48% width -> 5-6 cols on desktop) */}
          <div className="md:col-span-5 lg:col-span-5 p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center bg-[#FAF9F6] border-b md:border-b-0 md:border-r border-[#E7E3DD]">
            {/* Small uppercase label */}
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#77736D] block mb-3">
              DESIGNED TO INSPIRE
            </span>

            {/* Main Heading */}
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[36px] lg:text-[40px] leading-[1.12] text-[#17241C] font-normal mb-4">
              Modern Furniture. <br />
              <span className="italic font-light">Made for Real Life.</span>
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-[#242522]/80 leading-relaxed font-sans mb-8 max-w-md">
              Discover pieces that combine comfort, function, and timeless style. Hand-finished woods, stain-resistant bouclés, and organic silhouettes crafted to elevate every room.
            </p>

            {/* Button */}
            <div>
              <button
                onClick={handleExplore}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#17241C] hover:bg-[#243529] text-white text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>EXPLORE NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Image Container (~52% width -> 7 cols on desktop) */}
          <div className="md:col-span-7 lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] md:min-h-full overflow-hidden bg-[#E9E2DA]">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85"
              alt="Sophisticated mid-century modern living area with deep olive-green chair, natural oak console, ceramics and rug"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
            />
            {/* Soft inner vignette border */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
