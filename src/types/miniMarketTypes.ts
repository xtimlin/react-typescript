export interface ProductType {
  name: string;
  price: number;
  quantity: number;
  imageURL: string;
}

export type ProductProps = {
  product: ProductType;
};

export type MiniMarketContextType = {
  products: ProductType[];
  cartItems: ProductType[];
  searchProducts: (searchValue: string) => void;
  updateCartItems: (updateCartItems: ProductType) => void;
};
