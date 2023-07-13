export type ProductType = {
  name: string;
  price: number;
  description: string;
  tags?: string;
  image?: string;
  id: string;
};

export type ProductWithId = ProductType & { id: string | number };
