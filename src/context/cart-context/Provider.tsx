import { useReducer } from "react";
import { defaultState } from "./constants";
import CartContext from "./CartContext";
import reducer from "./CartReducer";

const CartProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function addItem(item) {
    dispatch({ type: "add", payload: item });
  }

  function removeItem(itemId: string) {
    dispatch({ type: "remove", payload: itemId });
  }

  const value = {
    ...state,
    addItem,
    removeItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
