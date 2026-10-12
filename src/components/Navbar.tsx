import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, User, ShoppingBag, Heart, Menu, X, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const Navbar: React.FC = () => {
  const {
    cartTotalCount,
    wishlist,
    setIsCartOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    currentPage,
    navigateTo,
    setActiveCategoryFilter
  } = useStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'shop' | 'collections' | 'rooms' | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: 'shop' | 'collections' | 'rooms') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const shopItems = [
    { label: 'All Furniture', slug: 'all' },
    { label: 'Sofas & Sectionals', slug: 'living-room' },
    { label: 'Accent Chairs', slug: 'living-room' },
    { label: 'Dining Tables', slug: 'dining-room' },
    { label: 'Storage & Credenzas', slug: 'living-room' },
    { label: 'Beds & Nightstands', slug: 'bedroom' },
    { label: 'Outdoor Living', slug: 'outdoor' },
    { label: 'Home Office Desks', slug: 'home-office' }
  ];

  const collectionsItems = [
    { label: 'New Arrivals', filter: 'new' },
    { label: 'Best Sellers', filter: 'bestseller' },
    { label: 'Modern Minimalist', filter: 'all' },
    { label: 'Scandinavian Living', filter: 'all' },
    { label: 'Contemporary Comfort', filter: 'all' }
  ];

  const roomsItems = [
    { label: 'Living Room', slug: 'living-room', items: '32 Items' },
    { label: 'Dining Room', slug: 'dining-room', items: '18 Items' },
    { label: 'Bedroom', slug: 'bedroom', items: '24 Items' },
    { label: 'Home Office', slug: 'home-office', items: '18 Items' },
    { label: 'Outdoor Patio', slug: 'outdoor', items: '22 Items' }
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${isScrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-[#E7E3DD]' : 'border-b border-[#E7E3DD]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px] sm:h-[68px]">
          
          {/* Mobile hamburger button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-[#242522] hover:text-[#17241C] focus:outline-none focus:ring-1 focus:ring-[#17241C]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Left: Minimalist Chair Logo & Brand Identity */}
          <div className="flex items-center">
            <button
              onClick={() => navigateTo('home')}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              {/* Minimalist outline chair logo SVG */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#17241C] transition-transform duration-300 group-hover:scale-105">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  {/* Chair back */}
                  <path d="M9 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9H9V5z" />
                  {/* Seat cushion */}
                  <path d="M6 14h20a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2z" />
                  {/* Legs & support */}
                  <path d="M8 19v9" />
                  <path d="M24 19v9" />
                  <path d="M8 24h16" />
                </svg>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[20px] sm:text-[23px] font-semibold tracking-[0.14em] text-[#17241C]">
                  NOVA
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] uppercase font-sans tracking-[0.38em] text-[#77736D] mt-[2px] font-medium">
                  FURNITURE
                </span>
              </div>
            </button>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[13.5px] font-medium text-[#242522]">
            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => navigateTo('shop')}
                className={`flex items-center gap-1.5 py-4 transition-colors hover:text-[#17241C] ${currentPage === 'shop' ? 'text-[#17241C] font-semibold' : 'text-[#242522]'}`}
              >
                <span>Shop</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#77736D] transition-transform duration-200 ${activeDropdown === 'shop' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'shop' && (
                <div className="absolute top-full -left-6 w-72 bg-white rounded-md shadow-xl border border-[#E7E3DD] p-4 py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-[#77736D] px-3 pb-2 border-b border-[#F0ECE6] mb-2">
                    Shop Categories
                  </div>
                  <div className="space-y-1">
                    {shopItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          setActiveCategoryFilter(item.slug);
                          navigateTo('shop');
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-1.5 text-[13px] text-[#242522] hover:text-[#17241C] hover:bg-[#FAF9F6] rounded flex items-center justify-between transition-colors"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-3 h-3 text-[#B29A78] opacity-0 -translate-x-1 group-hover:opacity-100 hover:opacity-100 hover:translate-x-0 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Collections Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('collections')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => navigateTo('shop')}
                className="flex items-center gap-1.5 py-4 transition-colors hover:text-[#17241C] text-[#242522]"
              >
                <span>Collections</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#77736D] transition-transform duration-200 ${activeDropdown === 'collections' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'collections' && (
                <div className="absolute top-full -left-6 w-64 bg-white rounded-md shadow-xl border border-[#E7E3DD] p-4 py-3 z-50">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-[#77736D] px-3 pb-2 border-b border-[#F0ECE6] mb-2">
                    Curated Collections
                  </div>
                  <div className="space-y-1">
                    {collectionsItems.map((col) => (
                      <button
                        key={col.label}
                        onClick={() => {
                          navigateTo('shop');
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-1.5 text-[13px] text-[#242522] hover:text-[#17241C] hover:bg-[#FAF9F6] rounded transition-colors"
                      >
                        {col.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Rooms Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('rooms')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => navigateTo('shop')}
                className="flex items-center gap-1.5 py-4 transition-colors hover:text-[#17241C] text-[#242522]"
              >
                <span>Rooms</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#77736D] transition-transform duration-200 ${activeDropdown === 'rooms' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'rooms' && (
                <div className="absolute top-full -left-8 w-72 bg-white rounded-md shadow-xl border border-[#E7E3DD] p-4 py-3 z-50">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-[#77736D] px-3 pb-2 border-b border-[#F0ECE6] mb-2">
                    Shop by Room
                  </div>
                  <div className="space-y-1">
                    {roomsItems.map((room) => (
                      <button
                        key={room.label}
                        onClick={() => {
                          setActiveCategoryFilter(room.slug);
                          navigateTo('shop');
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-1.5 text-[13px] text-[#242522] hover:text-[#17241C] hover:bg-[#FAF9F6] rounded flex items-center justify-between transition-colors"
                      >
                        <span>{room.label}</span>
                        <span className="text-[11px] text-[#77736D]">{room.items}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <button
              onClick={() => navigateTo('about')}
              className={`py-4 transition-colors hover:text-[#17241C] ${currentPage === 'about' ? 'text-[#17241C] font-semibold' : 'text-[#242522]'}`}
            >
              About Us
            </button>

            {/* Inspiration */}
            <button
              onClick={() => navigateTo('inspiration')}
              className={`py-4 transition-colors hover:text-[#17241C] ${currentPage === 'inspiration' ? 'text-[#17241C] font-semibold' : 'text-[#242522]'}`}
            >
              Inspiration
            </button>

            {/* Sale */}
            <button
              onClick={() => navigateTo('sale')}
              className={`py-4 transition-colors hover:text-[#B29A78] flex items-center gap-1 ${currentPage === 'sale' ? 'text-[#B29A78] font-bold' : 'text-[#B29A78] font-semibold'}`}
            >
              <span>Sale</span>
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1 sm:space-x-3 text-[#242522]">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#242522] hover:text-[#17241C] hover:bg-[#FAF9F6] rounded-full transition-colors"
              aria-label="Search furniture collection"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => navigateTo('shop')}
              className="relative p-2 text-[#242522] hover:text-[#17241C] hover:bg-[#FAF9F6] rounded-full transition-colors hidden sm:flex items-center justify-center"
              aria-label="View saved items"
              title="Saved Favorites"
            >
              <Heart className="w-[18px] h-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#B29A78] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Account Icon */}
            <button
              onClick={() => setIsAccountOpen(true)}
              className="p-2 text-[#242522] hover:text-[#17241C] hover:bg-[#FAF9F6] rounded-full transition-colors"
              aria-label="Customer account and orders"
            >
              <User className="w-[18px] h-[18px]" />
            </button>

            {/* Cart / Shopping Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#242522] hover:text-[#17241C] hover:bg-[#FAF9F6] rounded-full transition-colors group"
              aria-label={`Shopping cart with ${cartTotalCount} items`}
            >
              <ShoppingBag className="w-[19px] h-[19px] transition-transform group-hover:scale-105" />
              {cartTotalCount > 0 ? (
                <span className="absolute top-1 right-1 min-w-[17px] h-[17px] px-1 bg-[#17241C] text-white text-[10px] font-semibold rounded-full flex items-center justify-center leading-none">
                  {cartTotalCount}
                </span>
              ) : (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#B29A78] rounded-full" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E7E3DD] bg-white px-5 py-5 shadow-lg space-y-4">
          <div className="space-y-1">
            <button
              onClick={() => {
                navigateTo('shop');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 text-[15px] font-medium text-[#17241C] border-b border-[#F4EFEB] flex items-center justify-between"
            >
              <span>Shop All Furniture</span>
              <ArrowRight className="w-4 h-4 text-[#77736D]" />
            </button>

            <div className="pl-3 py-2 space-y-2 border-b border-[#F4EFEB]">
              <span className="text-[10px] uppercase tracking-wider text-[#77736D] font-bold">Categories</span>
              {roomsItems.map((room) => (
                <button
                  key={room.slug}
                  onClick={() => {
                    setActiveCategoryFilter(room.slug);
                    navigateTo('shop');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-1 text-[13.5px] text-[#242522] hover:text-[#17241C] flex justify-between"
                >
                  <span>{room.label}</span>
                  <span className="text-[11px] text-[#77736D]">{room.items}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                navigateTo('about');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2.5 text-[15px] font-medium text-[#242522] border-b border-[#F4EFEB]"
            >
              About Our Craft
            </button>

            <button
              onClick={() => {
                navigateTo('inspiration');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2.5 text-[15px] font-medium text-[#242522] border-b border-[#F4EFEB]"
            >
              Design Inspiration & Journal
            </button>

            <button
              onClick={() => {
                navigateTo('sale');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2.5 text-[15px] font-semibold text-[#B29A78] flex items-center justify-between"
            >
              <span>Exclusive Sale Pieces</span>
              <span className="text-[10px] bg-[#B29A78]/15 px-2 py-0.5 rounded text-[#846E4E]">Up to 30% Off</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-[#77736D]">
            <span>Assistance: (888) 123-4567</span>
            <span>Free Shipping &gt; $199</span>
          </div>
        </div>
      )}
    </header>
  );
};
