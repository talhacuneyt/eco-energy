import FlipCard from "@/components/flip-cards";
import MainLayout from "@/layout/main";

import { sustainables } from "./constants";
import * as Styled from "./Sustainable.styled";

export default function Sustainable() {
  return (
    <MainLayout pageTitle="Üye Ol">
      <Styled.CardContent>
        {sustainables.map((sustainable, index) => (
          <FlipCard
            key={index}
            href={`/sustainable/${index + 1}`}
            {...sustainable}
          />
        ))}
      </Styled.CardContent>
    </MainLayout>
  );
}
