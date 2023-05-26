import React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <section className=" justify-around">
        <div>
          <div>
            <h3 className="text-[30px] font-bold">Let's Keep in Touch!</h3>
            <p>
              Find us on any of these platforms, we respond 1-2 business days.
            </p>
          </div>
          <div className="w-[30%] mt-4 mb-6 flex justify-between">
            <span className="foot px-3">
              <FaFacebook size={30} />
            </span>
            <span className="foot px-3">
              <FaTwitter size={30} />
            </span>
            <span className="foot px-3">
              <FaInstagram size={30} />
            </span>
          </div>
        </div>

        <section className="flex mb-3">
          <div className="pr-8">
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
      </section>

      <hr />
      <section className="w-[100%] py-2 px-3 pb-0 flex justify-center">
        <p>
          Copyright © 2023 Chubbi by{" "}
          <Link className="foot" to="https://devchubbiportfolio.netlify.app/">
            devChubbi
          </Link>
          ❤️.
        </p>
      </section>
    </footer>
  )
}

export default Footer
