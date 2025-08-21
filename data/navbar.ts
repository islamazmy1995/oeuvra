export interface NavItem {
  name: string;
  href: string;
  image?: string;
  children?: NavItem[];
  icon?: string;
}

export const shopItems: NavItem[] = [
  {
    name: 'Bag Charms',
    href: '/collections/bag-charms',
  },
  {
    name: 'Hand Chains',
    href: '/collections/hand-chains',
  },
  {
    name: 'Necklaces',
    href: '/collections/necklaces',
  },
  {
    name: 'Bracelets',
    href: '/collections/bracelets',
  },
  {
    name: 'Earrings',
    href: '/collections/earrings',
  },
  {
    name: 'Rings',
    href: '/collections/rings',
  },
  {
    name: 'Anklets',
    href: '/collections/anklets',
  },
  {
    name: 'Hair Accessories',
    href: '/collections/hair-accessories',
  },
  {
    name: 'Waist Chains',
    href: '/collections/waist-chains',
  },
  {
    name: 'Foot Chains',
    href: '/collections/foot-chains',
  },
  {
    name: 'Phone Straps',
    href: '/collections/phone-straps',
  }
];

export const customizeItems: NavItem[] = [
  {
    name: 'Charms Necklace',
    href: '/customize/charms-necklace',
  },
  {
    name: 'Charms Bracelet',
    href: '/customize/charms-bracelet',
  },
  {
    name: 'Key Chains',
    href: '/customize/key-chains',
  },
  {
    name: 'Charms',
    href: '',
    children: [
      {
        name: 'Gold Charms',
        href: '/customize/charms/gold',
      },
      {
        name: 'Silver Charms',
        href: '/customize/charms/silver',
      },
      {
        name: 'Diamond Charms',
        href: '/customize/charms/diamond',
      }
    ]
  }
];

export const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop', icon: '🛍️' },
  { name: 'Customize', href: '/customize', icon: '✨' },
  { name: 'About', href: '/about', icon: 'ℹ️' },
];

export const footerNav = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'New Arrivals', href: '/shop?sort=newest' },
    { name: 'Best Sellers', href: '/shop?sort=best-sellers' },
    { name: 'Sale', href: '/sale' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
  ],
  help: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Shipping & Returns', href: '/shipping-returns' },
    { name: 'Size Guide', href: '/size-guide' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};
