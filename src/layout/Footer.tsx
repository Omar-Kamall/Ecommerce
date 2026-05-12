import Link from "next/link";
import { links } from "../data";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-gray-400 h-[1px]"></div>
        <ul className="flex items-center justify-between gap-5 py-5">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="text-gray-400">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
