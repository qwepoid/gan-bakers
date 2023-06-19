const CartItem = ({ item }) => {
  return (
    <div className="border flex p-4 border-black rounded-lg">
      <div className="border aspect-1 mr-16 h-40 w-40">
        <img src={item.itemImage} />
      </div>
      <div className="flex flex-col justify-center">
        <span>{item.itemName}</span>
        <div className="flex gap-4">
          <span>Qty: {item?.itemQty}</span>
          <span>Price: {item?.itemPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
