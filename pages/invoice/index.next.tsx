import React, { useEffect, useState } from "react";

import MainLayout from "@/layout/main/main";
import CityBar from "@/widgets/city-bar";

import InvoiceCards from "@/components/invoice-cards/InvoiceCards";
import * as Styled from "./Invoice.styled";

export default function Invoice() {
  const [information, setInformation] = useState({
    city: {},
    index: 0,
  });

  const [naturalGas, setNaturalGas] = useState<string>("");
  const [electricity, setElectricity] = useState<string>("");
  const [water, setWater] = useState<string>("");

  const onNaturalGasSubmit = () => {};

  const onElectricitySubmit = () => {};

  const onWaterSubmit = () => {};

  useEffect(() => {
    console.log(information);
  }, [information]);

  return (
    <MainLayout pageTitle="Fatura Hesabı">
      <Styled.Invoice>
        <div>
          <CityBar
            handleClick={(city, index) =>
              setInformation({
                city,
                index,
              })
            }
          />
          <div>
            <InvoiceCards
              onChange={(e) => setNaturalGas(e.currentTarget.value)}
              onSubmit={onNaturalGasSubmit}
              text="m3 değerini giriniz..."
              title="Doğal Gaz Faturası Hesapla"
              value={naturalGas}
            />
            <InvoiceCards
              onChange={(e) => setElectricity(e.currentTarget.value)}
              onSubmit={onElectricitySubmit}
              text="kwh değerini giriniz..."
              title="Elektrik Faturası Hesapla"
              value={electricity}
            />
            <InvoiceCards
              onChange={(e) => setWater(e.currentTarget.value)}
              onSubmit={onWaterSubmit}
              text="m3 değerini giriniz..."
              title="Su Faturası Hesaplama"
              value={water}
            />
          </div>
        </div>
      </Styled.Invoice>
    </MainLayout>
  );
}
