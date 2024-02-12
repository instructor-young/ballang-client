import api from "@/api";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";

async function HomePage() {
  const products = await api.products.getProducts();

  return (
    <Page>
      <section className="flex flex-col items-center gap-y-12">
        <h2 className="font-bold text-3xl">Trending</h2>
        <ProductCardsList products={products} />
      </section>
    </Page>
  );
}

export default HomePage;
