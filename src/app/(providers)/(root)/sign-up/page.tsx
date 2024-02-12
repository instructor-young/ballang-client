"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import useMutationSignUp from "@/react-query/auth/useMutationSignUp";
import { useState } from "react";

function SignUpPage() {
  const { mutateAsync: signUp, isPending } = useMutationSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const auth = useAuth();

  const handleClickSignUp = async () => {
    if (!email.trim()) return alert("이메일을 입력해 주세요");
    if (!password.trim()) return alert("비밀번호를 입력해 주세요");
    if (!passwordConfirm.trim()) return alert("비밀번호 확인을 입력해 주세요");
    if (password.trim() !== passwordConfirm.trim())
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");

    try {
      await signUp({ email, password });
      auth.setIsLoggedIn(true);
    } catch (e) {
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <Page>
      <Heading>회원가입</Heading>

      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto">
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
        <Input
          label="비밀번호 확인"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          disabled={isPending}
        />

        <div className="mt-2" />

        <Button color="black" onClick={handleClickSignUp} disabled={isPending}>
          회원가입하기
        </Button>
      </section>
    </Page>
  );
}

export default SignUpPage;
