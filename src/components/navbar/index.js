import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex">
      <ul className="w-[100%] flex text-lg font-medium my-8 space-x-20 ">
        <h1 className="text-[2rem] specialText font-bold">Chubbi.</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
          <Link>Cart</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
