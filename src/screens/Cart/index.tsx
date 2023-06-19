import { useContext } from "react";
import PriceDetails from "./components/PriceDetails";
import CartContext from "../../context/cart-context/CartContext";
import Image from "next/image";
import CartIcon from "../../assets/images/cartIcon.png";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { items } = useContext(CartContext);

  return (
    <>
      <div className="border-b-2 border-b-black pb-2 flex justify-between mb-8">
        <span className="text-xl font-bold ">Your Cart</span>
      </div>
      {!!items.length ? (
        <div className="grid grid-cols-12 relative">
          <div className="col-span-8">
            {items.map((el) => (
              <div className="mr-12 my-4 overflow-scroll">
                <CartItem item={el} />
              </div>
            ))}
          </div>
          <div className="border border-black rounded-lg col-span-4 sticky top-40 h-max">
            <PriceDetails />
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="border rounded-full bg-slate-200 p-16 mt-12">
            <Image src={CartIcon} height={200} width={200} />
          </div>
          <span className="tex text-2xl mt-12">Your cart is empty!</span>
        </div>
      )}
    </>
  );
};

export default Cart;
