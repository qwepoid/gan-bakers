import { memo } from "react";
import ProductCard from "./ProductCard";
import { Product } from "./types";

const ProductsList = ({ productsList }: { productsList: Product[] }) => {
  return (
    <div className="flex gap-12 flex-wrap my-12 justify-between">
      {productsList.map(
        ({ itemName, itemPrice, itemId, itemDesc, itemImage }) => (
          <ProductCard
            id={itemId}
            title={itemName}
            price={itemPrice}
            desc={itemDesc}
            image={itemImage}
          />
        )
      )}
    </div>
  );
};

export default memo(ProductsList);
