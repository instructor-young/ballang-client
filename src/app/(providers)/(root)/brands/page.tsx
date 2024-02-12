import api from "@/api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";
import BrandLink from "./_components/BrandLink";

async function BrandsPage(props: { searchParams: { brandId?: string } }) {
  const brandId = props.searchParams.brandId;
  const brands = await api.brands.getBrands();
  let products = [];

  if (brandId) {
    const brand = await api.brands.getBrand(Number(brandId));
    products = brand.products;
  } else {
    products = await api.products.getProducts();
  }

  return (
    <Page fullWidth>
      <Heading>Brands</Heading>

      <nav className="mx-auto max-w-screen-lg mb-16">
        <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
          <li className="col-span-3 sm:col-span-4 md:col-span-6 mb-4">
            <BrandLink href="/brands" label="ALL" isActive={!brandId} />
          </li>
          {brands.map((brand) => (
            <li key={brand.id}>
              <BrandLink
                href={`/brands?brandId=${brand.id}`}
                label={brand.nameKr}
                isActive={brandId === String(brand.id)}
              />
            </li>
          ))}
        </ul>
      </nav>

      <ProductCardsList products={products} />
    </Page>
  );
}

export default BrandsPage;
