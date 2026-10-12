import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, Check } from 'lucide-react';
import { LOOKBOOKS, PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { LookbookItem } from '../types';

export const ShopTheLook: React.FC = () => {
  const { navigateTo, addToCart } = useStore();
  const [activeLook, setActiveLook] = useState<LookbookItem | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6] border-t border-[#E7E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#77736D] block mb-2">
              CURATED INTERIORS
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] text-[#17241C] font-normal">
              Shop The Look
            </h2>
          </div>

          <p className="text-[13px] sm:text-[14px] text-[#77736D] max-w-md">
            Harmonious interior palettes curated by our design studio. Click any space to discover the exact coordinating pieces.
          </p>
        </div>

        {/* 4 Editorial Look Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {LOOKBOOKS.map((look) => {
            const featuredCount = look.featuredProductIds.length;
            return (
              <div
                key={look.id}
                onClick={() => setActiveLook(look)}
                className="group relative bg-white border border-[#E7E3DD] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Look Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E9E2DA]">
                  <img
                    src={look.image}
                    alt={look.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle room tag */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-xs text-[#17241C] text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-[2px] shadow-xs">
                      {look.room}
                    </span>
                  </div>

                  {/* Hotspot indicator badge */}
                  <div className="absolute bottom-3 right-3 bg-[#17241C]/85 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-3 h-3 text-[#B29A78]" />
                    <span>{featuredCount} Featured Pieces</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-[18px] sm:text-[19px] text-[#17241C] font-medium group-hover:text-[#B29A78] transition-colors">
                      {look.title}
                    </h3>
                    <p className="text-[12px] text-[#77736D] mt-1.5 line-clamp-2 leading-relaxed">
                      {look.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#F5F2EC] flex items-center justify-between text-[11.5px] font-semibold tracking-wider uppercase text-[#17241C] group-hover:text-[#B29A78] transition-colors">
                    <span>Explore Space</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Look Modal when clicked */}
      {activeLook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FAF9F6] border border-[#E7E3DD] rounded-[10px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            
            <button
              onClick={() => setActiveLook(null)}
              className="absolute top-4 right-4 p-2 text-[#77736D] hover:text-[#17241C] hover:bg-black/5 rounded-full"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B29A78]">
                {activeLook.room}
              </span>
            </div>

            <h3 className="font-serif text-[26px] sm:text-[30px] text-[#17241C] font-normal mb-2">
              {activeLook.title}
            </h3>

            <p className="text-[13.5px] text-[#77736D] mb-6">
              {activeLook.description}
            </p>

            <div className="rounded-[8px] overflow-hidden mb-6 aspect-[16/9] max-h-[320px] bg-black/5">
              <img
                src={activeLook.image}
                alt={activeLook.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-[11px] uppercase font-bold tracking-[0.18em] text-[#17241C] mb-3">
              Included Products in this Space
            </h4>

            <div className="space-y-3">
              {activeLook.featuredProductIds.map((id) => {
                const prod = PRODUCTS.find((p) => p.id === id);
                if (!prod) return null;
                return (
                  <div
                    key={prod.id}
                    className="flex items-center justify-between p-3 bg-white border border-[#E7E3DD] rounded-[6px] hover:border-[#D5CFC9] transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-14 h-14 object-cover rounded-[4px] bg-[#FAF9F6]"
                      />
                      <div>
                        <h5 className="font-serif text-[15px] font-medium text-[#17241C]">
                          {prod.name}
                        </h5>
                        <span className="text-[13px] font-semibold text-[#17241C]">
                          ${prod.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setActiveLook(null);
                          navigateTo('product', prod.id);
                        }}
                        className="px-3 py-1.5 text-xs text-[#242522] hover:text-[#17241C] border border-[#E7E3DD] rounded hover:bg-[#FAF9F6] transition-colors"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => addToCart(prod, 1)}
                        className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#17241C] text-white rounded hover:bg-[#283d2f] transition-colors"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E7E3DD] flex justify-end">
              <button
                onClick={() => setActiveLook(null)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#FAF9F6] hover:bg-[#E9E2DA] border border-[#E7E3DD] rounded text-[#17241C]"
              >
                Close Look
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
