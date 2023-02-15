import React from "react";
import { FiPlus } from "react-icons/fi";

import { InvoiceCardsProps } from "./types";
import * as Styled from "./InvoiceCards.styled";

const InvoiceCards: React.FunctionComponent<InvoiceCardsProps> = ({
  onChange,
  onSubmit,
  text,
  title,
  value,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sa");
    onSubmit?.();
  };

  return (
    <Styled.InvoiceCards>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          placeholder={text}
          type="text"
          value={value}
        />
        <button type="submit">
          <p>HESAPLA</p>
          <FiPlus />
        </button>
      </form>
    </Styled.InvoiceCards>
  );
};

export default InvoiceCards;
