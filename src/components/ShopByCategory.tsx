import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useStore } from '../context/StoreContext';

export const ShopByCategory: React.FC = () => {
  const { navigateTo, setActiveCategoryFilter } = useStore();

  const handleSelectCategory = (slug: string) => {
    setActiveCategoryFilter(slug);
    navigateTo('shop', undefined, slug);
  };

  return (
    <section id="shop-by-category" className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#77736D] block mb-2">
              SHOP BY CATEGORY
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] text-[#17241C] font-normal">
              Find Furniture for <br className="hidden sm:inline" /> Every Room
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              navigateTo('shop');
            }}
            className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold tracking-[0.1em] uppercase text-[#17241C] hover:text-[#B29A78] transition-colors group cursor-pointer self-start sm:self-auto"
          >
            <span>VIEW ALL CATEGORIES</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5 Category Cards in Responsive Row / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleSelectCategory(cat.slug)}
              className="group relative cursor-pointer overflow-hidden rounded-[8px] bg-[#E9E2DA] aspect-[4/5] sm:aspect-[3/4] flex flex-col justify-end shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Category Image with Hover Zoom */}
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Text: Category Name & Item Count */}
              <div className="relative z-10 p-4 text-center w-full flex flex-col items-center">
                <h3 className="font-serif text-[17px] sm:text-[19px] md:text-[20px] text-white font-medium tracking-wide drop-shadow-xs group-hover:text-[#F7F4EE] transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-white/80 mt-1">
                  {cat.itemCount}
                </span>
                
                {/* Subtle indicator bar on hover */}
                <div className="w-0 h-[1.5px] bg-[#B29A78] mt-2 group-hover:w-8 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
