import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppHeader from "../src/components/AppHeader";
import CartProvider from "../src/context/cart-context/Provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <div className="fixed w-screen z-20">
        <AppHeader />
      </div>
      <div className="sm:px-8 md:px-20 lg:px-20 pt-20">
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}

export default MyApp;
