export type Category = {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
  };
  
  export const categories: Category[] = [
    {
      id: "1",
      name: "Necklaces",
      slug: "necklaces",
      description: "Elegant necklaces for every occasion",
      image: "/images/categories/necklaces.jpg"
    },
    {
      id: "2",
      name: "Bracelets",
      slug: "bracelets",
      description: "Handcrafted bracelets with unique designs",
      image: "/images/categories/bracelets.jpg"
    },
    {
      id: "3",
      name: "Rings",
      slug: "rings",
      description: "Beautiful rings to complete your look",
      image: "/images/categories/rings.jpg"
    },
    {
      id: "4",
      name: "Earrings",
      slug: "earrings",
      description: "Stylish earrings for any outfit",
      image: "/images/categories/earrings.jpg"
    }
  ];
  
  export const getCategories = async (): Promise<Category[]> => {
    // In a real app, this would fetch from an API
    return Promise.resolve(categories);
  };
  
  export const getCategoryBySlug = async (slug: string): Promise<Category | undefined> => {
    // In a real app, this would fetch from an API
    return Promise.resolve(categories.find(category => category.slug === slug));
  };