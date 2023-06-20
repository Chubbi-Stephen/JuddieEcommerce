import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Logo from "../../assets/images/juddie img.png"
import { useState } from "react"
import { BsHandbag } from "react-icons/bs"

function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  const [showNav, setShowNav] = useState(false)

  const toggleMenu = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <nav class="bg-transparent border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" class="flex items-center">
            <img src={Logo} class="h-14 mr-3" alt="Juddie Logo" />
            <span class="self-center specialText text-3xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => toggleMenu()}
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            class={`w-full md:block md:w-auto ${!showNav ? "hidden" : ""}`}
            id="navbar-default"
          >
            <ul class="font-medium text-[1.rem] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white bg-cyan-400 rounded md:bg-transparent md:text-cyan-400 md:p-0 dark:text-white md:dark:text-cyan-400"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  class="flex justify-center items-center font-bold py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <BsHandbag />
                  <span className="ml-1 px-2 rounded-full bg-cyan-300">{cartTotalQuantity}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
