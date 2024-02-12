import axios from "axios";
import brandsAPI from "./brands.api/brands.api";
import productsAPI from "./products.api/products.api";

export const client = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
});

const api = {
  brands: brandsAPI,
  products: productsAPI,
};

export default api;
