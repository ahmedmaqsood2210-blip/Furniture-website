import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Truck, Lock, CreditCard } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    freeShippingThreshold,
    discountPercent,
    appliedPromoLabel,
    clearCart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    navigateTo
  } = useStore();

  const [step, setStep] = useState<'details' | 'shipping' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: 'CA',
    zip: '',
    phone: '',
    shippingSpeed: 'standard', // standard or whiteglove
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '•••'
  });

  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const isFreeStandard = cartSubtotal >= freeShippingThreshold;
  const shippingCost = formData.shippingSpeed === 'whiteglove' ? 149 : (isFreeStandard ? 0 : 49);
  const taxAmount = (cartSubtotal - discountAmount) * 0.0825;
  const orderTotal = Math.max(0, cartSubtotal - discountAmount + shippingCost + taxAmount);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = 'NV-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedOrder);
    setStep('success');
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF9F6] border border-[#E7E3DD] rounded-[10px] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#E7E3DD] flex items-center justify-between bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center text-[#17241C]">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M9 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9H9V5z" />
                <path d="M6 14h20a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2z" />
                <path d="M8 19v9" />
                <path d="M24 19v9" />
                <path d="M8 24h16" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-[18px] font-semibold text-[#17241C] tracking-wide">
                NOVA FURNITURE
              </span>
              <span className="text-[10px] text-[#77736D] uppercase tracking-wider block">
                Secure SSL Checkout
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 text-[#77736D] hover:text-[#17241C] rounded-full hover:bg-black/5"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {step === 'success' ? (
          <div className="p-8 sm:p-12 text-center max-w-xl mx-auto space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#17241C] text-[#B29A78] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-[28px] sm:text-[34px] text-[#17241C] font-normal">
              Thank You for Your Order!
            </h3>

            <p className="text-sm text-[#77736D] leading-relaxed">
              Your order confirmation and tracking details have been sent to{' '}
              <strong className="text-[#17241C]">{formData.email || 'your email'}</strong>.
            </p>

            <div className="bg-white border border-[#E7E3DD] rounded-[8px] p-5 text-left text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-[#F4EFEB]">
                <span className="text-[#77736D]">Order Reference:</span>
                <span className="font-mono font-bold text-[#17241C]">{orderNumber}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F4EFEB]">
                <span className="text-[#77736D]">Total Paid:</span>
                <span className="font-bold text-[#17241C]">${orderTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F4EFEB]">
                <span className="text-[#77736D]">Delivery Method:</span>
                <span className="font-medium text-[#17241C]">
                  {formData.shippingSpeed === 'whiteglove' ? 'White Glove In-Room Setup' : 'Standard Scheduled Freight'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#77736D]">Estimated Arrival:</span>
                <span className="font-medium text-[#17241C]">5–8 Business Days</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  navigateTo('shop');
                }}
                className="px-7 py-3.5 bg-[#17241C] text-white text-xs font-semibold uppercase tracking-[0.14em] rounded-[4px] hover:bg-[#283d2f] transition-colors"
              >
                Return to Store
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Form Column (7 cols) */}
            <form onSubmit={handlePlaceOrder} className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Stepper Navigation */}
              <div className="flex items-center gap-2 text-xs font-medium text-[#77736D] border-b border-[#E7E3DD] pb-3">
                <span className="text-[#17241C] font-semibold">1. Contact & Shipping</span>
                <span>/</span>
                <span>2. Payment</span>
                <span>/</span>
                <span>3. Review</span>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                  Contact Information
                </h4>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address for tracking updates"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E7E3DD] rounded px-3 py-2.5 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                />
              </div>

              {/* Shipping Address */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                  Shipping Address
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Street address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                />
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                  />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                  >
                    <option value="CA">California (CA)</option>
                    <option value="NY">New York (NY)</option>
                    <option value="TX">Texas (TX)</option>
                    <option value="FL">Florida (FL)</option>
                    <option value="WA">Washington (WA)</option>
                  </select>
                  <input
                    type="text"
                    name="zip"
                    required
                    placeholder="Postal Code"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                  />
                </div>
              </div>

              {/* Delivery Speed Options */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                  Delivery Method
                </h4>
                <div className="space-y-2">
                  <label className={`flex items-center justify-between p-3 rounded border text-xs cursor-pointer transition-colors ${formData.shippingSpeed === 'standard' ? 'border-[#17241C] bg-white ring-1 ring-[#17241C]' : 'border-[#E7E3DD] bg-white'}`}>
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="shippingSpeed"
                        value="standard"
                        checked={formData.shippingSpeed === 'standard'}
                        onChange={handleInputChange}
                        className="accent-[#17241C]"
                      />
                      <div>
                        <span className="font-semibold text-[#17241C] block">Standard Scheduled Freight</span>
                        <span className="text-[#77736D]">Delivered safely to doorstep or entry</span>
                      </div>
                    </div>
                    <span className="font-semibold text-[#17241C]">
                      {isFreeStandard ? 'FREE' : '$49.00'}
                    </span>
                  </label>

                  <label className={`flex items-center justify-between p-3 rounded border text-xs cursor-pointer transition-colors ${formData.shippingSpeed === 'whiteglove' ? 'border-[#17241C] bg-white ring-1 ring-[#17241C]' : 'border-[#E7E3DD] bg-white'}`}>
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="shippingSpeed"
                        value="whiteglove"
                        checked={formData.shippingSpeed === 'whiteglove'}
                        onChange={handleInputChange}
                        className="accent-[#17241C]"
                      />
                      <div>
                        <span className="font-semibold text-[#17241C] block">White-Glove In-Home Placement</span>
                        <span className="text-[#77736D]">Room of choice placement, assembly, packaging removal</span>
                      </div>
                    </div>
                    <span className="font-semibold text-[#17241C]">$149.00</span>
                  </label>
                </div>
              </div>

              {/* Payment Section (Demo simulation) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                    Payment Details
                  </h4>
                  <span className="text-[11px] text-[#77736D] flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#B29A78]" />
                    Test Demo Environment
                  </span>
                </div>

                <div className="bg-white border border-[#E7E3DD] rounded p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#77736D]">
                    <div className="flex items-center gap-1.5 font-medium text-[#17241C]">
                      <CreditCard className="w-4 h-4 text-[#B29A78]" />
                      <span>Credit Card</span>
                    </div>
                    <span>Instant Approval</span>
                  </div>

                  <input
                    type="text"
                    value={formData.cardNumber}
                    readOnly
                    className="w-full bg-[#FAF9F6] border border-[#E7E3DD] rounded px-3 py-2 text-xs font-mono text-[#242522]"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={formData.cardExpiry}
                      readOnly
                      className="bg-[#FAF9F6] border border-[#E7E3DD] rounded px-3 py-2 text-xs font-mono text-[#242522]"
                    />
                    <input
                      type="text"
                      value={formData.cardCvc}
                      readOnly
                      className="bg-[#FAF9F6] border border-[#E7E3DD] rounded px-3 py-2 text-xs font-mono text-[#242522]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#17241C] hover:bg-[#283d2f] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-[4px] flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <span>COMPLETE ORDER · ${orderTotal.toFixed(2)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10.5px] text-[#77736D] text-center mt-2.5">
                  By completing your order, you agree to NOVA Furniture's 30-Day Guarantee and Terms of Service.
                </p>
              </div>

            </form>

            {/* Order Summary Column (5 cols) */}
            <div className="lg:col-span-5 bg-white border-t lg:border-t-0 lg:border-l border-[#E7E3DD] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#17241C] mb-4">
                  Order Summary ({cart.reduce((a, b) => a + b.quantity, 0)} items)
                </h4>

                <div className="max-h-[280px] overflow-y-auto divide-y divide-[#F5F2EC] pr-1 space-y-2 mb-4">
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.selectedColor}`} className="py-2.5 flex items-center gap-3">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded bg-[#FAF9F6] border border-[#E7E3DD]"
                      />
                      <div className="flex-1 text-xs">
                        <span className="font-serif font-medium text-[#17241C] block line-clamp-1">
                          {item.product.name}
                        </span>
                        <span className="text-[#77736D] text-[11px]">
                          Qty {item.quantity} · {item.selectedColor}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#17241C]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Calculation Breakdown */}
                <div className="space-y-2 text-xs border-t border-[#E7E3DD] pt-4 text-[#77736D]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-[#242522] font-medium">${cartSubtotal.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700">
                      <span>Discount ({appliedPromoLabel})</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-[#242522] font-medium">
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Estimated Sales Tax</span>
                    <span className="text-[#242522] font-medium">${taxAmount.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm font-semibold text-[#17241C] pt-2 border-t border-[#E7E3DD]">
                    <span>Total Due</span>
                    <span className="font-serif text-[18px] text-[#17241C]">
                      ${orderTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E7E3DD] mt-6 text-[11px] text-[#77736D] space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B29A78]" />
                  <span>30-Day Hassle-Free Returns on All Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#B29A78]" />
                  <span>Complimentary White-Glove Support Included</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
