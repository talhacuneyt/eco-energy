import React, { useEffect, useState } from "react";

import InvoiceCards from "@/components/invoice-cards";
import MainLayout from "@/layout/main";
import CityBar from "@/widgets/city-bar";
import Table from "@/widgets/table";

import * as Styled from "./Invoice.styled";
import { CityProps } from "@/widgets/city-bar/types";

export default function Invoice() {
  const [information, setInformation] = useState<
    { city: Omit<CityProps, "id"> } & { index: number }
  >({
    city: {
      electricity: {
        kdv: 0,
        price: 0,
      },
      name: "",
      naturalGas: {
        kdv: 0,
        price: 0,
      },
      water: {
        kdv: 0,
        price: 0,
      },
    },
    index: 0,
  });

  const [payments, setPayments] = useState<
    Array<{
      createdDate: string;
      kdv: number;
      price: number;
      type: string;
      who: string;
    }>
  >([]);

  const [naturalGas, setNaturalGas] = useState<string>("");
  const [electricity, setElectricity] = useState<string>("");
  const [water, setWater] = useState<string>("");
  const [who, setWho] = useState<string>("");

  const getScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 1000,
    });
  };

  const onNaturalGasSubmit = (data: { kdv: number; price: number }) => {
    getScroll();

    payments.push({
      ...payments,
      who: who,
      createdDate: new Date().toLocaleString(),
      kdv: data.kdv,
      price: data.price * data.kdv,
      type: "Doğal Gaz",
    });

    setPayments([...payments]);
  };

  const onElectricitySubmit = (data: { kdv: number; price: number }) => {
    getScroll();

    payments.push({
      ...payments,
      who: who,
      createdDate: new Date().toLocaleString(),
      kdv: data.kdv,
      price: data.price * data.kdv,
      type: "Elektrik",
    });

    setPayments([...payments]);
  };

  const onWaterSubmit = (data: { kdv: number; price: number }) => {
    getScroll();

    payments.push({
      ...payments,
      who: who,
      createdDate: new Date().toLocaleString(),
      kdv: data.kdv,
      price: data.price * data.kdv,
      type: "Su",
    });

    setPayments([...payments]);
  };

  return (
    <MainLayout pageTitle="Fatura Hesabı">
      <Styled.Invoice>
        <Styled.Wrapper>
          <CityBar
            handleClick={(city, index) =>
              setInformation({
                city: { ...city },
                index,
              })
            }
          />
          <div>
            <div>
              <InvoiceCards
                onChange={(e) => setWho(e.currentTarget.value)}
                text="Hesap yapacak kisi"
                title="Kisisel bilgiler"
                value={who}
              />
              <InvoiceCards
                kdv={information.city.electricity.kdv}
                onChange={(e) => setNaturalGas(e.currentTarget.value)}
                onSubmit={() => onNaturalGasSubmit(information.city.naturalGas)}
                text="m3 değerini giriniz..."
                title="Doğal Gaz Faturası Hesapla"
                value={naturalGas}
              />
            </div>
            <div>
              <InvoiceCards
                kdv={information.city.naturalGas.kdv}
                onChange={(e) => setElectricity(e.currentTarget.value)}
                onSubmit={() =>
                  onElectricitySubmit(information.city.electricity)
                }
                text="kwh değerini giriniz..."
                title="Elektrik Faturası Hesapla"
                value={electricity}
              />
              <InvoiceCards
                kdv={information.city.water.kdv}
                onChange={(e) => setWater(e.currentTarget.value)}
                onSubmit={() => onWaterSubmit(information.city.water)}
                text="m3 değerini giriniz..."
                title="Su Faturası Hesaplama"
                value={water}
              />
            </div>
          </div>
        </Styled.Wrapper>
        <Styled.Table>
          <Table
            rows={payments.map((payment) => ({
              createdDate: payment.createdDate,
              kdv: payment.kdv,
              price: payment.price,
              type: payment.type,
              who: payment.who,
            }))}
            title="Fatura Hesabı Yapanlar"
          />
        </Styled.Table>
      </Styled.Invoice>
    </MainLayout>
  );
}
