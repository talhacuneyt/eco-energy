import React from "react";
import Image from "next/image";

import { SustainableSourceCardProps } from "./types";
import * as Styled from "./sustainable-source-card.styled";

const SustainableSourceCard: React.FunctionComponent<
  SustainableSourceCardProps
> = ({ description, image, title }) => {
  return (
    <Styled.SustainableSourceCard>
      <Image alt="Sustainable Source" width={100} height={100} src={image} />
      <div>
        <b>{title}</b>
        <p>{description}</p>
      </div>
    </Styled.SustainableSourceCard>
  );
};

export default SustainableSourceCard;
