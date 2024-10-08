export interface Sale {
  id: number;
  price: number;
  saleDate: string;
  seller: {
    id: number;
    name: string;
    documentNumber: string;
  };
  operator: {
    id: number;
    name: string;
  };
}
