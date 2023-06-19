import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppHeader from "../src/components/AppHeader";
import CartProvider from "../src/context/cart-context/Provider";

function SafeHydrate({ children }: { children: any }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <CartProvider>
        <div className="fixed w-screen z-20">
          <AppHeader />
        </div>
        <div className="px-12 md:px-20 lg:px-40 pt-20">
          <Component {...pageProps} />
        </div>
      </CartProvider>
    </SafeHydrate>
  );
}

export default MyApp;
