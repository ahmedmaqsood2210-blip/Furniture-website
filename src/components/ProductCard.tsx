import React, { useState } from 'react';
import { Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, toggleWishlist, isInWishlist, navigateTo } = useStore();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeImage = product.images[product.colors[selectedColorIndex]?.imageIndex || 0] || product.images[0];
  const isSaved = isInWishlist(product.id);

  const handleCardClick = () => {
    navigateTo('product', product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const chosenColor = product.colors[selectedColorIndex]?.name || product.colors[0]?.name;
    addToCart(product, 1, chosenColor);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white border border-[#E7E3DD] rounded-[8px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#D5CFC9] cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-square w-full bg-[#FAF9F6] overflow-hidden">
        {/* Product Image */}
        <img
          src={activeImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Upper Left Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#17241C] text-white text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-[2px] shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Upper Right Action Buttons: Wishlist & Quick View */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleToggleWishlist}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-xs ${
              isSaved
                ? 'bg-[#17241C] text-white'
                : 'bg-white/90 text-[#242522] hover:bg-white hover:text-[#17241C]'
            }`}
            aria-label={isSaved ? 'Remove from favorites' : 'Save to favorites'}
            title="Add to Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#B29A78]' : ''}`} />
          </button>

          {onQuickView && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-8 h-8 rounded-full bg-white/90 text-[#242522] hover:bg-white hover:text-[#17241C] flex items-center justify-center shadow-xs transition-colors"
              aria-label="Quick preview"
              title="Quick Preview"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Color Swatches (Overlay at bottom of image if multiple colors) */}
        {product.colors.length > 1 && (
          <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-2 py-1 rounded-full border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.colors.map((color, idx) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColorIndex(idx);
                }}
                className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                  selectedColorIndex === idx ? 'scale-125 ring-1 ring-[#17241C]' : 'scale-100 opacity-80'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Info Section */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Category / Kicker */}
          <span className="text-[10px] uppercase tracking-[0.16em] text-[#77736D] font-medium block mb-1">
            {product.categoryLabel}
          </span>

          {/* Product Name */}
          <h3 className="font-serif text-[17px] sm:text-[18px] text-[#17241C] font-normal leading-snug group-hover:text-[#B29A78] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[15px] font-sans font-semibold text-[#17241C]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[13px] font-sans text-[#77736D] line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Line: Star Rating & Add to Cart Button */}
        <div className="flex items-center justify-between pt-2 border-t border-[#F5F2EC]">
          {/* Star Rating and Review Count */}
          <div className="flex items-center gap-1 text-[#242522]">
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
            <span className="text-[11.5px] font-medium text-[#77736D] ml-0.5">
              ({product.reviewCount})
            </span>
          </div>

          {/* Small Dark Square Add-To-Cart Button with White Cart Icon */}
          <button
            onClick={handleAddToCart}
            className="w-8 h-8 rounded-[4px] bg-[#17241C] hover:bg-[#283d2f] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs cursor-pointer group/btn"
            aria-label={`Add ${product.name} to cart`}
            title="Add to Shopping Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};
