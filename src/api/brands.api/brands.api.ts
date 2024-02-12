import { Response } from "@/types/Response.type";
import { client } from "..";
import { GetBrandData, GetBrandsData } from "./brands.data";

async function getBrands() {
  const response = await client.get<Response<GetBrandsData>>("/brands");
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const brands = data.result;

  return brands;
}

async function getBrand(brandId: number) {
  const response = await client.get<Response<GetBrandData>>(
    `/brands/${brandId}`
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const brand = data.result;

  return brand;
}

const brandsAPI = {
  getBrands,
  getBrand,
};

export default brandsAPI;
