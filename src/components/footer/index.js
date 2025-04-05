// import React from "react"
// import { FaFacebook } from "react-icons/fa"
// import { FaTwitter } from "react-icons/fa"
// import { FaInstagram } from "react-icons/fa"
// import { Link } from "react-router-dom"

// function Footer() {
//   return (
//     <footer className="footer">
//       <section>
//         <div
//           className="w-[100%] flex flex-col ic
//          justify-around"
//         >
//           <div>
//             <h3 className="text-[30px] font-bold">Let's Keep in Touch!</h3>
//             <p>
//               Find us on any of these platforms, we respond 1-2 business days.
//             </p>
//           </div>
//           <div className="w-[30%] m-auto mt-4 mb-6 flex justify-between md:m-auto md:py-2">
//             <span className="foot px-3">
//               <FaFacebook size={30} />
//             </span>
//             <span className="foot px-3">
//               <FaTwitter size={30} />
//             </span>
//             <span className="foot px-3">
//               <FaInstagram size={30} />
//             </span>
//           </div>
//         </div>

//         <section className="w-[90%] m-auto items-center flex px-4 mb-3 md:m-auto md:mb-3">
//           <div className="pr-8 text-center">
//             <h5 className="font-bold uppercase">useful links</h5>
//             <ul>
//               <li className="foot">
//                 <Link>About Us</Link>
//               </li>
//               <li className="foot">
//                 <Link>Contact Us</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="text-center">
//             <h5 className="font-bold uppercase">other resources</h5>
//             <ul>
//               <li className="foot">
//                 <Link>Terms & Conditions</Link>
//               </li>
//               <li className="foot">
//                 <Link>Privacy Conditions</Link>
//               </li>
//             </ul>
//           </div>
//         </section>
//       </section>

//       <hr />
//       <section className="w-[100%] py-2 px-3 pb-0 flex justify-center">
//         <p>
//           Copyright © 2023 Chubbi by{" "}
//           <Link className="foot" to="https://devchubbiportfolio.netlify.app/">
//             devChubbi
//           </Link>
//           ❤️.
//         </p>
//       </section>
//     </footer>
//   )
// }

// export default Footer




import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        {/* Contact Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-6">
            Follow us on social media or subscribe to our newsletter for the
            latest updates and exclusive offers.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter to stay updated on the latest trends and
            offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Useful Links Section */}
        <div className="w-full md:w-1/3 md:ml-8">
          <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-sm">
          © 2025 Juddie Ecommerce. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Built with ❤️ by{" "}
          <a
            href="https://devchubbiportfolio.netlify.app/"
            className="text-cyan-500 hover:underline"
          >
            devChubbi
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;