import React from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface SalePageProps {
  onQuickView?: (product: Product) => void;
}

export const SalePage: React.FC<SalePageProps> = ({ onQuickView }) => {
  const { navigateTo } = useStore();

  const saleProducts = PRODUCTS.filter((p) => p.originalPrice && p.originalPrice > p.price);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-[#17241C] text-white rounded-[10px] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[#B29A78] text-[11px] uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIMITED ARCHIVE EVENT</span>
            </div>
            <h1 className="font-serif text-[30px] sm:text-[40px] font-normal leading-tight">
              Exclusive Seasonal Reductions
            </h1>
            <p className="text-xs sm:text-sm text-white/75 max-w-lg">
              Enjoy up to 25% savings on select studio pieces. Each item retains our full 10-year craftsmanship warranty.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-md p-4 text-center shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-white/70 block">
              Extra 10% Off Promo Code
            </span>
            <span className="font-mono text-[18px] font-bold text-[#B29A78] block my-1">
              NOVA10
            </span>
            <span className="text-[11px] text-white/80 block">
              Applied automatically at checkout
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#17241C]">
              {saleProducts.length} Pieces Available on Sale
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {saleProducts.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
