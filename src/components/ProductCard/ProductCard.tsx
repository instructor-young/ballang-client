import api from "@/api";
import formatPrice from "@/utils/formatPrice.utils";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Awaited<ReturnType<typeof api.products.getProducts>>[number];
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="relative flex flex-col group"
    >
      <div className="aspect-[3/4] relative mb-4">
        <Image
          alt={product.name}
          src={product.imgSrc}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
          unoptimized
        />
      </div>

      <div className="grid gap-y-2">
        <div className="text-sm font-bold">{product.brand.nameEn}</div>
        <h6 className="text-[15px]">{product.name}</h6>
        <div className="text-sm flex flex-col sm:flex-row items-baseline gap-1.5">
          <span className="text-red-500 line-through font-semibold">
            {formatPrice(product.originalPrice)}
          </span>
          <span className="font-bold">{formatPrice(product.price)}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
