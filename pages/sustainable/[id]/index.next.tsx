import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLeft } from "react-icons/hi";

import { FlipCardProps } from "@/components/flip-cards";
import MainLayout from "@/layout/main";

import { sustainables } from "../constants";
import * as Styled from "pages/sustainable/Sustainable.styled";

const SustainableDetail: NextPage = () => {
  const [activeData, setActiveData] = useState<
    Omit<FlipCardProps, "href"> & { iframe: string }
  >();

  const router = useRouter();

  useEffect(() => {
    setActiveData(
      sustainables.find((s, i) => i === Number(router.query.id) - 1)
    );
  }, [router.query]);

  return activeData ? (
    <MainLayout pageTitle={`${activeData.title}`}>
      <Styled.DetailContent>
        <Link href={"/sustainable"}>
          <HiOutlineArrowLeft color="#fff" />
        </Link>
        <div>
          <Image src={activeData.image} alt={"Resim"} width={100} height={100} />
          <h2>{activeData.title}</h2>
        </div>
        <p>{activeData.text}</p>
        <h2>{activeData.description}</h2>
        <iframe width="100%" height="600px" src={activeData.iframe}></iframe>
      </Styled.DetailContent>
    </MainLayout>
  ) : null;
};

export default SustainableDetail;
