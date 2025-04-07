import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import img from "../../assets/images/select.jpg";
import Agenda from "../../components/agenda";

function About() {
  return (
    <article className="w-full bg-gray-50">
      {/* Navbar Section */}
      <section className="bg-white shadow-md">
        <Navbar />
      </section>

      {/* About Us Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-10 bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 capitalize">
            About <span className="text-cyan-500">Us</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            JUDDIE IS… WHERE FUN MEETS FASHION & CLASS AT AFFORDABLE PRICES!
          </p>
        </div>
      </section>

      {/* Our Niche Section */}
      <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-12 lg:px-20">
        {/* Image Section */}
        <section className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={img}
            alt="Our Niche Illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg object-cover"
          />
        </section>

        {/* Text Section */}
        <section className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 capitalize mb-4">
            Our Little Niche
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Juddie, where fashion meets quality and affordability.
            Our brand was founded in 2020 with the aim of providing our
            customers with the latest fashion trends at accessible prices. We
            believe that fashion should be fun, inclusive, and empowering. Our
            team is dedicated to creating a positive shopping experience for our
            customers, whether you're browsing our website or visiting us
            in-store.
          </p>
        </section>
      </div>

      {/* Agenda Section */}
      <section className="w-full bg-gray-100 py-10">
        <Agenda />
      </section>

      {/* Footer Section */}
      <Footer />
    </article>
  );
}

export default About;