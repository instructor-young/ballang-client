import { Brand } from "@/types/Brand.type";
import { Product } from "@/types/Product.type";

export type GetBrandsData = Brand[];

export type GetBrandData = Brand & { products: Product[] };
