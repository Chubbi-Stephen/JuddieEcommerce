import React from "react"
import banner from "../../assets/images/banner.jpg"

function Main() {
  return (
    <article className="w-[100%] flex flex-col h-[50vh] mt-10 mb-2rem mb-[24rem] md:mb-0 md:flex-row">
      <section className="w-[100%] md:w-[50%] md:mr-[5%] mb-[1.5rem] md:flex md:flex-col md:justify-center">
        <h1 className="font-bold text-[40px] leading-[50px] pb-3 capitalize md:font-[700] md:text-[30px]">
          the best place to find and buy{" "}
          <span className="specialText">products</span>
        </h1>
        <p className="pb-8">
          Welcome to our clothing store, where fashion meets style! Our mission
          is to provide you with the latest trends and styles that will keep you
          looking and feeling your best.
        </p>
        <div className="md:flex md:flex-row md:h-[16%]  md:justify-between">
          <button
            type="button"
            className="w-[100%] mr-[1rem] text-white capitalize font-medium rounded-[5px] bg-black mb-3 h-12 py-1 px-10 md:w-[60%] md:h-[100%] md:text-[.7rem]"
          >
            explore now
          </button>
          <button
            type="button"
            className="w-[100%] mr-[2rem] capitalize rounded-[5px] box font-medium py-1 px-10 md:w-[50%] md:text-[.7rem] md:px-0"
          >
            request a demo
          </button>
        </div>
      </section>
      <section className="w-[100%] h-[100%] mb-[2rem] flex md:w-[45%] md:justify-center md:items-center md:mb-0">
        <img
          src={banner}
          alt="banner"
          className="w-[100%] h-[70%] md:w-[90%]  !mb-2rem"
        />
      </section>
    </article>
  )
}

export default Main
