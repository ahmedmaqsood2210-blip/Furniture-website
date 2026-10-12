import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, RotateCcw, Heart, Check, Plus, Minus, ArrowRight, Share2, ChevronRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface ProductDetailPageProps {
  onQuickView?: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onQuickView }) => {
  const { selectedProduct, addToCart, toggleWishlist, isInWishlist, navigateTo, showToast } = useStore();

  const product = selectedProduct || PRODUCTS[0];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'dimensions' | 'care' | 'shipping'>('specs');

  const isSaved = isInWishlist(product.id);

  const handleAddToCart = () => {
    const chosenColor = product.colors[selectedColorIndex]?.name || 'Standard';
    addToCart(product, quantity, chosenColor);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.room === product.room)
  ).slice(0, 4);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#77736D] mb-6 sm:mb-8">
          <button onClick={() => navigateTo('home')} className="hover:text-[#17241C]">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-[#B29A78]" />
          <button onClick={() => navigateTo('shop')} className="hover:text-[#17241C]">
            Shop
          </button>
          <ChevronRight className="w-3 h-3 text-[#B29A78]" />
          <button
            onClick={() => navigateTo('shop', undefined, product.category)}
            className="hover:text-[#17241C]"
          >
            {product.categoryLabel}
          </button>
          <ChevronRight className="w-3 h-3 text-[#B29A78]" />
          <span className="font-semibold text-[#17241C] truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Product Hero Grid (6 cols / 6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16">
          
          {/* Left Gallery (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative bg-white border border-[#E7E3DD] rounded-[8px] overflow-hidden aspect-[4/3] sm:aspect-[1/1] max-h-[580px]">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
              />

              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#17241C] text-white text-[10px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-[2px] shadow-xs">
                    {product.badge}
                  </span>
                </div>
              )}

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-xs ${
                  isSaved ? 'bg-[#17241C] text-white' : 'bg-white/90 text-[#242522] hover:bg-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current text-[#B29A78]' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`rounded-[6px] overflow-hidden aspect-square border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-[#17241C] shadow-xs' : 'border-[#E7E3DD] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Buy Box (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Room kicker */}
              <div className="flex items-center justify-between text-xs text-[#77736D]">
                <span className="uppercase tracking-[0.18em] font-semibold">
                  {product.categoryLabel} · {product.room}
                </span>
                <button
                  onClick={handleShare}
                  className="hover:text-[#17241C] flex items-center gap-1 text-[11px]"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Title */}
              <h1 className="font-serif text-[32px] sm:text-[38px] leading-tight text-[#17241C] font-normal">
                {product.name}
              </h1>

              {/* Star Rating & Review Count */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#B29A78]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'fill-[#B29A78] text-[#B29A78]' : 'text-[#D5CFC9]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#17241C]">{product.rating.toFixed(1)}</span>
                <span className="text-xs text-[#77736D]">· ({product.reviewCount} verified reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="font-sans text-[26px] sm:text-[28px] font-bold text-[#17241C]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#77736D] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.inStock ? (
                  <span className="ml-auto text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium border border-emerald-200">
                    In Stock ({product.stockCount} units left)
                  </span>
                ) : (
                  <span className="ml-auto text-xs text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full font-medium">
                    Made to Order
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#242522]/85 leading-relaxed font-sans pt-1">
                {product.description}
              </p>

              {/* Color Swatch Selector */}
              {product.colors.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-[#E7E3DD]">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold uppercase tracking-wider text-[#17241C]">
                      Finish / Upholstery:
                    </span>
                    <span className="font-semibold text-[#17241C]">
                      {product.colors[selectedColorIndex]?.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {product.colors.map((color, idx) => (
                      <button
                        key={color.name}
                        onClick={() => {
                          setSelectedColorIndex(idx);
                          if (color.imageIndex !== undefined && product.images[color.imageIndex]) {
                            setSelectedImageIndex(color.imageIndex);
                          }
                        }}
                        className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColorIndex === idx
                            ? 'border-[#17241C] ring-2 ring-[#17241C]/20 scale-110'
                            : 'border-transparent opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColorIndex === idx && (
                          <Check className={`w-3 h-3 ${color.hex === '#EDE8E0' || color.hex === '#ECE7DF' ? 'text-black' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart Action */}
              <div className="space-y-3 pt-4 border-t border-[#E7E3DD]">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#E7E3DD] rounded bg-white h-12">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3.5 h-full text-[#77736D] hover:text-[#17241C]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-sm font-semibold text-[#17241C] min-w-[28px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3.5 h-full text-[#77736D] hover:text-[#17241C]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 h-12 bg-[#17241C] hover:bg-[#283d2f] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-[4px] flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <span>ADD TO SHOPPING BAG</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Reassurances Strip */}
              <div className="p-4 bg-white border border-[#E7E3DD] rounded-[6px] space-y-2.5 text-xs text-[#242522]">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#B29A78] shrink-0" />
                  <span><strong>Free Scheduled Delivery</strong> on this order</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <RotateCcw className="w-4 h-4 text-[#B29A78] shrink-0" />
                  <span><strong>30-Day In-Home Trial:</strong> Return or exchange hassle-free</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B29A78] shrink-0" />
                  <span><strong>10-Year Craftsmanship Guarantee</strong> on structural frame</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tabbed Specifications & Dimensions Area */}
        <div className="bg-white border border-[#E7E3DD] rounded-[8px] p-6 sm:p-10 mb-16 shadow-xs">
          {/* Tab Navigation */}
          <div className="flex border-b border-[#E7E3DD] gap-6 text-xs sm:text-sm font-medium mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 font-serif sm:text-base transition-colors ${
                activeTab === 'specs' ? 'text-[#17241C] border-b-2 border-[#17241C] font-semibold' : 'text-[#77736D] hover:text-[#17241C]'
              }`}
            >
              Specifications & Materials
            </button>
            <button
              onClick={() => setActiveTab('dimensions')}
              className={`pb-3 font-serif sm:text-base transition-colors ${
                activeTab === 'dimensions' ? 'text-[#17241C] border-b-2 border-[#17241C] font-semibold' : 'text-[#77736D] hover:text-[#17241C]'
              }`}
            >
              Dimensions & Sizing
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`pb-3 font-serif sm:text-base transition-colors ${
                activeTab === 'care' ? 'text-[#17241C] border-b-2 border-[#17241C] font-semibold' : 'text-[#77736D] hover:text-[#17241C]'
              }`}
            >
              Care & Maintenance
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3 font-serif sm:text-base transition-colors ${
                activeTab === 'shipping' ? 'text-[#17241C] border-b-2 border-[#17241C] font-semibold' : 'text-[#77736D] hover:text-[#17241C]'
              }`}
            >
              White-Glove Delivery
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                  Authentic Materials
                </h4>
                <ul className="space-y-1.5 text-[#242522]">
                  {product.materials.map((m, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B29A78]" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                  Technical Details
                </h4>
                <dl className="space-y-2">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-[#F5F2EC]">
                      <dt className="text-[#77736D]">{key}</dt>
                      <dd className="font-medium text-[#17241C] text-right">{val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}

          {activeTab === 'dimensions' && (
            <div className="space-y-4 max-w-xl text-xs sm:text-sm">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                Overall Dimensions
              </h4>
              <div className="grid grid-cols-3 gap-4 p-4 bg-[#FAF9F6] border border-[#E7E3DD] rounded text-center">
                <div>
                  <span className="text-[11px] text-[#77736D] block uppercase">Width</span>
                  <strong className="text-base font-serif text-[#17241C]">{product.dimensions.width}</strong>
                </div>
                <div>
                  <span className="text-[11px] text-[#77736D] block uppercase">Depth</span>
                  <strong className="text-base font-serif text-[#17241C]">{product.dimensions.depth}</strong>
                </div>
                <div>
                  <span className="text-[11px] text-[#77736D] block uppercase">Height</span>
                  <strong className="text-base font-serif text-[#17241C]">{product.dimensions.height}</strong>
                </div>
              </div>
              {product.dimensions.seatHeight && (
                <p className="text-xs text-[#77736D]">
                  Seat Height: <strong className="text-[#17241C]">{product.dimensions.seatHeight}</strong> (ergonomically tailored for comfortable dining and lounge postures).
                </p>
              )}
            </div>
          )}

          {activeTab === 'care' && (
            <div className="space-y-3 text-xs sm:text-sm text-[#242522]">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                Recommended Care Guidelines
              </h4>
              <ul className="space-y-2">
                {product.careInstructions.map((inst, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B29A78] shrink-0 mt-0.5" />
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-3 text-xs sm:text-sm text-[#242522]">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                Our White-Glove Promise
              </h4>
              <p className="text-[#77736D] leading-relaxed">
                Large furniture pieces are shipped via specialized freight partners. A scheduling coordinator will contact you 24–48 hours before arrival to confirm a convenient 2-hour window. Our team unpacks, places the piece in your desired room, completes all assembly, and removes all packing materials.
              </p>
            </div>
          )}
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77736D] block mb-1">
                  COORDINATING PIECES
                </span>
                <h3 className="font-serif text-[24px] sm:text-[30px] text-[#17241C] font-normal">
                  Complete the Look
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
