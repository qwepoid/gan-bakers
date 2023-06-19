import { memo } from "react";
import ProductCard from "./ProductCard";
import { Product } from "./types";

const ProductsList = ({ productsList }: { productsList: Product[] }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-12">
      {productsList.map(
        ({ itemName, itemPrice, itemId, itemDesc, itemImage }) => (
          <ProductCard
            key={itemId}
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
