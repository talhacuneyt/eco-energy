import Link from "next/link";
import Image from "next/image";

import MainLayout from "@/layout/main";

import * as Styled from "./home.styled";

export default function Home() {
  return (
    <MainLayout pageTitle="Anasayfa">
      <Styled.HomePage>
        <Styled.Content>
          <Styled.ContentImage>
            <div>
              <Image
                src="/images/home/asd.png"
                alt="Resim"
                width={460}
                height={460}
              />
            </div>
          </Styled.ContentImage>
          <Styled.ContentButton>
            <div>
              <Link href={"sustainable"}>SÜRDÜRÜLEBİLİR ENERJİ NEDİR</Link>
            </div>
            <div>
              <Link href={"/energy-in-house"}>EVDE ENERJİ</Link>
            </div>
            <div>
              <Link href={""}>ÜLKEDE ENERJİ</Link>
            </div>
            <div>
              <Link href={""}>FATURA HESABI YAPMA</Link>
            </div>
          </Styled.ContentButton>
        </Styled.Content>
      </Styled.HomePage>
    </MainLayout>
  );
}
