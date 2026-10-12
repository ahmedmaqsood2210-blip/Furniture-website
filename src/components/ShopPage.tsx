import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronRight, X, ArrowUpDown, Check, RefreshCw } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

interface ShopPageProps {
  onQuickView?: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onQuickView }) => {
  const {
    activeCategoryFilter,
    setActiveCategoryFilter,
    navigateTo
  } = useStore();

  const [selectedRoom, setSelectedRoom] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(1200);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available unique materials and colors
  const materialsList = ['All', 'Oak', 'Bouclé', 'Linen', 'Travertine', 'Teak', 'Ash Wood'];
  const colorsList = [
    { label: 'All', hex: 'transparent' },
    { label: 'Cream / Oat', hex: '#EDE8E0' },
    { label: 'Natural Oak', hex: '#D7C2A5' },
    { label: 'Olive / Sage', hex: '#4A5343' },
    { label: 'Charcoal / Black', hex: '#2B2B28' }
  ];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategoryFilter !== 'all' && item.category !== activeCategoryFilter) {
        return false;
      }
      // Room filter
      if (selectedRoom !== 'all' && item.room.toLowerCase() !== selectedRoom.toLowerCase()) {
        return false;
      }
      // Price filter
      if (item.price > maxPrice) {
        return false;
      }
      // In-stock filter
      if (inStockOnly && !item.inStock) {
        return false;
      }
      // Material filter
      if (selectedMaterial !== 'all') {
        const hasMaterial = item.materials.some((m) =>
          m.toLowerCase().includes(selectedMaterial.toLowerCase())
        );
        if (!hasMaterial) return false;
      }
      // Color filter
      if (selectedColor !== 'all') {
        const matchColor = item.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!matchColor) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [activeCategoryFilter, selectedRoom, maxPrice, inStockOnly, selectedMaterial, selectedColor, sortBy]);

  const resetFilters = () => {
    setActiveCategoryFilter('all');
    setSelectedRoom('all');
    setSelectedMaterial('all');
    setSelectedColor('all');
    setInStockOnly(false);
    setMaxPrice(1200);
    setSortBy('featured');
  };

  const currentCategoryObj = CATEGORIES.find((c) => c.slug === activeCategoryFilter);
  const activeFiltersCount =
    (activeCategoryFilter !== 'all' ? 1 : 0) +
    (selectedRoom !== 'all' ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0) +
    (selectedColor !== 'all' ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (maxPrice < 1200 ? 1 : 0);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#77736D] mb-6">
          <button
            onClick={() => navigateTo('home')}
            className="hover:text-[#17241C] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-[#B29A78]" />
          <button
            onClick={() => {
              setActiveCategoryFilter('all');
              navigateTo('shop');
            }}
            className="hover:text-[#17241C] transition-colors"
          >
            Shop
          </button>
          {activeCategoryFilter !== 'all' && (
            <>
              <ChevronRight className="w-3 h-3 text-[#B29A78]" />
              <span className="font-semibold text-[#17241C]">
                {currentCategoryObj?.name || activeCategoryFilter}
              </span>
            </>
          )}
        </nav>

        {/* Page Header */}
        <div className="mb-8 border-b border-[#E7E3DD] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#77736D] block mb-1">
              THE COLLECTION
            </span>
            <h1 className="font-serif text-[32px] sm:text-[42px] leading-tight text-[#17241C] font-normal">
              {currentCategoryObj ? currentCategoryObj.name : 'Shop All Furniture'}
            </h1>
            <p className="text-[13.5px] text-[#77736D] max-w-xl mt-1.5">
              {currentCategoryObj
                ? currentCategoryObj.description
                : 'Architecturally inspired pieces shaped by European joinery, natural fibers, and timeless proportion.'}
            </p>
          </div>

          {/* Sort & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-3.5 py-2.5 bg-white border border-[#E7E3DD] rounded text-xs font-medium text-[#17241C] flex items-center gap-2 shadow-xs"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#B29A78]" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            <div className="flex items-center gap-2 bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs">
              <span className="text-[#77736D] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-medium text-[#17241C] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout: Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white border border-[#E7E3DD] rounded-[8px] p-5 space-y-6 shadow-xs">
              
              {/* Header / Clear All */}
              <div className="flex items-center justify-between pb-3 border-b border-[#F5F2EC]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#17241C]" />
                  <span className="text-xs uppercase font-bold tracking-wider text-[#17241C]">
                    Refine Selection
                  </span>
                </div>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-[#B29A78] hover:underline flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#17241C] mb-2.5">
                  Category
                </h4>
                <div className="space-y-1.5 text-xs">
                  <button
                    onClick={() => setActiveCategoryFilter('all')}
                    className={`w-full text-left py-1 px-2 rounded flex justify-between ${
                      activeCategoryFilter === 'all' ? 'bg-[#17241C] text-white font-semibold' : 'text-[#242522] hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <span>All Furniture</span>
                    <span className="opacity-70">{PRODUCTS.length}</span>
                  </button>

                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryFilter(cat.slug)}
                      className={`w-full text-left py-1 px-2 rounded flex justify-between ${
                        activeCategoryFilter === cat.slug ? 'bg-[#17241C] text-white font-semibold' : 'text-[#242522] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="opacity-70">
                        {PRODUCTS.filter((p) => p.category === cat.slug).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="pt-2 border-t border-[#F5F2EC]">
                <div className="flex justify-between items-center mb-2 text-xs">
                  <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#17241C]">
                    Max Price
                  </h4>
                  <span className="font-semibold text-[#17241C]">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="1200"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#17241C] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#77736D] mt-1">
                  <span>$250</span>
                  <span>$1,200</span>
                </div>
              </div>

              {/* Material Filter */}
              <div className="pt-2 border-t border-[#F5F2EC]">
                <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#17241C] mb-2">
                  Material
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {materialsList.map((mat) => {
                    const isSelected = (mat === 'All' && selectedMaterial === 'all') || selectedMaterial.toLowerCase() === mat.toLowerCase();
                    return (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(mat === 'All' ? 'all' : mat)}
                        className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                          isSelected
                            ? 'bg-[#17241C] border-[#17241C] text-white'
                            : 'bg-[#FAF9F6] border-[#E7E3DD] text-[#242522] hover:border-[#17241C]'
                        }`}
                      >
                        {mat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* In-Stock Toggle */}
              <div className="pt-2 border-t border-[#F5F2EC]">
                <label className="flex items-center justify-between text-xs cursor-pointer">
                  <span className="font-medium text-[#17241C]">In-Stock Only</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 accent-[#17241C] rounded"
                  />
                </label>
              </div>

            </div>
          </aside>

          {/* Product Grid Area (9 cols on lg) */}
          <main className="lg:col-span-9">
            
            {/* Active Filters Pill Bar */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-white border border-[#E7E3DD] rounded-[6px] text-xs">
                <span className="text-[#77736D] font-medium">Applied Filters:</span>
                
                {activeCategoryFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF9F6] border border-[#E7E3DD] rounded text-[#17241C]">
                    Category: {currentCategoryObj?.name}
                    <button onClick={() => setActiveCategoryFilter('all')} className="hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {selectedMaterial !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF9F6] border border-[#E7E3DD] rounded text-[#17241C]">
                    Material: {selectedMaterial}
                    <button onClick={() => setSelectedMaterial('all')} className="hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                {maxPrice < 1200 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF9F6] border border-[#E7E3DD] rounded text-[#17241C]">
                    Under ${maxPrice}
                    <button onClick={() => setMaxPrice(1200)} className="hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}

                <button
                  onClick={resetFilters}
                  className="text-xs text-[#B29A78] underline ml-auto font-medium"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Results count indicator */}
            <div className="text-xs text-[#77736D] mb-4 flex justify-between items-center">
              <span>Showing <strong>{filteredProducts.length}</strong> handcrafted designs</span>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-[#E7E3DD] rounded-[8px] p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FAF9F6] mx-auto flex items-center justify-center text-[#77736D]">
                  <SlidersHorizontal className="w-6 h-6 stroke-[1.4]" />
                </div>
                <h3 className="font-serif text-[22px] text-[#17241C]">No Matching Pieces Found</h3>
                <p className="text-xs text-[#77736D] max-w-sm mx-auto">
                  Try broadening your price limit or clearing the active material filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-[#17241C] text-white text-xs uppercase font-semibold tracking-wider rounded hover:bg-[#283d2f] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};
