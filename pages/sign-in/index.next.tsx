import React from "react";

import MainLayout from "@/layout/main";

import * as Styled from "./SignIn.styled";

export default function SignIn() {
  return (
    <MainLayout pageTitle="Üye Ol">
      <Styled.SignIn>
        <input type="text" placeholder="İsim" />
        <input type="text" placeholder="Soyisim" />
        <input type="email" placeholder="E-Posta" />
        <input type="number" placeholder="Telefon Numarası" />
        <input type="submit" placeholder="Gönder" />
      </Styled.SignIn>
    </MainLayout>
  );
}
