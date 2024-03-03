import React, { PropsWithChildren } from "react";
import { CartItem, Product } from "../types";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

const CartContext = React.createContext<CartType>({
  items: [],
  addItem: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = React.useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    const cartProductItem: CartItem = {
      id: "1",
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems((prev) => [cartProductItem, ...prev]);
  };
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => React.useContext(CartContext);
