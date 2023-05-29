import React from "react"

function Agenda() {
  return (
    <section className="w-[100%] flex flex-col justify-center items-center md:h-[8rem] text-[17px] mb-20 md:flex-row md:text-[15px] space-x-2.5">
      <div className="w-[100%] box mb-4 p-3 md:w-[40%]">
        <p>
          <span className="font-bold ">Our Mission</span> is to make a difference
          through our branding by staying ahead of the fashion trends, defining
          style and giving customers what they want.
        </p>
      </div>
      <div className="w-[100%] box p-3 md:w-[40%]">
        <p>
          <span className="font-bold">Our Vision</span> is to change the way our
          society connects with the fashion industry by providing our customers
          with products that are ethically and responsibly sourced.
        </p>
      </div>
    </section>
  )
}

export default Agenda
