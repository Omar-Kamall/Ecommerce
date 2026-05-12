"use client";

import Link from "next/link";
import { links } from "../data";
import { usePathname } from "next/navigation";
import { useCart } from "../Context/CartContext";
import Button from "../components/ui/Button";
import { useLogout } from "../Hook/useLogout";

const Navbar = () => {
  // get current pathname
  const pathname = usePathname();

  // calculate cart count
  const { cartItems } = useCart();

  // logout handler
  const { handleLogout, loading } = useLogout();

  return (
    <>
      <nav>
        <ul className="flex items-center justify-center gap-5 py-5">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={
                  pathname === link.href ? "text-green-500 font-bold" : ""
                }
              >
                {link.name === "Cart"
                  ? `Cart (${cartItems?.length ?? 0})`
                  : link.name}
              </Link>
            </li>
          ))}
          <li>
            <Button onClick={handleLogout}>
              {loading ? "Logging out..." : "Log Out"}
            </Button>
          </li>
        </ul>
        <div className="bg-gray-400 h-px"></div>
      </nav>
    </>
  );
};

export default Navbar;
