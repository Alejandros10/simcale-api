export interface Sale {
  id?: number;
  price: number;
  saleDate: string;
  phoneNumber: string;
  seller: {
    id: number;
    name?: string;
    documentNumber?: string;
  };
  operator: {
    id: number;
    name?: string;
  };
}
