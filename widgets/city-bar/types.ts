export interface Percentages {
  kdv: number;
  unitPrice: number;
}

export interface CityProps {
  id: number;
  electricity: Percentages;
  name: string;
  naturalGas: Percentages;
  water: Percentages;
}

export interface CityBarProps {
  handleClick: (city: CityProps, index: number) => void;
}
