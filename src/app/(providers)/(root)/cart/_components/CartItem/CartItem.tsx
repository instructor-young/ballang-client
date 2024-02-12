import useMutationAddItemToCart from "@/react-query/cart/useMutationAddItemToCart";
import useMutationRemoveItemFromCart from "@/react-query/cart/useMutationRemoveItemFromCart";
import { CartItem } from "@/types/CartItem.type";
import formatPrice from "@/utils/formatPrice.utils";
import Image from "next/image";

interface CartItemProps {
  cartItem: CartItem;
}

function CartItem({ cartItem }: CartItemProps) {
  const product = cartItem.product;
  const brand = product.brand;
  const { mutateAsync: addItemToCart } = useMutationAddItemToCart();
  const { mutateAsync: removeItemFromCart } = useMutationRemoveItemFromCart();

  const handleClickMinus = () => removeItemFromCart(product.id);
  const handleClickPlus = () => addItemToCart(product.id);

  return (
    <div className="flex h-56 border-t py-5 gap-x-5">
      <div className="relative aspect-[3/4]">
        <Image
          fill
          src={product.imgSrc}
          alt={product.name}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-2.5 grow">
        <div className="font-bold">
          {brand.nameKr} / {brand.nameEn}
        </div>
        <h6 className="text-lg">{product.name}</h6>

        <div className="flex gap-x-2.5">
          <span className="line-through text-red-500">
            {formatPrice(product.originalPrice)}
          </span>
          <span className="font-bold ">{formatPrice(product.price)}</span>
        </div>

        <div className="flex text-sm">
          <div>
            {product.deliveryType} | 잔여재고 {product.onlineStock}ea
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border border-black self-center h-8 w-24 items-stretch">
        <button
          className="bg-black text-white flex items-center justify-center text-lg font-bold"
          onClick={handleClickMinus}
        >
          -
        </button>
        <span className="flex items-center justify-center text-[15px] font-bold">
          {cartItem.quantity}
        </span>
        <button
          className="bg-black text-white flex items-center justify-center text-lg font-bold"
          onClick={handleClickPlus}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
