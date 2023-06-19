import { useContext } from "react";
import Stepper from "../../Home/components/Stepper";
import CartContext from "../../../context/cart-context/CartContext";
import { Product } from "../../Home/components/types";

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext);

  function incrementQty(item) {
    const cartItem: Product = {
      itemId: item.itemId,
      itemName: item.title,
      itemPrice: item.price,
      itemDesc: item.desc,
      itemImage: item.image,
    };
    addItem(cartItem);
  }
  return (
    <div className="sm:border-b border-black md:border flex sm:p-2 md:p-4 md:border-black md:rounded-lg">
      <div className="border aspect-1 sm:mr-8 md:mr-16 sm:h-24 sm:w-24 md:h-40 md:w-40 ">
        <img src={item.itemImage} className="rounded-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font font-semibold sm:text-lg md:text-2xl">
          {item.itemName}
        </span>
        <div className="flex gap-4 flex-col">
          <div className="flex">
            <div className="font-bold">
              {"Quantity: "}
              <Stepper
                qty={item?.itemQty}
                onIncrement={() => incrementQty(item)}
                onDecrement={() => removeItem(item?.itemId)}
              />
            </div>
          </div>
          <div className="font-bold">
            {"Price: "}
            <span className="font-light">{`₹ ${item?.itemPrice}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
