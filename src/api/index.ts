import axios from "axios";
import authAPI from "./auth.api/auth.api";
import brandsAPI from "./brands.api/brands.api";
import cartAPI from "./cart.api/cart.api";
import productsAPI from "./products.api/products.api";

export const client = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

const api = {
  auth: authAPI,
  brands: brandsAPI,
  cart: cartAPI,
  products: productsAPI,
};

export default api;
