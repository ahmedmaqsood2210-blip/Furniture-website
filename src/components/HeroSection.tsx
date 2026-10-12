import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const HeroSection: React.FC = () => {
  const { navigateTo, setActiveCategoryFilter } = useStore();

  const handleShopNow = () => {
    setActiveCategoryFilter('all');
    navigateTo('shop');
  };

  const handleExploreCollections = () => {
    // Scroll smoothly to category section on homepage
    const catSection = document.getElementById('shop-by-category');
    if (catSection) {
      catSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo('shop');
    }
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] overflow-hidden border-b border-[#E7E3DD]">
      {/* Container with responsive height matching ~340-420px reference */}
      <div className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] flex items-center">
        
        {/* Background Image: High-res warm luxury living room with cream sectional, oak coffee table, olive tree, soft daylight */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
            alt="Warm minimalist living room featuring cream sectional sofa, oak table, and soft natural sunlight"
            className="w-full h-full object-cover object-[68%_center] lg:object-[center_42%]"
            loading="eager"
          />
          {/* Subtle multi-stop gradient overlay on desktop ensuring 100% WCAG AAA text contrast while preserving photograph richness */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent sm:via-[#FAF9F6]/75 lg:from-[#FAF9F6]/95 lg:via-[#FAF9F6]/60 lg:to-transparent" />
          <div className="absolute inset-0 bg-black/10 sm:hidden" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-[1px] w-6 bg-[#B29A78]" />
              <span className="text-[10px] sm:text-[11.5px] uppercase tracking-[0.24em] font-semibold text-[#17241C]">
                TIMELESS DESIGN. MODERN LIVING.
              </span>
            </div>

            {/* Main Heading: Editorial Serif */}
            <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[54px] lg:text-[58px] leading-[1.08] font-normal text-[#17241C] tracking-tight mb-3 sm:mb-4">
              Furniture That <br />
              <span className="italic font-light">Feels Like Home</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-[14px] sm:text-[16px] text-[#242522]/85 leading-relaxed font-sans max-w-md sm:max-w-lg mb-6 sm:mb-8">
              Beautifully crafted furniture for every space. Designed with natural sustainable materials to be loved for years.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={handleShopNow}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#17241C] hover:bg-[#233529] text-white text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleExploreCollections}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white/90 hover:bg-white text-[#17241C] border border-[#17241C]/35 hover:border-[#17241C] text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 backdrop-blur-xs cursor-pointer"
              >
                EXPLORE COLLECTIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
