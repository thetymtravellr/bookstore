import { MenuAlt3Icon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserHeader = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="py-4 px-6 sticky top-0 bg-white z-20 border-b">
      <nav className="flex justify-between items-center">
        <div className="w-1/3 md:block hidden">
          <ul className="flex space-x-2 text-md font-semibold">
            <li>
              <Link to="/">Book Store</Link>
            </li>
            <li>
              <Link to="/">Wishlist</Link>
            </li>
            <li>
              <Link to="/">My Collection</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Link className="w-fit text-2xl font-bold" to="/">
            BookShelf
          </Link>
        </div>
        <div className="md:w-1/3 relative">
          <ul className="md:flex justify-end items-center space-x-3 hidden">
            <li>
              <Link to="/">
                <ShoppingCartIcon className="w-5" />
              </Link>
            </li>
            <li>
              <Link to="/">
                Hi, <span>User</span>
              </Link>
            </li>
          </ul>
          <div className="md:hidden block">
            <button onClick={() => setNavOpen(!navOpen)}>
              <MenuAlt3Icon className="w-8" />
            </button>
            <ul className={`absolute ${navOpen ? 'right-0' : '-right-96'} z-50 w-52 bg-white border rounded-md`}>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">Book Store</Link>
              </li>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">Wishlist</Link>
              </li>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">My Collection</Link>
              </li>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">
                  <ShoppingCartIcon className="w-5 mx-auto" />
                </Link>
              </li>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">
                  Hi, <span>User</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="block md:hidden ">
        <div className="w-full flex justify-between relative">
          <div className="">
            <Link className="w-fit text-2xl font-bold" to="/">
              BookShelf
            </Link>
          </div>
          <div className="">
            <button onClick={() => setNavOpen(!navOpen)}>
              <MenuAlt3Icon className="w-8" />
            </button>
            <ul className={`absolute ${navOpen ? 'right-0' : '-right-96'} z-50 w-52 bg-white border rounded-md`}>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">Book Store</Link>
              </li>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">Wishlist</Link>
              </li>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">My Collection</Link>
              </li>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">
                  <ShoppingCartIcon className="w-5 mx-auto" />
                </Link>
              </li>
              <li className="hover:bg-gray-200 text-center w-full py-3">
                <Link to="/">
                  Hi, <span>User</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </header>
  );
};

export default UserHeader;
