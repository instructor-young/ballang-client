"use client";

import Button from "@/components/Button";
import { useAuth } from "@/contexts/auth.context";
import useMutationAddItemToCart from "@/react-query/cart/useMutationAddItemToCart";
import useMutationClearItemInCart from "@/react-query/cart/useMutationClearItemInCart";
import useQueryGetCart from "@/react-query/cart/useQueryGetCart";
import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  productId: number;
}

function AddToCartButton({ productId }: AddToCartButtonProps) {
  const auth = useAuth();
  const router = useRouter();
  const { data: cart } = useQueryGetCart();
  const { mutateAsync: addItemToCart } = useMutationAddItemToCart();
  const { mutateAsync: clearItemInCart } = useMutationClearItemInCart();
  const isAlreadyAdded =
    auth.isLoggedIn &&
    cart?.items.findIndex((item) => item.product.id === productId) !== -1;

  const handleClickButton = async () => {
    if (!auth.isLoggedIn) return router.push("/log-in");

    if (isAlreadyAdded) {
      await clearItemInCart(productId);

      alert("장바구니에서 제거되었습니다");
    } else {
      await addItemToCart(productId);
      alert("장바구니에 추가되었습니다");
    }
  };

  return (
    <Button
      color={isAlreadyAdded ? "white" : "black"}
      onClick={handleClickButton}
    >
      {isAlreadyAdded ? "장바구니에서 빼기" : "장바구니에 담기"}
    </Button>
  );
}

export default AddToCartButton;
