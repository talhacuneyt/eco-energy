import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";

import * as Styled from "./InvoiceCards.styled";
import { InvoiceCardsProps } from "./types";

const InvoiceCards: React.FunctionComponent<InvoiceCardsProps> = ({
  title,
  text,
  // image,
}) => {
  return (
    <Styled.InvoiceCards>
      <h1>{title}</h1>
      {/* <Image src={image} alt={"Resim"} width={200} height={100} /> */}
      <div>
        <input type="text" placeholder={text} />
        <Link href={""}>
          <p>HESAPLA</p>
          <FiPlus />
        </Link>
      </div>
    </Styled.InvoiceCards>
  );
};

export default InvoiceCards;
