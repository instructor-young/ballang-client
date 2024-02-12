import { ComponentProps } from "react";
import ProductCard from "../ProductCard";

interface ProductCardsListProps {
  products: Array<ComponentProps<typeof ProductCard>["product"]>;
}

function ProductCardsList({ products }: ProductCardsListProps) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductCardsList;
