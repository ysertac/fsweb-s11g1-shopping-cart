import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("shoppingCart", []);
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;
