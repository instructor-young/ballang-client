import { Product } from "@/types/Product.type";
import { client } from ".";

async function getProducts() {
  const response = await client.get<{ products: Product[] }>("/products");
  const data = response.data;
  const { products } = data;

  return products;
}

async function getProduct(productId: number) {
  const response = await client.get<{ product: Product }>(
    `/products/${productId}`
  );
  const data = response.data;
  const { product } = data;

  return product;
}

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
