export interface Product {
  id: number;
  subtitle: string;
  title: string;
  flavor: string;
  special?: string[];
  weight: string;
  weightUnit: string;
  text: string;
  link: string;
  image: string;
  selected?: boolean;
  isOutOffStock: boolean;
  discription?: string;
  outOffStockLabel: string;
}
