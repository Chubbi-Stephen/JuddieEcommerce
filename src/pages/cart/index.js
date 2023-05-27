import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Cart = () => {
  return (
    <div>
      <article>
        <section className="px-3 md:px-20">
          <Navbar />
          <section className="w-full min-h-[80vh]">
            <div className="w-[80%] center text-[gray]">
              <h1 className="text-[40px] font-bold">Your Cart is Empty...🙁</h1>
              <h2 className="text-[26px] text-[#555] font-bold">
                Please go back to the homepage to shop for an item...
              </h2>
              <button className="bg m-auto my-7 font-semibold rounded text-[white] hover:w-[26%] transition-all ease-in-out hover:duration-1000 py-1 px-3">
                <a href="/">Go To Homepage</a>
              </button>
            </div>
          </section>
        </section>
        <Footer />
      </article>
    </div>
  )
};

export default Cart;
