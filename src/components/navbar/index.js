import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const [isActive, setIsActive] = useState(false)

  // const handleClick = (e) => {
  //   setIsActive((current) => !current)
  // }

   const handleClick = (event) => {
     event.currentTarget.classList.toggle("active")
   }

  return (
    <nav className="flex">
      <ul className="w-[100%] flex text-lg font-medium my-8 space-x-20 ">
        <h1 className="text-[2rem] specialText font-bold">Juddie.</h1>
        <li>
          <Link
            to="/"
            // className={isActive ? "active" : ""}
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            // className={isActive ? "active" : " "}
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            // className={isActive ? "active" : ""}
            onClick={handleClick}
          >
            Contact us
          </Link>
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
