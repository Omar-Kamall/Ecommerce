import { CartProvider } from "@/src/Context/CartContext";
import { IChildren } from "@/src/interfaces";
import Footer from "@/src/layout/Footer";
import Navbar from "@/src/layout/Navbar";

const Layout = ({ children }: { children: IChildren }) => {
  return (
    <>
      <CartProvider>
        <Navbar />
        {children}
      </CartProvider>
      <Footer />
    </>
  );
};

export default Layout;
