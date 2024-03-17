import React, { PropsWithChildren } from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: 1 | -1) => void;
  total: number;
};

const CartContext = React.createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const total = items.reduce(
    (acc, item) => (acc += item.product.price * item.quantity),
    0
  );

  const addItem = (product: Product, size: CartItem["size"]) => {
    const existingItem = items.find(
      (item) => item.product_id === product.id && item.size === size
    );

    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }

    const cartProductItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems((prev) => [cartProductItem, ...prev]);
  };

  const updateQuantity = (itemId: string, amount: 1 | -1) => {
    const itemsOnCart = items
      .map((i) =>
        i.id !== itemId ? i : { ...i, quantity: i.quantity + amount }
      )
      .filter((item) => item.quantity > 0);

    setItems(itemsOnCart);
  };
  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => React.useContext(CartContext);
