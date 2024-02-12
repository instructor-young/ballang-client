import { client } from "..";
import { GetBrandData, GetBrandsData } from "./brands.data";

async function getBrands() {
  const response = await client.get<GetBrandsData>("/brands");
  const data = response.data;
  const { brands } = data;

  return brands;
}

async function getBrand(brandId: number) {
  const response = await client.get<GetBrandData>(`/brands/${brandId}`);
  const data = response.data;
  const { brand } = data;

  return brand;
}

const brandsAPI = {
  getBrands,
  getBrand,
};

export default brandsAPI;
