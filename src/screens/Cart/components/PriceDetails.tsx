import { useContext } from "react";
import CartContext from "../../../context/cart-context/CartContext";
import {
  calculateTotalItems,
  calculateTotalPrice,
} from "../../../components/AppHeader/utils";

const PriceDetails = () => {
  const { items } = useContext(CartContext);
  const grossPrice = calculateTotalPrice(items).toFixed(2);
  const netPrice = (Number(grossPrice) * 0.9).toFixed(2);
  return (
    <div className="p-4">
      <div className="text-center font-medium">Price Summary</div>
      <div className="flex flex-col p-2">
        <div className="flex justify-between">
          <span>Total Qty</span>
          <span>{calculateTotalItems(items)} items</span>
        </div>
        <div className="flex justify-between">
          <span>Gross Amount</span>
          <span>Rs. {grossPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>10%</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Net Amount</span>
          <span className="font-bold">{netPrice}</span>
        </div>
        <button className="border my-4 p-2 rounded-lg bg-green-500 text-white font-medium">
          Checkout
        </button>
        <div className="flex justify-between">
          <span className="text-green-600 font-medium">Total Savings</span>
          <span className="font-bold text-green-600">
            Rs. {grossPrice - netPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
