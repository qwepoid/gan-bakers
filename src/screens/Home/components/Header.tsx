import Image from "next/image";
import Products from "../../../assets/images/products.png";
import CakeClass from "../../../assets/images/cakeClass.png";
import Recipes from "../../../assets/images/recipes.png";

const Header = () => {
  return (
    <div className="flex text-center bg-gradient-to-b from-yellow-600 min-h-[80px] items-center rounded-2xl">
      <div className="w-1/3">
        <Image src={Products} height={120} />
      </div>
      <div className="w-1/3">
        <Image src={CakeClass} height={140} />
      </div>
      <div className="w-1/3 md:pb-2">
        <Image src={Recipes} height={100} />
      </div>
    </div>
  );
};

export default Header;
