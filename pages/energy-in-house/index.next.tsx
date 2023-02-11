import FlipCard from "@/components/flip-cards";
import MainLayout from "@/layout/main";

import { energyInHouses } from "./constant";
import * as Styled from "./House.styled";

export default function EnergyInHouse() {
  return (
    <MainLayout pageTitle="Evde Enerji">
      <Styled.CardContent>
        {energyInHouses.map((energyInHouses, index) => (
          <FlipCard
            key={index}
            href={`/energy-in-house/${index + 1}`}
            {...energyInHouses}
          />
        ))}
      </Styled.CardContent>
    </MainLayout>
  );
}
