import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

interface BestSellersProps {
  onQuickView?: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({ onQuickView }) => {
  const { navigateTo, setActiveCategoryFilter } = useStore();

  // Retrieve the 4 featured best-selling items
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6] border-t border-[#E7E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#77736D] block mb-2">
              BESTSELLERS
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] text-[#17241C] font-normal">
              Customer Favorites
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              navigateTo('shop');
            }}
            className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold tracking-[0.1em] uppercase text-[#17241C] hover:text-[#B29A78] transition-colors group cursor-pointer self-start sm:self-auto"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
