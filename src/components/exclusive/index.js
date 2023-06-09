import React from "react"

function Exclusive() {
  return (
    <section className=" w-[100%]">
      <section className="w-[100%] flex justify-center ">
        <h1 className="font-semibold text-[30px] capitalize leading-[3rem]">
          <span className="specialText ">exclusive</span> products
        </h1>
      </section>
      <div className="w-[100%] flex text-center justify-center">
        <p className="w-[100%] mt-4">
          Search for the latest articles and find amazing products to buy from
          our huge collection.
        </p>
      </div>
      <div className="w-[100%] mt-6 mb-20 md:w-[100%] md:flex md:flex-row md:justify-center md:items-center">
        <input
          type="text"
          placeholder="Search Products By Category"
          className="w-[100%] h-[2rem] mb-[1rem] bg-gray-200 text-center rounded md:w-[40%] md:mb-0 md:h-[2rem] md:rounded-r-[0px] py-6"
        />
        <button
          type="button"
          className="w-[100%] mr-[1rem] text-white capitalize font-medium rounded md:h-[3rem] md:w-[35%] md:rounded-l-[0rem] bg-black py-2 px-10"
        >
          Explore now
        </button>
      </div>
    </section>
  )
}

export default Exclusive
