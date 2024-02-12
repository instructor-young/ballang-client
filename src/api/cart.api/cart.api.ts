import { Response } from "@/types/Response.type";
import { client } from "..";
import {
  AddItemToCartData,
  ClearItemInCartData,
  GetCartData,
  RemoveItemFromCartData,
} from "./cart.data";

async function getCart() {
  const response = await client.get<Response<GetCartData>>("/cart");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const cart = data.result;

  return cart;
}

async function addItemToCart(productId: number) {
  const response = await client.post<Response<AddItemToCartData>>(
    `/cart/products/${productId}`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const cartItem = data.result;

  return cartItem;
}

async function removeItemFromCart(productId: number) {
  const response = await client.delete<Response<RemoveItemFromCartData>>(
    `/cart/products/${productId}`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const cartItem = data.result;

  return cartItem;
}

async function clearItemInCart(productId: number) {
  const response = await client.delete<Response<ClearItemInCartData>>(
    `/cart/products/${productId}/clear`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const cartItem = data.result;

  return cartItem;
}

const cartAPI = {
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearItemInCart,
};

export default cartAPI;
