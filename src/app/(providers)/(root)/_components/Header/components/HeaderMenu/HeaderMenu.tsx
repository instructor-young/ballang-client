"use client";

import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";

function HeaderMenu() {
  const auth = useAuth();

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {auth.isLoggedIn ? (
        <>
          <Link
            href="/cart"
            className="text-[15px] font-medium text-gray-800 hover:text-black transition"
          >
            장바구니
          </Link>
          <Link
            href="/my-info"
            className="text-[15px] font-medium text-gray-800 hover:text-black transition"
          >
            내 정보
          </Link>
        </>
      ) : (
        <Link
          href="/sign-up"
          className="text-[15px] font-medium text-gray-800 hover:text-black transition"
        >
          회원가입
        </Link>
      )}
    </div>
  );
}

export default HeaderMenu;
