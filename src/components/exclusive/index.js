import React from "react"

function Exclusive() {
  return (
    <section className=" w-[100%]">
      <section className="w-[100%] flex justify-center">
        <h1 className="font-semibold text-[50px] capitalize">
          <span className="specialText">exclusive</span> products
        </h1>
      </section>
      <div className="w-[100%] flex text-center justify-center">
        <p className="w-[100%] mt-4">
          Search for the latest articles and find amazing products to buy from
          our huge collection
        </p>
      </div>
      <div className="w-[100%] mt-6 mb-20 flex justify-center">
        <input
          type="text"
          placeholder="Search Products By Category"
          className="w-[30%] h-[2rem] bg-gray-200 text-center rounded-[5px] mr-6 py-6"
        />
        <button
          type="button"
          className="mr-[1rem] text-white capitalize font-medium rounded-[5px] bg-black py-2 px-10"
        >
          Explore now
        </button>
      </div>
    </section>
  )
}

export default Exclusive
