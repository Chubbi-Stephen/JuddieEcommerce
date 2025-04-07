import React from "react";
import banner from "../../assets/images/banner.jpg";

function Main() {
  return (
    <article className="w-full flex flex-col-reverse md:flex-row items-center justify-between mt-10 mb-16 px-6 md:px-12 lg:px-20">
      {/* Text Section */}
      <section className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6">
        <h1 className="text-4xl font-extrabold leading-tight capitalize md:text-5xl lg:text-6xl">
          Discover the best <span className="text-cyan-500">products</span> here
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Welcome to our store, where fashion meets style! Explore the latest
          trends and styles that will keep you looking and feeling your best.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            type="button"
            className="w-full md:w-auto bg-black text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-all"
          >
            Explore Now
          </button>
          <button
            type="button"
            className="w-full md:w-auto border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:border-gray-500 hover:text-gray-900 transition-all"
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={banner}
          alt="banner"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg object-cover"
        />
      </section>
    </article>
  );
}

export default Main;
