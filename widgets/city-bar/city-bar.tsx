import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import { cities } from "./constants";
import { CityBarProps, CityProps } from "./types";
import * as Styled from "./city-bar.styled";

const CityBar: React.FunctionComponent<CityBarProps> = ({ handleClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeCity, setActiveCity] = useState<string>("Seçiniz");

  const onClick = (city: CityProps, index: number) => {
    setActiveCity(city.name);
    handleClick(city, index);
  };

  return (
    <Styled.CityBar>
      <h1>İller</h1>
      <div>
        <div onClick={() => setIsActive(!isActive)}>
          <p>{activeCity}</p>
          <RiArrowDownSLine color="#fff" size={24} />
        </div>
        {isActive && (
          <div>
            {cities.map((city, index) => (
              <button key={index} onClick={() => onClick(city, index)}>
                <p>{city.name}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </Styled.CityBar>
  );
};

export default CityBar;
