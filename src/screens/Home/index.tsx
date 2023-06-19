import Header from "./components/Header";
import ProductsList from "./components/ProductList";
import { products } from "./components/products";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-3/5 text-center items-center justify-center">
        <Header />
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold font-serif mt-12 text-lg underline underline-offset-8">
          NEW PRODUCTS
        </div>
        <ProductsList productsList={products} />
      </div>
    </div>
  );
};

export default Home;
