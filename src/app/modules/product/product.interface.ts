type TBookCategory =
  | 'Fiction'
  | 'Science'
  | 'SelfDevelopment'
  | 'Poetry'
  | 'Religious';

export type TBook = {
  title: string;
  author: string;
  price: number;
  category: TBookCategory;
  description: string;
  quantity: number;
  image: string; 
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TUpdateBookData = {
  name?: string;
  author?: string;
  price?: number;
  category?: string;
  image?: string;
  description?: string;
  quantity?: number;
  inStock?: boolean;
};
