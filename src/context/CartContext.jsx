import { createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []); // ключ — строка

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const valid = prevItems.filter(Boolean); // защита от null
      if (valid.some((item) => item.id === product.id)) return valid; // не дублируем
      return [...valid, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item?.id !== productId),
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
