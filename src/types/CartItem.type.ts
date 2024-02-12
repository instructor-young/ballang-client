import { Product } from "./Product.type";

export type CartItem = {
  id: number;
  product: Product;
  quantity: number;
  createdAt: number;
  updatedAt: number;
};
