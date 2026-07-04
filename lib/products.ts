export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Ring',
    slug: 'diamond-ring',
    price: 299900,
    description: 'Elegant diamond ring with white gold band',
  },
  {
    id: '2',
    name: 'Pearl Necklace',
    slug: 'pearl-necklace',
    price: 199900,
    description: 'Classic pearl necklace with silver chain',
  },
  {
    id: '3',
    name: 'Gold Bracelet',
    slug: 'gold-bracelet',
    price: 149900,
    description: 'Stylish gold bracelet with intricate design',
  },
];