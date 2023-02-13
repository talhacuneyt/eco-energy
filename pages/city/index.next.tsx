import MainLayout from "@/layout/main";
import React from "react";

import * as Styled from "./City.styled";
import { CityProps } from "./types";

const City: React.FunctionComponent<CityProps> = ({}) => {
  return (
    <MainLayout pageTitle="Şehir">
      <Styled.City>
        asfasf
      </Styled.City>
    </MainLayout>
  );
};

export default City;
