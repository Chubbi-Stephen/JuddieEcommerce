import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex">
      <ul className="w-[100%] flex text-lg font-medium my-8 space-x-20 ">
        <h1 className="text-[2rem] specialText font-bold">Juddie.</h1>
        <li>
          <Link to="/" className="text-black active:text-cyan-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black active:text-cyan-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black active:text-cyan-400">
            Contact us
          </Link>
        </li>
        <li>
          <Link>Cart</Link>
        </li>
        <li>
          <Link to="/login" className="text-black active:text-cyan-400">
            {" "}
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
