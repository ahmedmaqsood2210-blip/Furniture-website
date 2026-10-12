import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product } from '../types';
import { PRODUCTS, PROMO_DISCOUNTS } from '../data/products';

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  updateQuantity: (productId: string, selectedColor: string, quantity: number) => void;
  removeFromCart: (productId: string, selectedColor: string) => void;
  clearCart: () => void;
  cartTotalCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  
  // Navigation & Page routing
  currentPage: 'home' | 'shop' | 'product' | 'about' | 'inspiration' | 'sale';
  navigateTo: (page: 'home' | 'shop' | 'product' | 'about' | 'inspiration' | 'sale', productId?: string, categorySlug?: string) => void;
  selectedProductId: string | null;
  selectedProduct: Product | null;
  
  // Filtering & Catalog category state
  activeCategoryFilter: string;
  setActiveCategoryFilter: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;

  // Wishlist
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Modals
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;

  // Promo code
  promoCode: string;
  discountPercent: number;
  appliedPromoLabel: string | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };

  // Toast
  toast: { message: string; visible: boolean } | null;
  showToast: (message: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'nova_furniture_cart_v1';
const WISHLIST_STORAGE_KEY = 'nova_furniture_wishlist_v1';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state with local storage fallback
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'product' | 'about' | 'inspiration' | 'sale'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>('prod-luna-sofa');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [appliedPromoLabel, setAppliedPromoLabel] = useState<string | null>(null);

  const [toast, setToast] = useState<{ message: string; visible: boolean } | null>(null);

  // Sync cart to storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Sync wishlist to storage
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3200);
  };

  const selectedProduct = selectedProductId 
    ? PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0]
    : null;

  const navigateTo = (
    page: 'home' | 'shop' | 'product' | 'about' | 'inspiration' | 'sale', 
    productId?: string, 
    categorySlug?: string
  ) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
    if (categorySlug) {
      setActiveCategoryFilter(categorySlug);
    }
    // Close overlays
    setIsCartOpen(false);
    setIsSearchOpen(false);
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    const color = selectedColor || product.colors[0]?.name || 'Standard';
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [...prev, { product, quantity, selectedColor: color }];
    });
    showToast(`Added ${quantity}× "${product.name}" to bag`);
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, selectedColor: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string, selectedColor: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor === selectedColor)
      )
    );
    showToast('Item removed from your shopping bag');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from saved wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to your wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (PROMO_DISCOUNTS[clean]) {
      setPromoCode(clean);
      setDiscountPercent(PROMO_DISCOUNTS[clean].percent);
      setAppliedPromoLabel(PROMO_DISCOUNTS[clean].label);
      showToast(`Promo "${clean}" applied: ${PROMO_DISCOUNTS[clean].label}!`);
      return { success: true, message: `Code applied: ${PROMO_DISCOUNTS[clean].label}` };
    }
    return { success: false, message: 'Invalid promo code. Try "NOVA10" for 10% off.' };
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 199;
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotalCount,
        cartSubtotal,
        freeShippingThreshold,
        freeShippingProgress,
        isCartOpen,
        setIsCartOpen,
        currentPage,
        navigateTo,
        selectedProductId,
        selectedProduct,
        activeCategoryFilter,
        setActiveCategoryFilter,
        searchQuery,
        setSearchQuery,
        toggleWishlist,
        isInWishlist,
        isSearchOpen,
        setIsSearchOpen,
        isAccountOpen,
        setIsAccountOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        promoCode,
        discountPercent,
        appliedPromoLabel,
        applyPromoCode,
        toast,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
