import Link from "next/link";
import { useContext } from "react";
import CartContext from "../../context/cart-context/CartContext";
import { useRouter } from "next/router";
import { calculateTotalItems } from "./utils";
import CartImage from "../../assets/images/cartIcon.png";
import Image from "next/image";
const AppHeader = () => {
  const { items } = useContext(CartContext);
  const router = useRouter();

  return (
    <div className="grid grid-cols-11 text-center bg-gradient-to-b from-yellow-200 px-4">
      <div className="sm:col-start-4 md:col-start-6 min-h-[60px] flex items-center font-extrabold text-3xl w-fit sm:col-span-6 md:col-span-3">
        <Link href="/">GAN Bakers</Link>
      </div>
      <div className="col-start-11 flex items-center">
        <button onClick={() => router.push("/cart")} className="relative">
          <Image src={CartImage} height={32} width={32} />
          {!!items.length && (
            <span className="absolute -top-2 -right-2 bg-red-500 rounded-full px-1.5 text-white text-sm">
              {calculateTotalItems(items)}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
export default AppHeader;
