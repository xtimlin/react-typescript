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
  counterUpdateCartItemQuantity: (updateCartItems: ProductType) => void;
  updateCartItemQuantity: (updateCartItems: ProductType) => void;
};
