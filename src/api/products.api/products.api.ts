import { Response } from "@/types/Response.type";
import { client } from "..";
import { GetProductData, GetProductsData } from "./products.data";

async function getProducts() {
  const response = await client.get<Response<GetProductsData>>("/products");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const products = data.result;

  return products;
}

async function getProduct(productId: number) {
  const response = await client.get<Response<GetProductData>>(
    `/products/${productId}`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const product = data.result;

  return product;
}

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
