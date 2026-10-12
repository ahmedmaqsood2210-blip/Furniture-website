import React, { useState } from 'react';
import { X, Star, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart, navigateTo } = useStore();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!product) return null;

  const handleAdd = () => {
    const chosenColor = product.colors[selectedColorIndex]?.name || 'Standard';
    addToCart(product, 1, chosenColor);
    onClose();
  };

  const handleGoToDetails = () => {
    onClose();
    navigateTo('product', product.id);
  };

  const activeImage = product.images[product.colors[selectedColorIndex]?.imageIndex || 0] || product.images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-[#E7E3DD] rounded-[10px] max-w-2xl w-full overflow-hidden shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white text-[#77736D] hover:text-[#17241C]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square bg-[#FAF9F6] overflow-hidden">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-[#17241C] text-white text-[9.5px] uppercase tracking-wider font-semibold px-2 py-1 rounded">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#77736D] block">
                {product.categoryLabel} · {product.room}
              </span>

              <h3 className="font-serif text-[22px] text-[#17241C] leading-snug">
                {product.name}
              </h3>

              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#B29A78]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) ? 'fill-[#B29A78] text-[#B29A78]' : 'text-[#D5CFC9]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#77736D]">({product.reviewCount})</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[18px] font-bold text-[#17241C]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#77736D] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-xs text-[#77736D] line-clamp-3 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Color selector */}
              {product.colors.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-[#F5F2EC]">
                  <span className="text-[11px] font-bold text-[#17241C] block">
                    Color: {product.colors[selectedColorIndex]?.name}
                  </span>
                  <div className="flex gap-2">
                    {product.colors.map((c, i) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColorIndex(i)}
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          selectedColorIndex === i ? 'ring-1 ring-[#17241C] scale-110' : 'opacity-80'
                        }`}
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2 pt-4 border-t border-[#F5F2EC]">
              <button
                onClick={handleAdd}
                className="w-full py-3 bg-[#17241C] hover:bg-[#283d2f] text-white text-xs uppercase font-semibold tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Shopping Bag</span>
              </button>

              <button
                onClick={handleGoToDetails}
                className="w-full py-2 text-xs font-semibold uppercase tracking-wider text-[#17241C] hover:text-[#B29A78] text-center block transition-colors"
              >
                View Full Product Specifications →
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
