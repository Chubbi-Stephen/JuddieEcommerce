import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/juddie img.png";
import { useState } from "react";
import { BsHandbag } from "react-icons/bs";

function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className="bg-transparent text-black">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-14 mr-3" alt="Juddie Logo" />
           
          </Link>

          {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={showNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`w-full text-black md:block md:w-auto ${
              showNav ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col  md:flex-row md:space-x-8 items-center mt-4 md:mt-0 bg-transparent md:bg-transparent dark:bg-transparent p-4 md:p-0 rounded-lg shadow-none text-black">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 hover:text-cyan-500 font-medium rounded md:bg-transparent md:p-0 dark:hover:text-cyan-400"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4 text-gray-800 hover:text-cyan-500 font-medium rounded md:bg-transparent md:p-0 dark:hover:text-cyan-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 text-gray-800 hover:text-cyan-500 font-medium rounded md:bg-transparent md:p-0 dark:hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="flex items-center py-2 px-4 text-gray-800 hover:text-cyan-500 font-medium rounded md:bg-transparent md:p-0 dark:hover:text-cyan-400"
                >
                  <BsHandbag className="text-xl" />
                  <span className="ml-2 px-2 py-1 text-sm font-bold text-white bg-cyan-500 rounded-full">
                    {cartTotalQuantity}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-4 text-gray-800 hover:text-cyan-500 font-medium rounded md:bg-transparent md:p-0 dark:hover:text-cyan-400"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;