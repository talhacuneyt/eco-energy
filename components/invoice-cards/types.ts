export interface InvoiceCardsProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  text: string;
  title: string;
  value: string | number;
}
