export type CharmCategory = 'initials' | 'pearls' | 'gold' | 'colored';

export type Charm = {
  id: string;
  name: string;
  category: CharmCategory;
  price: number;
  image: string;
};

export const charms: Charm[] = [
  // Initials
  { id: 'initial-a', name: 'Initial A', category: 'initials', price: 100, image: '/images/charms/initial-a.png' },
  { id: 'initial-b', name: 'Initial B', category: 'initials', price: 100, image: '/images/charms/initial-b.png' },
  { id: 'initial-c', name: 'Initial C', category: 'initials', price: 100, image: '/images/charms/initial-c.png' },
  
  // Pearls
  { id: 'pearl-1', name: 'White Pearl', category: 'pearls', price: 150, image: '/images/charms/pearl-1.png' },
  { id: 'pearl-2', name: 'Pink Pearl', category: 'pearls', price: 150, image: '/images/charms/pearl-2.png' },
  { id: 'pearl-3', name: 'Black Pearl', category: 'pearls', price: 150, image: '/images/charms/pearl-3.png' },
  
  // Gold
  { id: 'gold-1', name: 'Gold Circle', category: 'gold', price: 120, image: '/images/charms/gold-1.png' },
  { id: 'gold-2', name: 'Gold Star', category: 'gold', price: 120, image: '/images/charms/gold-2.png' },
  { id: 'gold-3', name: 'Gold Heart', category: 'gold', price: 120, image: '/images/charms/gold-3.png' },
  
  // Colored
  { id: 'colored-1', name: 'Blue Stone', category: 'colored', price: 130, image: '/images/charms/colored-1.png' },
  { id: 'colored-2', name: 'Red Stone', category: 'colored', price: 130, image: '/images/charms/colored-2.png' },
  { id: 'colored-3', name: 'Green Stone', category: 'colored', price: 130, image: '/images/charms/colored-3.png' },
];

export const getCharms = async (category?: CharmCategory): Promise<Charm[]> => {
  // In a real app, this would fetch from an API
  if (category) {
    return Promise.resolve(charms.filter(charm => charm.category === category));
  }
  return Promise.resolve(charms);
};

export const getCharmById = async (id: string): Promise<Charm | undefined> => {
  // In a real app, this would fetch from an API
  return Promise.resolve(charms.find(charm => charm.id === id));
};