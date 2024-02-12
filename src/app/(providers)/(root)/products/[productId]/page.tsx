import api from "@/api";
import Page from "@/components/Page";
import formatPrice from "@/utils/formatPrice.utils";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./_components/AddToCartButton";

async function ProductPage(props: { params: { productId: string } }) {
  const productId = props.params.productId;
  const product = await api.products.getProduct(Number(productId));

  return (
    <Page>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <div className="relative aspect-[3/4]">
          <Image
            alt={product.name}
            src={product.imgSrc}
            fill
            className="object-cover"
          />
        </div>
        <div className="py-8 flex flex-col">
          <Link
            href={`/brands?brandId=${product.brand.id}`}
            className="text-[15px] border-b pb-2.5 mb-2.5  font-bold"
          >
            <h2>
              {product.brand.nameKr} / {product.brand.nameEn}
            </h2>
          </Link>

          <h1 className="text-lg">{product.name}</h1>

          <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
            <div className="text-slate-900 font-bold">정가</div>
            <div className="col-span-4 line-through text-red-500">
              {formatPrice(product.originalPrice)}
            </div>
            <div className="text-slate-900 font-bold">판매가</div>
            <div className="col-span-4 font-semibold">
              {formatPrice(product.price)}
            </div>
            <div className="text-slate-900 font-bold">배송</div>
            <div className="col-span-4">{product.deliveryType}</div>
            <div className="text-slate-900 font-bold">잔여 재고</div>
            <div className="col-span-4">{product.onlineStock}</div>
          </div>

          <AddToCartButton productId={product.id} />
        </div>
      </section>
    </Page>
  );
}

export default ProductPage;
