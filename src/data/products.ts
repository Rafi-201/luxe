export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  inStock: boolean;
  featured?: boolean;
  rating?: number;
  reviews?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Trendy clothing and accessories",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
  },
  {
    id: "home",
    name: "Home & Living",
    description: "Beautify your living space",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    id: "beauty",
    name: "Beauty",
    description: "Skincare and cosmetics",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Earbuds",
    description: "Experience crystal-clear audio with our premium wireless earbuds. Features active noise cancellation, 24-hour battery life, and ergonomic design for all-day comfort.",
    price: 4999,
    originalPrice: 6999,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600&q=80",
    ],
    category: "electronics",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 256,
  },
  {
    id: "2",
    name: "Handcrafted Leather Wallet",
    description: "Genuine leather wallet handcrafted by skilled artisans. Features multiple card slots, coin pocket, and RFID blocking technology.",
    price: 1899,
    originalPrice: 2499,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    ],
    category: "fashion",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 189,
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    description: "Track your health and fitness goals with our advanced smartwatch. Heart rate monitoring, GPS tracking, water-resistant design, and 7-day battery life.",
    price: 7499,
    originalPrice: 9999,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    ],
    category: "electronics",
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 423,
  },
  {
    id: "4",
    name: "Elegant Silk Scarf",
    description: "Luxurious silk scarf with intricate hand-printed patterns. Perfect for any occasion, adds elegance to your outfit.",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    ],
    category: "fashion",
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 87,
  },
  {
    id: "5",
    name: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and color temperature. USB charging port and touch controls.",
    price: 1999,
    originalPrice: 2799,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    ],
    category: "home",
    inStock: true,
    featured: true,
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "6",
    name: "Organic Skincare Set",
    description: "Complete skincare routine with natural and organic ingredients. Includes cleanser, toner, serum, and moisturizer.",
    price: 3499,
    originalPrice: 4499,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    ],
    category: "beauty",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 312,
  },
  {
    id: "7",
    name: "Ceramic Plant Pot Set",
    description: "Set of 3 handcrafted ceramic plant pots in varying sizes. Modern minimalist design perfect for indoor plants.",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    ],
    category: "home",
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 98,
  },
  {
    id: "8",
    name: "Premium Bluetooth Speaker",
    description: "Portable speaker with rich 360° sound, waterproof design, and 20-hour playtime. Perfect for outdoor adventures.",
    price: 3999,
    originalPrice: 5499,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    ],
    category: "electronics",
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 234,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};
