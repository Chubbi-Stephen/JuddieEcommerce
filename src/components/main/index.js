import React from "react"
import banner from "../../assets/images/banner.jpg"

function Main() {
  return (
    <article className="w-[100%] h-[50vh] flex mt-20 mb-20">
      <section className="w-[50%] mr-[9rem]">
        <h1 className="font-bold text-[50px] capitalize">
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
          className="mr-[1rem] text-white capitalize font-medium rounded-[5px] bg-black py-2 px-10"
        >
          explore now
        </button>
        <button
          type="button"
          className="mr-[2rem] capitalize rounded-[5px] box font-medium py-2 px-10"
        >
          request a demo
        </button>
      </section>
      <section className="w-[50%] h-[100%] flex">
        <img src={banner} alt="banner" className="w-[90%] h-[100%]" />
      </section>
    </article>
  )
}

export default Main
