export type LayoutType = "card" | "fullscreen" | "specs";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  description: string;
  badges?: string[];
  layoutType: LayoutType;
  variants?: { name: string; options: string[] }[];
  charms?: string[];
};

export const getCategoryBySlug = async (slug: string): Promise<string | undefined> => {
  const product = products.find(p => p.slug === slug);
  return Promise.resolve(product?.category);
};

export const products: Product[] = [
  {
    id: "1",
    slug: "gold-necklace",
    name: "Gold Plated Necklace",
    price: 1200,
    images: ["/images/products/necklace-1.jpg"],
    category: "necklaces",
    description: "Elegant gold plated necklace with a delicate chain and pendant.",
    badges: ["Best Seller"],
    layoutType: "card",
    variants: [
      { name: "Length", options: ["16in", "18in", "20in"] },
      { name: "Color", options: ["Gold", "Rose Gold", "Silver"] }
    ],
    charms: ["initial-a", "pearl-1", "gold-1"]
  },
  {
    id: "2",
    slug: "silver-bracelet",
    name: "Sterling Silver Bracelet",
    price: 850,
    images: ["/images/products/bracelet-1.jpg"],
    category: "bracelets",
    description: "Handcrafted sterling silver bracelet with intricate details.",
    badges: ["New"],
    layoutType: "fullscreen",
    variants: [
      { name: "Size", options: ["Small", "Medium", "Large"] }
    ],
    charms: ["initial-b", "pearl-2", "colored-1"]
  },
  {
    id: "3",
    slug: "pearl-ring",
    name: "Pearl Statement Ring",
    price: 650,
    images: ["/images/products/ring-1.jpg"],
    category: "rings",
    description: "Elegant pearl ring that makes a statement.",
    layoutType: "specs",
    variants: [
      { name: "Size", options: ["5", "6", "7", "8", "9"] }
    ]
  }
];

export const getProducts = async (): Promise<Product[]> => {
  // In a real app, this would fetch from an API
  return Promise.resolve(products);
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  // In a real app, this would fetch from an API
  return Promise.resolve(products.find(product => product.slug === slug));
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  // In a real app, this would fetch from an API
  return Promise.resolve(products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  ));
};
