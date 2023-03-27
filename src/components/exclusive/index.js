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
        <br />
        <input type="text"/>
        <button type="button">Explore now</button>
      </div>
    </section>
  )
}

export default Exclusive
