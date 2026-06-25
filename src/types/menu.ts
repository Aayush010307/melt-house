export type DietaryFlag =
  | 'veg'
  | 'non-veg'
  | 'vegan-option'
  | 'gluten-free'
  | 'contains-dairy'
  | 'contains-nuts'
  | 'contains-eggs'
  | 'contains-alcohol'
  | 'spicy'
  | 'contains-seafood'
  | 'contains-pork';

export type MenuTab = 'food' | 'coffee' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  dietary: DietaryFlag[];
  isSignature?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tab: MenuTab;
  items: MenuItem[];
}