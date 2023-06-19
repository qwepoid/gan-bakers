import { memo, useContext } from "react";
import CartContext from "../../../context/cart-context/CartContext";
import { CartItem } from "../../../context/cart-context/types";
import Stepper from "./Stepper";
import { Product } from "./types";

const ProductCard = ({
  id = -1,
  title = "",
  price = 0,
  desc = "",
  image = "",
}) => {
  const { addItem, items, removeItem } = useContext(CartContext);

  function incrementQty() {
    const cartItem: Product = {
      itemId: id,
      itemName: title,
      itemPrice: price,
      itemDesc: desc,
      itemImage: image,
    };
    addItem(cartItem);
  }

  const currentQty = () => {
    let qty = 0;
    items.forEach((item: CartItem) => {
      if (item.itemId === id) {
        qty = item.itemQty;
      }
    });
    return qty;
  };

  const addToCartPlaceholder =
    currentQty() > 0 ? (
      <div className="absolute -bottom-3 bg-white">
        <Stepper
          qty={currentQty()}
          onIncrement={incrementQty}
          onDecrement={() => removeItem(id)}
        />
      </div>
    ) : (
      <button
        className="absolute -bottom-3 bg-white w-max border rounded-md px-2"
        onClick={incrementQty}
      >
        Add to Cart
      </button>
    );

  return (
    <div className="w-32 h-60 md:w-60 md:h-80 relative flex flex-col items-center border rounded-2xl">
      <div className="w-full aspect-square hover:scale-105 ">
        <img src={image} height={240} width={240} className="rounded-2xl" />
      </div>
      <div>{title}</div>
      <div>{price}</div>
      {addToCartPlaceholder}
    </div>
  );
};

export default memo(ProductCard);
