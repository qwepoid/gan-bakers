import CartProvider from "./cart-context/Provider";

const AppProviders = ({ children }: { children: any }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default AppProviders;
