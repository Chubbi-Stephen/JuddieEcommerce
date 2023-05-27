import React from "react"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import img from "../../assets/images/select.jpg"
import Agenda from "../../components/agenda"

function About() {
  return (
    <article className="px-3">
      <section className="px- md:px-20">
        <Navbar />
        <section className="w-[100%]flex pt-10 flex-col	justify-center text-center">
          <h1 className="text-[30px] pb-2 font-medium">About Us</h1>
          <p className="pb-14 text-slate-600 text-[14px]">
            JUDDIE IS… WHERE FUN MEETS FASHION & CLASS AT AFFORDABLE PRICES!
          </p>
        </section>
      </section>
      <div className="w-[100%] bg-cyan-50 flex flex-col mb-20 justify-center items-center">
        <section className="w-[90%] mt-4">
          <img src={img} alt="img-illustration" />
        </section>
        <section className="w-[88%] p-2">
          <h1 className="text-[20px] mt-4 mb-2font-semibold specialText">
            OUR LITTLE NICHE
          </h1>
          <p className="text-slate-600 text-[17px]">
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
      <Agenda />
      <Footer />
    </article>
  )
}

export default About
