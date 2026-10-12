import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateTo } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const popularSearches = ['Bouclé Sofa', 'Oak Dining Table', 'Accent Chair', 'Sideboard', 'Travertine'];

  const filteredProducts = searchTerm.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.materials.some((m) => m.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

  const handleSelectProduct = (productId: string) => {
    setIsSearchOpen(false);
    navigateTo('product', productId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-[#E7E3DD] rounded-[10px] max-w-2xl w-full shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E7E3DD] flex items-center gap-3 bg-[#FAF9F6]">
          <Search className="w-5 h-5 text-[#77736D] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by product, material, or room (e.g. Oak, Bouclé, Sofa)..."
            className="w-full bg-transparent text-sm sm:text-base text-[#17241C] placeholder-[#77736D] focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-[#77736D] hover:text-[#17241C]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2.5 py-1 text-xs uppercase tracking-wider text-[#77736D] hover:text-[#17241C]"
          >
            Esc
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          {searchTerm.trim() ? (
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#77736D] mb-3">
                Found {filteredProducts.length} Results
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-8 text-sm text-[#77736D]">
                  No furniture found matching “{searchTerm}”. Try searching for "sofa", "chair", or "table".
                </div>
              ) : (
                <div className="divide-y divide-[#F5F2EC]">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleSelectProduct(p.id)}
                      className="py-3 flex items-center justify-between hover:bg-[#FAF9F6] p-2 rounded cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-12 h-12 object-cover rounded bg-[#FAF9F6] border border-[#E7E3DD]"
                        />
                        <div>
                          <h4 className="font-serif text-[15px] font-medium text-[#17241C]">
                            {p.name}
                          </h4>
                          <span className="text-[11px] text-[#77736D]">
                            {p.categoryLabel} · {p.room}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#17241C]">
                          ${p.price.toFixed(2)}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#B29A78]" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#77736D] block mb-3">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#E9E2DA] border border-[#E7E3DD] rounded text-xs text-[#242522] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
