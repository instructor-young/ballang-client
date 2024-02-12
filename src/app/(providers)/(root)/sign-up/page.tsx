"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Page from "@/components/Page";

function SignUpPage() {
  const handleClickSignUp = () => {};

  return (
    <Page>
      <Heading>회원가입</Heading>

      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto">
        <Input label="이메일" autoFocus type="email" />
        <Input label="비밀번호" type="password" />
        <Input label="비밀번호 확인" type="password" />

        <div className="mt-2" />

        <Button color="black" onClick={handleClickSignUp}>
          회원가입하기
        </Button>
      </section>
    </Page>
  );
}

export default SignUpPage;
