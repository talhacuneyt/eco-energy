export interface TableProps {
  rows: Array<{
    who: string;
    type: string;
    kdv: number;
    price: number;
    createdDate: string;
  }>;
  title: string;
}
