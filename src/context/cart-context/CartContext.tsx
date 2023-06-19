import { createContext } from "react";
import { defaultState } from "./constants";

const CartContext = createContext(defaultState);

export default CartContext;
