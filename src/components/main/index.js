import React from "react"
import banner from "../../assets/images/banner.jpg"

function Main() {
  return (
    <article className="w-[100%] h-[50vh] mt-10 mb-[27rem] md:flex-row">
      <section className="w-[100%] md:w-[50%] mb-[1.5rem]">
        <h1 className="font-bold text-[40px] leading-[50px] pb-3 capitalize">
          the best place to find and buy{" "}
          <span className="specialText">products</span>
        </h1>
        <p className="pb-8">
          Welcome to our clothing store, where fashion meets style! Our mission
          is to provide you with the latest trends and styles that will keep you
          looking and feeling your best.
        </p>
        <button
          type="button"
          className="w-[100%] mr-[1rem] text-white capitalize font-medium rounded-[5px] bg-black mb-3 h-12 py-1 px-10"
        >
          explore now
        </button>
        <button
          type="button"
          className="w-[100%] mr-[2rem] capitalize rounded-[5px] box font-medium py-1 px-10"
        >
          request a demo
        </button>
      </section>
      <section className="w-[100%] h-[100%] mb-[2rem] flex md:w-[50%]">
        <img
          src={banner}
          alt="banner"
          className="w-[100%] h-[70%] md:w-[90%]"
        />
      </section>
    </article>
  )
}

export default Main
