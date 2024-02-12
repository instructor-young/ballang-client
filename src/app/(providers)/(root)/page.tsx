import api from "@/api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";

async function HomePage() {
  const products = await api.products.getProducts();

  return (
    <Page fullWidth>
      <Heading>Trending</Heading>
      <ProductCardsList products={products} />
    </Page>
  );
}

export default HomePage;
