export interface ProductType {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type MiniMarketContextType = {
  products: ProductType[];
  searchProducts: (searchValue: string) => void;
};
