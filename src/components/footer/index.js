import React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <section className=" flex justify-around">
        <div>
          <div>
            <h3 className="text-[30px] font-semibold">Let's Keep in Touch!</h3>
            <p>
              Find us on any of these platforms, we respond 1-2 business days.
            </p>
          </div>
          <div className="w-[30%] mt-4 mb-6 flex justify-between">
            <span>
              <FaFacebook size={30} />
            </span>
            <span>
              <FaTwitter size={30} />
            </span>
            <span>
              <FaInstagram size={30} />
            </span>
          </div>
        </div>

        <div>
          <h5 className="font-bold uppercase">useful links</h5>
          <ul>
            <li className="foot">
              <Link>About Us</Link>
            </li>
            <li className="foot">
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase">other resources</h5>
          <ul>
            <li className="foot">
              <Link>Terms & Conditions</Link>
            </li>
            <li className="foot">
              <Link>Privacy Conditions</Link>
            </li>
          </ul>
        </div>
      </section>

      <hr />
      <section className="w-[100%] p-5 pb-0 flex justify-center">
        <p>
          Copyright © 2023 Chubbi by{" "}
          <Link to="https://devchubbiportfolio.netlify.app/">devChubbi</Link>❤️.
        </p>
      </section>
    </footer>
  )
}

export default Footer
