import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

import { FlipCardProps } from "./types";
import * as Styled from "./FlipCard.styled";

const FlipCard: React.FunctionComponent<FlipCardProps> = ({
  image,
  title,
  text,
  href,
  description,
}) => {
  return (
    <Styled.FlipCard>
      <Styled.FlipCardInner>
        <Styled.FlipCardFront>
          <Image src={image} alt={""} width={100} height={100} />
        </Styled.FlipCardFront>
        <Styled.FlipCardBack>
          <h1>{title}</h1>
          <p>{text}</p>
          <Styled.News>
            <Link href={href}>
              <p>{description}</p>
            </Link>
            <HiArrowRight color="#000" width={50} />
          </Styled.News>
        </Styled.FlipCardBack>
      </Styled.FlipCardInner>
    </Styled.FlipCard>
  );
};

export default FlipCard;
