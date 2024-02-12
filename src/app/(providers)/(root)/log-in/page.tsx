"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import useMutationLogIn from "@/react-query/auth/useMutationLogIn";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LogInPage() {
  const { mutateAsync: logIn, isPending } = useMutationLogIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const router = useRouter();

  const handleClickLogIn = async () => {
    if (!email.trim()) return alert("이메일을 입력해 주세요");
    if (!password.trim()) return alert("비밀번호를 입력해 주세요");

    try {
      await logIn({ email, password });
      auth.setIsLoggedIn(true);
    } catch (e) {
      alert("로그인에 실패하였습니다.");
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push("/");
    }
  }, [auth.isLoggedIn, router]);

  return (
    <Page>
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
    </Page>
  );
}

export default LogInPage;
