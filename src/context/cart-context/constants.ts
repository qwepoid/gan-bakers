import { Product } from "../../screens/Home/components/types";

export const defaultState = {
  items: [],
  initialiseItems: () => {},
  addItem: (item: Product) => {},
  removeItem: (id: number) => {}
}