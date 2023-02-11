import FlipCard, { FlipCardProps } from "@/components/flip-cards";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { energyInHouses } from "../constant";

import * as Styled from "pages/energy-in-house/House.styled";
import MainLayout from "@/layout/main/main";

const EnergyInHouseDetail: NextPage = () => {
  const [activeData, setActiveData] = useState<
    Omit<FlipCardProps, "href"> & { iframe: string }
  >();

  const router = useRouter();

  useEffect(() => {
    setActiveData(
      energyInHouses.find((s, i) => i === Number(router.query.id) - 1)
    );
  }, [router.query]);

  return activeData ? (
    <MainLayout pageTitle={`${activeData.title}`}>
      <Styled.DetailContent>
        <Link href={"/energy-in-house"}>
          <HiOutlineArrowLeft color="#fff" />
        </Link>
        <div>
          <Image
            src={activeData.image}
            alt={"Resim"}
            width={100}
            height={100}
          />
          <h2>{activeData.title}</h2>
        </div>
        <p>{activeData.text}</p>
      </Styled.DetailContent>
    </MainLayout>
  ) : null;
};

export default EnergyInHouseDetail;
