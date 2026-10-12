import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    cartTotalCount,
    freeShippingThreshold,
    freeShippingProgress,
    discountPercent,
    promoCode,
    appliedPromoLabel,
    applyPromoCode,
    setIsCheckoutOpen,
    navigateTo
  } = useStore();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; error?: boolean } | null>(null);

  if (!isCartOpen) return null;

  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const finalSubtotal = Math.max(0, cartSubtotal - discountAmount);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    setPromoMessage({ text: res.message, error: !res.success });
    if (res.success) setInputCode('');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#E7E3DD]">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E7E3DD] flex items-center justify-between bg-[#FAF9F6]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#17241C]" />
              <h2 className="font-serif text-[20px] font-medium text-[#17241C]">
                Shopping Bag
              </h2>
              <span className="text-xs bg-[#17241C] text-white px-2 py-0.5 rounded-full font-sans font-medium">
                {cartTotalCount}
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#77736D] hover:text-[#17241C] rounded-full hover:bg-black/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3.5 bg-[#F5F2EC] border-b border-[#E7E3DD] text-xs">
            <div className="flex items-center justify-between mb-1.5 font-medium text-[#242522]">
              {remainingForFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-[#17241C]">${remainingForFreeShipping.toFixed(2)}</strong> more for <strong>Free White-Glove Shipping</strong>
                </span>
              ) : (
                <span className="text-[#17241C] font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#B29A78]" />
                  You've unlocked Free Shipping!
                </span>
              )}
              <span className="text-[#77736D]">{freeShippingProgress}%</span>
            </div>
            
            <div className="w-full bg-[#E3DDD4] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#17241C] h-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#F5F2EC]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF9F6] border border-[#E7E3DD] flex items-center justify-center text-[#77736D]">
                  <ShoppingBag className="w-8 h-8 stroke-[1.4]" />
                </div>
                <h3 className="font-serif text-[22px] text-[#17241C]">Your bag is currently empty</h3>
                <p className="text-xs text-[#77736D] max-w-xs">
                  Discover our architectural sofas, dining tables, and bedroom collections.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('shop');
                  }}
                  className="px-6 py-3 bg-[#17241C] text-white text-xs uppercase font-semibold tracking-[0.14em] rounded-[4px] hover:bg-[#283d2f] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}`} className="py-4 first:pt-0 flex gap-3.5 sm:gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 sm:w-22 sm:h-22 object-cover rounded-[4px] bg-[#FAF9F6] border border-[#E7E3DD] shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4
                          onClick={() => {
                            setIsCartOpen(false);
                            navigateTo('product', item.product.id);
                          }}
                          className="font-serif text-[15px] sm:text-[16px] text-[#17241C] hover:text-[#B29A78] cursor-pointer transition-colors leading-snug"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                          className="text-[#77736D] hover:text-rose-600 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11.5px] text-[#77736D] mt-0.5">
                        Finish / Color: <span className="font-medium text-[#242522]">{item.selectedColor}</span>
                      </div>

                      <div className="text-[13px] font-semibold text-[#17241C] mt-1">
                        ${(item.product.price * item.quantity).toFixed(2)}
                        {item.quantity > 1 && (
                          <span className="text-[11px] font-normal text-[#77736D] ml-1.5">
                            (${item.product.price.toFixed(2)} each)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#E7E3DD] rounded bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                          className="p-1 px-2 text-[#77736D] hover:text-[#17241C] hover:bg-[#FAF9F6]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#17241C] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                          className="p-1 px-2 text-[#77736D] hover:text-[#17241C] hover:bg-[#FAF9F6]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations & Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#E7E3DD] bg-[#FAF9F6] space-y-3.5">
              
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (e.g. NOVA10)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="flex-1 bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs uppercase placeholder:normal-case placeholder:text-[#77736D] focus:outline-none focus:border-[#17241C]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#17241C] text-white text-xs uppercase font-semibold tracking-wider rounded hover:bg-[#283d2f] transition-colors"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <p className={`text-xs ${promoMessage.error ? 'text-rose-600' : 'text-emerald-700'}`}>
                  {promoMessage.text}
                </p>
              )}

              {appliedPromoLabel && (
                <div className="flex items-center justify-between text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded border border-emerald-200">
                  <span>{appliedPromoLabel} ({discountPercent}% off)</span>
                  <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              {/* Subtotal, Shipping, Estimated Total */}
              <div className="space-y-1.5 text-xs text-[#77736D] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#242522]">${cartSubtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Shipping</span>
                  <span className="font-medium text-[#242522]">
                    {remainingForFreeShipping === 0 ? 'FREE' : '$49.00'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#17241C] pt-2 border-t border-[#E7E3DD]">
                  <span>Estimated Total</span>
                  <span className="font-serif text-[17px]">
                    ${(finalSubtotal + (remainingForFreeShipping === 0 ? 0 : 49)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout & Continue Shopping Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-[#17241C] hover:bg-[#283d2f] text-white text-[12.5px] font-semibold uppercase tracking-[0.14em] rounded-[4px] flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-2.5 bg-transparent hover:bg-black/5 text-[#77736D] hover:text-[#17241C] text-xs font-medium transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#77736D] text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B29A78]" />
                <span>30-Day In-Home Guarantee · Safe 256-Bit SSL Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
