import React from "react";

import MainLayout from "@/layout/main/main";

import * as Styled from "./Invoice.styled";
import InvoiceCards from "@/components/invoice-cards/InvoiceCards";

export default function Invoice() {
  return (
    <MainLayout pageTitle="Fatura Hesabı">
      <Styled.Invoice>
        <div>
          <InvoiceCards
            title="Doğal Gaz Faturası Hesaplama"
            text="m3 değerini giriniz..."
            // image="/images/invoice/dogalgaz.png"
          />
          <InvoiceCards
            title="Elktrik Faturası Hesaplama"
            text="kwh değerini giriniz..."
            // image="/images/invoice/elektrik.png"
          />
          <InvoiceCards
            title="Su Faturası Hesaplama"
            text="m3 değerini giriniz..."
            // image="/images/invoice/su.png"
          />
        </div>
      </Styled.Invoice>
    </MainLayout>
  );
}
