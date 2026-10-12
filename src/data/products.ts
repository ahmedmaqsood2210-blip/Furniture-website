import { CategoryItem, LookbookItem, Product } from '../types';

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-1',
    slug: 'living-room',
    name: 'Living Room',
    itemCount: '32 ITEMS',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Sculptural seating, organic coffee tables, and inviting lounge pieces.'
  },
  {
    id: 'cat-2',
    slug: 'dining-room',
    name: 'Dining Room',
    itemCount: '18 ITEMS',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    description: 'Solid oak dining tables, ergonomic chairs, and statement credenzas.'
  },
  {
    id: 'cat-3',
    slug: 'bedroom',
    name: 'Bedroom',
    itemCount: '24 ITEMS',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1200&q=80',
    description: 'Low-profile upholstered platform beds, tactile linens, and oak nightstands.'
  },
  {
    id: 'cat-4',
    slug: 'home-office',
    name: 'Home Office',
    itemCount: '18 ITEMS',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
    description: 'Streamlined writing desks, ergonomic leather seating, and modular shelving.'
  },
  {
    id: 'cat-5',
    slug: 'outdoor',
    name: 'Outdoor',
    itemCount: '22 ITEMS',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Weather-resistant teak lounges, ceramic fire tables, and outdoor dining sets.'
  }
];

export const PRODUCTS: Product[] = [
  // 1. BEST SELLER: Luna 3-Seater Sofa
  {
    id: 'prod-luna-sofa',
    name: 'Luna 3-Seater Sofa',
    subtitle: 'Textured Bouclé Sectional with FSC-Oak Legs',
    price: 899.00,
    originalPrice: 1049.00,
    rating: 5.0,
    reviewCount: 128,
    badge: 'BEST SELLER',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subcategory: 'Sofas & Sectionals',
    room: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The Luna 3-Seater Sofa balances architectural minimalism with cloud-like comfort. Wrapped in our proprietary performance bouclé fabric, it resists spills while offering an ultra-soft tactile hand. Built on a kiln-dried European hardwood frame and anchored by understated brushed oak plinth feet.',
    shortDescription: 'Architectural minimalism meets cloud-like comfort wrapped in stain-resistant performance bouclé.',
    dimensions: {
      width: '88"',
      depth: '38"',
      height: '32"',
      seatHeight: '17.5"'
    },
    materials: ['Kiln-dried FSC Oak', 'Multi-density Foam & Goose Down blend', 'Performance Bouclé Fabric'],
    colors: [
      { name: 'Oatmeal Bouclé', hex: '#EDE8E0', imageIndex: 0 },
      { name: 'Warm Taupe', hex: '#C2B8AA', imageIndex: 1 },
      { name: 'Deep Olive', hex: '#3B443B', imageIndex: 2 }
    ],
    inStock: true,
    stockCount: 14,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: [
      'Vacuum regularly using soft upholstery brush attachment.',
      'Blot liquid spills immediately with a clean, dry white cloth.',
      'Professional cleaning recommended annually for fabric rejuvenation.'
    ],
    specifications: {
      'Frame Construction': 'Corner-blocked, kiln-dried European birch & oak',
      'Cushion Core': 'High-resilience foam core encased in hypoallergenic micro-fiber',
      'Fabric Composition': '85% Polyester, 15% Acrylic (100,000 double rubs)',
      'Assembly Required': 'Minimal: simply attach feet with included tool (10 mins)'
    }
  },

  // 2. BEST SELLER: Oakwood Dining Table
  {
    id: 'prod-oakwood-table',
    name: 'Oakwood Dining Table',
    subtitle: 'Solid White Oak Oval Dining Table with Fluted Pedestal',
    price: 749.00,
    originalPrice: 890.00,
    rating: 5.0,
    reviewCount: 96,
    badge: 'BEST SELLER',
    category: 'dining-room',
    categoryLabel: 'Dining Room',
    subcategory: 'Dining Tables',
    room: 'Dining Room',
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Crafted from solid sustainable American white oak, the Oakwood Dining Table seats up to 8 guests comfortably. Features a softly bullnosed tabletop edge and sculptural fluted pillars that maximize legroom for everyone seated.',
    shortDescription: 'Solid American white oak oval table with sculptural pedestal bases, seating up to 8 guests comfortably.',
    dimensions: {
      width: '84"',
      depth: '42"',
      height: '30"'
    },
    materials: ['Solid American White Oak', 'Natural Matte Polyurethane Sealant'],
    colors: [
      { name: 'Natural White Oak', hex: '#D7C2A5', imageIndex: 0 },
      { name: 'Smoked Walnut Finish', hex: '#5C4A38', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 8,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: [
      'Wipe clean with a damp lint-free cloth, followed by dry cloth.',
      'Use coasters and placemats to protect against heat and standing liquids.',
      'Re-apply natural furniture wax every 6 months to maintain rich patina.'
    ],
    specifications: {
      'Seating Capacity': 'Seats 6 to 8 people comfortably',
      'Finish': 'Zero-VOC matte clear topcoat',
      'Table Weight': '145 lbs (sturdy, anti-wobble)',
      'Assembly': 'Leg base attaches with included heavy-duty steel bolts'
    }
  },

  // 3. BEST SELLER: Milo Accent Chair
  {
    id: 'prod-milo-chair',
    name: 'Milo Accent Chair',
    subtitle: 'Sculptural Linen Accent Chair with Sculpted Ash Frame',
    price: 399.00,
    originalPrice: 480.00,
    rating: 5.0,
    reviewCount: 72,
    badge: 'BEST SELLER',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subcategory: 'Chairs & Armchairs',
    room: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1580481077195-c3a9950b898c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An ode to mid-century Danish joinery, the Milo Accent Chair showcases curved bentwood arms and a generous recline angle. Upholstered in a heavy slub Belgian linen blend for breathable all-day seating ease.',
    shortDescription: 'Curved bentwood armrests and tailored linen upholstery with ergonomic lumbar support.',
    dimensions: {
      width: '32"',
      depth: '34"',
      height: '31"',
      seatHeight: '17"'
    },
    materials: ['Solid Ash Wood', 'Belgian Linen Blend', 'Pocket Springs & Foam'],
    colors: [
      { name: 'Warm Sand Linen', hex: '#DFD8CC', imageIndex: 0 },
      { name: 'Olive Velvet', hex: '#4A5343', imageIndex: 1 },
      { name: 'Charcoal Weave', hex: '#333433', imageIndex: 2 }
    ],
    inStock: true,
    stockCount: 19,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: [
      'Spot clean with gentle water-free cleaning solvent.',
      'Avoid prolonged exposure to direct midday sunlight.'
    ],
    specifications: {
      'Weight Capacity': '320 lbs',
      'Joinery': 'Mortise and tenon wood craftsmanship',
      'Weight': '38 lbs',
      'Assembly': 'Fully assembled out of the box'
    }
  },

  // 4. BEST SELLER: Raven Wood Sideboard
  {
    id: 'prod-raven-sideboard',
    name: 'Raven Wood Sideboard',
    subtitle: 'Fluted 4-Door Oak Credenza with Soft-Close Hardware',
    price: 549.00,
    originalPrice: 699.00,
    rating: 5.0,
    reviewCount: 64,
    badge: 'BEST SELLER',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subcategory: 'Storage & Credenzas',
    room: 'Dining Room',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The Raven Wood Sideboard seamlessly unifies storage and sculpture. Four push-to-open fluted tambour doors conceal adjustable internal shelving with integrated cable pass-throughs, ideal for dining flatware or modern audio-visual equipment.',
    shortDescription: 'Fluted tambour oak doors concealing adjustable shelving, integrated wire cutouts, and brass hardware.',
    dimensions: {
      width: '71"',
      depth: '18"',
      height: '31"'
    },
    materials: ['American Oak Veneer & Solid Oak', 'Soft-Close German Hinges', 'Brushed Brass Accents'],
    colors: [
      { name: 'Natural White Oak', hex: '#D8C7B0', imageIndex: 0 },
      { name: 'Ebony Stained Oak', hex: '#2B2B28', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 11,
    isBestSeller: true,
    isFeatured: true,
    careInstructions: [
      'Dust with soft microfiber cloth weekly.',
      'Keep away from direct radiator heating sources.'
    ],
    specifications: {
      'Doors': '4 push-to-open soft-closing fluted panels',
      'Shelving': '3 interior positions per compartment',
      'Cable Management': '2 rear cut-outs for media cables',
      'Weight': '112 lbs'
    }
  },

  // 5. NEW ARRIVAL: Astrid Bouclé Lounge Chair
  {
    id: 'prod-astrid-chair',
    name: 'Astrid Bouclé Lounge Chair',
    subtitle: 'Organic Cocoon Chair with 360° Swivel Base',
    price: 489.00,
    originalPrice: 560.00,
    rating: 4.9,
    reviewCount: 38,
    badge: 'NEW ARRIVAL',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subcategory: 'Chairs & Armchairs',
    room: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1580481077195-c3a9950b898c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An embracing organic silhouette enveloped in thick textured bouclé. Designed with a smooth concealed 360-degree silent swivel mechanism that glides effortlessly.',
    shortDescription: 'Organic cocoon silhouette with silent 360-degree swivel mechanism in heavy textured bouclé.',
    dimensions: {
      width: '34"',
      depth: '35"',
      height: '30"',
      seatHeight: '16.5"'
    },
    materials: ['Curved Molded Shell', 'Cloud Bouclé Fabric', 'Steel Swivel Bearing'],
    colors: [
      { name: 'Cream Bouclé', hex: '#ECE7DF', imageIndex: 0 },
      { name: 'Sage Bouclé', hex: '#879482', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 15,
    isNew: true,
    isFeatured: false,
    careInstructions: ['Dry brush or steam lightly on low setting.'],
    specifications: {
      'Swivel': '360° smooth ball-bearing glide',
      'Foam': 'CertiPUR-US® certified eco foam'
    }
  },

  // 6. Kanso Oak Platform Bed
  {
    id: 'prod-kanso-bed',
    name: 'Kanso Oak Platform Bed',
    subtitle: 'Low-Profile Japanese-Scandinavian Bed with Floating Nightstands',
    price: 899.00,
    originalPrice: 1099.00,
    rating: 4.9,
    reviewCount: 51,
    badge: 'NEW',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    subcategory: 'Beds & Headboards',
    room: 'Bedroom',
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Rooted in Japandi design ideals, the Kanso Platform Bed features an expansive solid oak ledger headboard and integrated cantilevered floating nightstands.',
    shortDescription: 'Japandi low-profile platform bed with integrated floating nightstands in solid white oak.',
    dimensions: {
      width: '82"',
      depth: '88"',
      height: '36"',
      seatHeight: '11"'
    },
    materials: ['Solid European Oak', 'FSC-Certified Slat Base'],
    colors: [
      { name: 'Natural Oak', hex: '#D8C8B3', imageIndex: 0 },
      { name: 'Warm Umber', hex: '#7A6451', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 6,
    isNew: true,
    isFeatured: true,
    careInstructions: ['Dust periodically with dry flannel.'],
    specifications: {
      'Mattress Fit': 'Standard King & Queen sizes',
      'Box Spring': 'Not required; solid wood slat foundation included'
    }
  },

  // 7. Solstice Travertine & Oak Coffee Table
  {
    id: 'prod-solstice-table',
    name: 'Solstice Travertine Coffee Table',
    subtitle: 'Honed Italian Travertine Slab on Solid Oak Plinth',
    price: 499.00,
    originalPrice: 599.00,
    rating: 5.0,
    reviewCount: 43,
    badge: 'EDITORIAL PICK',
    category: 'living-room',
    categoryLabel: 'Living Room',
    subcategory: 'Coffee Tables',
    room: 'Living Room',
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Each Solstice table features a hand-honed unsealed Roman travertine slab highlighting authentic fossilization pockets and earthy veining, resting on an architectural oak pedestal.',
    shortDescription: 'Authentic Roman travertine slab with honed matte edge over architectural oak plinth.',
    dimensions: {
      width: '48"',
      depth: '28"',
      height: '14"'
    },
    materials: ['Natural Roman Travertine Stone', 'Solid White Oak'],
    colors: [
      { name: 'Honed Travertine', hex: '#E2D9CC', imageIndex: 0 }
    ],
    inStock: true,
    stockCount: 7,
    isFeatured: true,
    careInstructions: ['Use stone-safe pH-neutral cleaner. Wipe spills immediately.'],
    specifications: {
      'Stone Origin': 'Tivoli, Italy',
      'Weight': '118 lbs total'
    }
  },

  // 8. Atelier Executive Desk
  {
    id: 'prod-atelier-desk',
    name: 'Atelier Minimalist Desk',
    subtitle: 'Streamlined Oak Desk with Hidden Cord Conduit & Felt Drawer',
    price: 620.00,
    originalPrice: 720.00,
    rating: 4.8,
    reviewCount: 33,
    badge: 'POPULAR',
    category: 'home-office',
    categoryLabel: 'Home Office',
    subcategory: 'Desks',
    room: 'Home Office',
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An uncluttered workspace for focused creativity. Built with solid oak rounded edges, a discrete soft-close drawer lined in Merino wool felt, and a magnetic cable channel.',
    shortDescription: 'Clean lines, warm oak warmth, and discreet integrated wire routing for distraction-free work.',
    dimensions: {
      width: '60"',
      depth: '28"',
      height: '29.5"'
    },
    materials: ['Solid Oak', 'Wool Felt', 'Matte Powder-Coated Steel'],
    colors: [
      { name: 'Bleached Oak', hex: '#E4DACD', imageIndex: 0 },
      { name: 'Walnut Tint', hex: '#5E4D3E', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 12,
    isFeatured: false,
    careInstructions: ['Wipe clean with soft microfiber.'],
    specifications: {
      'Drawer Capacity': 'Fits 16" laptop and stationery',
      'Cable Access': 'Rear brush channel'
    }
  },

  // 9. Horizon Teak Outdoor Lounge Chair
  {
    id: 'prod-horizon-outdoor',
    name: 'Horizon Teak Outdoor Lounge',
    subtitle: 'All-Weather Grade-A Teak Chair with Sunbrella® Cushions',
    price: 460.00,
    originalPrice: 530.00,
    rating: 4.9,
    reviewCount: 29,
    badge: 'OUTDOOR',
    category: 'outdoor',
    categoryLabel: 'Outdoor',
    subcategory: 'Outdoor Seating',
    room: 'Outdoor',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Crafted from sustainable plantation-grown Grade-A Indonesian teak with weather-proof Sunbrella acrylic cushions designed to dry quickly after rainfall.',
    shortDescription: 'Sustainably sourced Grade-A teak and quick-dry Sunbrella performance cushions.',
    dimensions: {
      width: '32"',
      depth: '36"',
      height: '29"'
    },
    materials: ['Grade-A Plantation Teak', 'Sunbrella® All-Weather Fabric', 'Quick-Dry Reticulated Foam'],
    colors: [
      { name: 'Sand Sunbrella', hex: '#E0DDD5', imageIndex: 0 },
      { name: 'Olive Drab', hex: '#555C4D', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 9,
    isFeatured: true,
    careInstructions: ['Teak patinas naturally to silver-gray. Wash with teak soap as needed.'],
    specifications: {
      'Weather Resistance': 'UV, mildew, and chlorine resistant',
      'Hardware': 'Marine-grade 316 stainless steel'
    }
  },

  // 10. Forma Arch Ceramic Mirror
  {
    id: 'prod-forma-mirror',
    name: 'Forma Arch Floor Mirror',
    subtitle: 'Full-Length Floor Mirror in Textured Ceramic Finish',
    price: 349.00,
    originalPrice: 420.00,
    rating: 5.0,
    reviewCount: 47,
    badge: 'ACCENT',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    subcategory: 'Mirrors & Decor',
    room: 'Bedroom',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A stately 72-inch arched mirror wrapped in tactile matte plaster-ceramic composite frame. Can lean securely against wall or mount with heavy-duty safety cleats.',
    shortDescription: 'Dramatic 72" architectural arch frame in tactile warm plaster-finish composite.',
    dimensions: {
      width: '32"',
      depth: '2"',
      height: '72"'
    },
    materials: ['High-Clarity Silver Mirror Glass', 'Cast Ceramic Composite Frame'],
    colors: [
      { name: 'Chalk White', hex: '#F4EFEB', imageIndex: 0 },
      { name: 'Terracotta Ash', hex: '#BA9681', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 16,
    isFeatured: false,
    careInstructions: ['Clean mirror glass with ammonia-free spray.'],
    specifications: {
      'Wall Cleat': 'Included anti-tip and wall-mount bracket set',
      'Weight': '42 lbs'
    }
  },

  // 11. Celine Cane Dining Chair (Pair)
  {
    id: 'prod-celine-chair',
    name: 'Celine Cane Dining Chairs (Set of 2)',
    subtitle: 'Hand-Woven French Cane with Oak Frame',
    price: 499.00,
    originalPrice: 580.00,
    rating: 4.9,
    reviewCount: 54,
    badge: 'BEST VALUE',
    category: 'dining-room',
    categoryLabel: 'Dining Room',
    subcategory: 'Dining Chairs',
    room: 'Dining Room',
    images: [
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Sold as a pair. Natural hand-woven French rattan cane backrest cradles the back with gentle flex, paired with a solid oak frame and upholstered seat cushion.',
    shortDescription: 'Pair of dining chairs pairing hand-woven natural cane with curved solid oak frames.',
    dimensions: {
      width: '21"',
      depth: '22"',
      height: '32"',
      seatHeight: '18"'
    },
    materials: ['Natural Rattan Cane', 'Solid White Oak', 'Oatmeal Linen Seat'],
    colors: [
      { name: 'Natural Oak', hex: '#D6C4AD', imageIndex: 0 },
      { name: 'Black Lacquer', hex: '#262624', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 18,
    isFeatured: false,
    careInstructions: ['Dust cane with soft dry brush.'],
    specifications: {
      'Set Count': '2 chairs included per box',
      'Weight Per Chair': '16 lbs'
    }
  },

  // 12. Sylvan Fluted Nightstand
  {
    id: 'prod-sylvan-nightstand',
    name: 'Sylvan Fluted Nightstand',
    subtitle: 'Bedside Table with Tambour Drawer and Honed Marble Top',
    price: 320.00,
    originalPrice: 380.00,
    rating: 4.8,
    reviewCount: 31,
    badge: 'POPULAR',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
    subcategory: 'Storage & Credenzas',
    room: 'Bedroom',
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Compact bedside luxury. Features vertical tambour wood slats around the perimeter, a smooth sliding drawer, and an Italian Calacatta Viola or Carrara honed marble inset top.',
    shortDescription: 'Bedside table featuring vertical tambour oak ribs and a honed natural marble inset top.',
    dimensions: {
      width: '20"',
      depth: '18"',
      height: '22"'
    },
    materials: ['Solid White Oak', 'Honed Carrara Marble', 'Brass Hardware'],
    colors: [
      { name: 'White Oak & Carrara', hex: '#EDE3D6', imageIndex: 0 },
      { name: 'Dark Oak & Noir Stone', hex: '#3E342B', imageIndex: 1 }
    ],
    inStock: true,
    stockCount: 10,
    isFeatured: false,
    careInstructions: ['Use coasters for hot mugs and glasses.'],
    specifications: {
      'Drawer': 'Soft-close undermount drawer slide',
      'Weight': '35 lbs'
    }
  }
];

export const LOOKBOOKS: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'Warm Minimalism',
    room: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    description: 'Textured bouclé seating paired with raw Roman travertine and light natural oak accents creating an uncluttered sanctuary.',
    featuredProductIds: ['prod-luna-sofa', 'prod-solstice-table', 'prod-milo-chair']
  },
  {
    id: 'look-2',
    title: 'Modern Scandinavian',
    room: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85',
    description: 'Generous solid oak dining with French hand-woven cane details and ambient sculptural lighting for relaxed family dining.',
    featuredProductIds: ['prod-oakwood-table', 'prod-celine-chair', 'prod-raven-sideboard']
  },
  {
    id: 'look-3',
    title: 'Natural Oak Bedroom',
    room: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1400&q=85',
    description: 'Low Japandi platform bed lines, washed Belgian linens, and tactile tambour nightstands welcoming restorative rest.',
    featuredProductIds: ['prod-kanso-bed', 'prod-sylvan-nightstand', 'prod-forma-mirror']
  },
  {
    id: 'look-4',
    title: 'Contemporary Comfort',
    room: 'Living & Lounge',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
    description: 'Deep olive accents, architectural bentwood curves, and tactile hand-knotted wool rugs designed for living.',
    featuredProductIds: ['prod-milo-chair', 'prod-astrid-chair', 'prod-luna-sofa']
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'Interior Architect, Studio Forma',
    city: 'San Francisco, CA',
    quote: 'The Luna Sofa exceeded every expectation. The bouclé has substantial weight and durability, and the proportions sit with genuine architectural restraint. Our clients adore it.',
    verified: true,
    product: 'Luna 3-Seater Sofa',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Marcus & Chloe Vance',
    role: 'Homeowners',
    city: 'Austin, TX',
    quote: 'The Oakwood Dining Table is the true centerpiece of our home. It has hosted holiday dinners for eight and daily breakfast without showing a single mark. White-glove delivery was flawless.',
    verified: true,
    product: 'Oakwood Dining Table',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'David Chen',
    role: 'Architectural Digest Reader',
    city: 'Seattle, WA',
    quote: 'Finding solid wood furniture that isn’t overly traditional is rare. NOVA strikes the exact note of warm minimalism I spent months searching for. Highly recommended.',
    verified: true,
    product: 'Raven Wood Sideboard',
    rating: 5
  }
];

export const PROMO_DISCOUNTS: Record<string, { percent: number; label: string }> = {
  'NOVA10': { percent: 10, label: '10% OFF Welcome Bonus' },
  'WELCOME10': { percent: 10, label: '10% OFF First Order' },
  'SUMMER15': { percent: 15, label: '15% Seasonal Design Offer' }
};
