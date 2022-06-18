import { MenuAlt3Icon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";

const UserHeader = () => {
  const [navOpen, setNavOpen] = useState(false);
  const {cart,isLoading} = useCart()
  const [user, loading, error] = useAuthState(auth);
  
  if (loading || isLoading) {
    console.log("loading");
  }
  if (error) {
    console.log("error");
  }

  return (
    <header className="py-2 px-6 sticky top-0 bg-white z-20 border-b">
      <nav className="flex justify-between items-center">
        <div className="w-1/3 md:block hidden ">
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
          <ul className="md:flex justify-end space-x-4 hidden">
            <li className="flex items-center">
              <Link to="/cart" className="indicator h-6">
                <ShoppingCartIcon className="w-6" />
                <span class="indicator-item badge text-sm text-white p-1 h-5 bg-red-600 border-red-500">
                  {cart?.length}
                </span>
              </Link>
            </li>
            {user ? (
            <>
              <li>
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                      <img
                        src="https://api.lorem.space/image/face?hash=33791"
                        alt=""
                      />
                    </div>
                  </label>
                  <ul
                    tabindex="0"
                    class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={() => signOut(auth)}>Signout</button>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
              <Link to="/">
                Hi, <span>{user.displayName}</span>
              </Link>
            </li>
            </>
            ) : (
              <li className="">
                <Link to="/login" className="btn btn-ghost">Login</Link>
              </li>
            )}
          </ul>
          <div className="md:hidden block">
            <button onClick={() => setNavOpen(!navOpen)}>
              <MenuAlt3Icon className="w-8" />
            </button>
            <ul
              className={`absolute duration-300 ${
                navOpen ? "top-12" : "top-[500px] opacity-0 invisible"
              } right-0 z-50 w-52 bg-white border rounded-md`}
            >
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
