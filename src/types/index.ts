export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  category: 'living-room' | 'dining-room' | 'bedroom' | 'home-office' | 'outdoor';
  categoryLabel: string;
  subcategory?: string;
  room: string;
  images: string[];
  description: string;
  shortDescription: string;
  dimensions: {
    width: string;
    depth: string;
    height: string;
    seatHeight?: string;
  };
  materials: string[];
  colors: {
    name: string;
    hex: string;
    imageIndex: number;
  }[];
  inStock: boolean;
  stockCount: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  careInstructions: string[];
  specifications: Record<string, string>;
}

export interface CategoryItem {
  id: string;
  slug: 'living-room' | 'dining-room' | 'bedroom' | 'home-office' | 'outdoor';
  name: string;
  itemCount: string;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  room: string;
  image: string;
  description: string;
  featuredProductIds: string[];
}

export interface FilterState {
  category: string;
  room: string;
  minPrice: number;
  maxPrice: number;
  color: string;
  material: string;
  inStockOnly: boolean;
  sortBy: 'featured' | 'newest' | 'price-low' | 'price-high' | 'rating';
}
