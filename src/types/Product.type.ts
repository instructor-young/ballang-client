import { Brand } from "./Brand.type";

export type Product = {
  id: number;
  name: string;
  brandId: number;
  brand: Brand;
  deliveryType: "당일배송";
  imgSrc: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
};
