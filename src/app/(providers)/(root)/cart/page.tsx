"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import useQueryGetCart from "@/react-query/cart/useQueryGetCart";
import { useRouter } from "next/navigation";
import CartItem from "./_components/CartItem";

function CartPage() {
  const { data: cart } = useQueryGetCart();
  const router = useRouter();

  return (
    <Page>
      <Heading>장바구니</Heading>

      {cart ? (
        cart.items.length > 0 ? (
          <section>
            <ul className="border-b">
              {cart?.items.map((cartItem) => (
                <li key={cartItem.id}>
                  <CartItem cartItem={cartItem} />
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="flex items-center justify-center flex-col">
            <h6>장바구니가 비어 있습니다.</h6>

            <div className="w-64 mt-8">
              <Button onClick={() => router.push("/")}>쇼핑하러 가기</Button>
            </div>
          </section>
        )
      ) : null}
    </Page>
  );
}

export default CartPage;
