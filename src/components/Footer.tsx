import React from 'react';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { navigateTo, setActiveCategoryFilter, setIsAccountOpen } = useStore();

  const handleCategoryClick = (cat: string) => {
    setActiveCategoryFilter(cat);
    navigateTo('shop');
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E7E3DD] text-[#242522]">
      {/* Main 4-column footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 flex items-center justify-center text-[#17241C]">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M9 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9H9V5z" />
                  <path d="M6 14h20a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2z" />
                  <path d="M8 19v9" />
                  <path d="M24 19v9" />
                  <path d="M8 24h16" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[21px] font-semibold tracking-[0.14em] text-[#17241C]">
                  NOVA
                </span>
                <span className="text-[9px] uppercase font-sans tracking-[0.38em] text-[#77736D] mt-[2px] font-medium">
                  FURNITURE
                </span>
              </div>
            </div>

            <p className="text-[13px] text-[#77736D] leading-relaxed max-w-sm">
              Thoughtfully engineered modern furniture celebrating organic materials, architectural silhouettes, and lasting heirloom quality.
            </p>

            <div className="pt-2 text-xs text-[#77736D] space-y-1">
              <p>Studio Headquarters: 450 Design District, Suite 800</p>
              <p>Direct Assistance: (888) 123-4567 · concierge@novafurniture.com</p>
            </div>
          </div>

          {/* Column 2: Shop (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#17241C]">
              Shop
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#242522]/85">
              <li>
                <button
                  onClick={() => handleCategoryClick('all')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  All Furniture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('living-room')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Living Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('dining-room')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Dining Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('bedroom')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Bedroom
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('home-office')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Home Office
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('outdoor')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Outdoor
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#17241C]">
              Customer Care
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#242522]/85">
              <li>
                <button
                  onClick={() => setIsAccountOpen(true)}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Order Tracking & Lookups
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  White Glove Delivery & Shipping
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  30-Day In-Home Trial & Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Care Guides & Fabric Swatches
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Trade & Interior Design Program
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#17241C]">
              Company
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#242522]/85">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('inspiration')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Design Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Sustainability Promise
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#B29A78] transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Payment Strip */}
      <div className="border-t border-[#E7E3DD] bg-[#FAF9F6] py-6 text-xs text-[#77736D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NOVA FURNITURE. All rights reserved. Timeless design for modern living.</p>
          
          {/* Payment Method Badges & Currency Selector */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-white border border-[#E7E3DD] rounded text-[10px] font-semibold text-[#17241C]">VISA</span>
              <span className="px-2 py-0.5 bg-white border border-[#E7E3DD] rounded text-[10px] font-semibold text-[#17241C]">MC</span>
              <span className="px-2 py-0.5 bg-white border border-[#E7E3DD] rounded text-[10px] font-semibold text-[#17241C]">AMEX</span>
              <span className="px-2 py-0.5 bg-white border border-[#E7E3DD] rounded text-[10px] font-semibold text-[#17241C]">APPLE PAY</span>
            </div>

            <div className="flex items-center gap-1 border-l border-[#E7E3DD] pl-4 text-[11px] font-medium text-[#242522]">
              <span>United States (USD $)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
