import Header from "./components/Header";
import ProductsList from "./components/ProductList";
import { products } from "./components/products";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-4/5 text-center items-center justify-center">
        <Header />
      </div>
      <div className="flex flex-col items-center">
        <div>New Products</div>
        <ProductsList productsList={products} />
      </div>
    </div>
  );
};

export default Home;
