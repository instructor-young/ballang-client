"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import useMutationLogIn from "@/react-query/auth/useMutationLogIn";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LogInModal() {
  const { mutateAsync: logIn, isPending } = useMutationLogIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();

  const handleClickLogIn = async () => {
    if (!email.trim()) return alert("이메일을 입력해 주세요");
    if (!password.trim()) return alert("비밀번호를 입력해 주세요");

    try {
      await logIn({ email, password });
      auth.setIsLoggedIn(true);
      router.push("/");
      modal.close();
    } catch (e) {
      alert("로그인에 실패하였습니다.");
    }
  };

  return (
    <Modal>
      <Heading>로그인</Heading>

      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <Input
          label="이메일"
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
        <Input
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />

        <div className="mt-2" />

        <Button color="black" onClick={handleClickLogIn} disabled={isPending}>
          로그인하기
        </Button>
      </section>
    </Modal>
  );
}

export default LogInModal;
