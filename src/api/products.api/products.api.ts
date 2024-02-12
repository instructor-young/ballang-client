import { client } from "..";
import { GetProductData, GetProductsData } from "./products.data";

async function getProducts() {
  const response = await client.get<GetProductsData>("/products");
  const data = response.data;
  const { products } = data;

  return products;
}

async function getProduct(productId: number) {
  const response = await client.get<GetProductData>(`/products/${productId}`);
  const data = response.data;
  const { product } = data;

  return product;
}

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
