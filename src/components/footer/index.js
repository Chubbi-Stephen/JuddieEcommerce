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
              to="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/3 md:mx-12">
          <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter to stay updated on the latest trends and
            offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:flex-col md:space-y-4 md:space-x-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Email"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-all md:w-full"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Useful Links Section */}
        <div className="w-full md:w-1/3 md:ml-6">  
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
          <Link
            to="https://devchubbiportfolio.netlify.app/"
            className="text-cyan-500 hover:underline"
          >
            devChubbi
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;