"use client";

import api from "@/api";
import { Authenticated, useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogInModal from "../LogInModal";

function HeaderMenu() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();

  const handleClickLogOut = async () => {
    await api.auth.logOut();
    auth.setIsLoggedIn(false);

    router.push("/");
  };

  const handleClickLogIn = () => {
    modal.open(<LogInModal />);
  };

  return (
    <Authenticated>
      <div className="ml-auto flex items-center gap-x-4">
        {auth.isLoggedIn ? (
          <>
            <Link
              href="/cart"
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              장바구니
            </Link>

            <button
              onClick={handleClickLogOut}
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link
              href="/sign-up"
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              회원가입
            </Link>
            <button
              onClick={handleClickLogIn}
              className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            >
              로그인
            </button>
          </>
        )}
      </div>
    </Authenticated>
  );
}

export default HeaderMenu;
