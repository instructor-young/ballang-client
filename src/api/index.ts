import axios from "axios";
import productsAPI from "./products.api";

export const client = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
});

const api = {
  products: productsAPI,
};

export default api;
