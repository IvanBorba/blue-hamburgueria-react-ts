export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}
