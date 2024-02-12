import { Brand } from "@/types/Brand.type";
import { Product } from "@/types/Product.type";

export type GetBrandsData = {
  brands: Brand[];
};

export type GetBrandData = {
  brand: Brand & { products: Product[] };
};
