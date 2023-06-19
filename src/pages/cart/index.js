import React from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HiArrowNarrowLeft } from "react-icons/hi"

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <div className="wallpaper cart-container w-[100%] py-[2rem] px-[4rem]">
      {cart.cartItems.length === 0 ? (
        <article>
          <section className="px-3 md:px-20">
            <Navbar />
            <h2 className="w-[50%] font-semibold text-center text-[30px] m-auto">
              Shopping Cart
            </h2>
            <section className="w-full mt-6 min-h-[100vh]">
              <div className="w-[100%] text-center text-[gray]">
                <h1 className="text-[40px] mb-5 font-bold">
                  Your Cart is Empty...🙁
                </h1>
                <h2 className="text-[26px] text-[#555] font-bold">
                  Please go back to the homepage to shop for an item...
                </h2>
                <button className="bg m-auto my-7 font-semibold rounded text-[white] hover:w-[26%] transition-all ease-in-out hover:duration-1000 py-1 px-3">
                  <Link to="/" className="flex">
                    <HiArrowNarrowLeft />
                    <span className="px-2">Start Shopping</span>
                  </Link>
                </button>
              </div>
            </section>
          </section>
          <Footer />
        </article>
      ) : (
        <div>
          <h2 className="w-[50%] font-semibold text-center text-[30px] m-auto">
            Shopping Cart
          </h2>
          <div className="titles grid items-center font-medium gap-6 grid-cols-5 text-[14px] text-center uppercase mt-[2rem] mb-[1rem]">
            <h3 className="product-title col-span-2">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>

          <section className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div
                className="cart-item border-t-2 py-6 grid items-center gap-2 grid-cols-5"
                key={cartItem._id}
              >
                <div className="cart-product col-span-2 flex pl-2">
                  <img
                    src={cartItem.image}
                    className="pb-3 w-[100px] max-w-[100%] mr-5"
                    alt={cartItem.title}
                  />

                  <div>
                    <h3 className="font-bold specialText capitalize">
                      {cartItem.title}
                    </h3>
                    <p className="text-[14px]">
                      {cartItem.description.split(" ").slice(0, 10).join(" ") +
                        "..."}
                    </p>
                    <p className="pb-4 pt-3">
                      {" "}
                      <strong className="specialText">For: </strong>
                      {cartItem.category}
                    </p>
                    <button className="bg px-2 text-center text-[13px] uppercase font-medium rounded">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price text-center">
                  {cartItem.price}
                </div>
                <div className="cart-product-quantity flex items-center justify-center px-2">
                  <div className="border flex rounded bg-[#eee]">
                    <button className="px-5 py-3 hover:bg-[#ddd]">-</button>
                    <div className="count px-5 py-3">
                      {cartItem.cartQuantity}
                    </div>
                    <button className="px-5 py-3 hover:bg-[#ddd]">+</button>
                  </div>
                </div>
                <div className="cart-product-total-price font-bold text-center">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </section>

          <div className="cart-summary w-[100%] m-7 flex justify-between">
            <button className="clear-cart m-2 h-full bg px-4 font-bold text-[#555] rounded py-1">
              Clear Cart
            </button>
            <div className="cart-checkout m-2 mb-5">
              <div className="subtotal text-[30px] font-bold">
                <span>Subtotal </span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className="text-white capitalize font-medium rounded bg-black mt-3 py-1 px-10 md:w-[55%] md:h-[25%] md:text-[.7rem]">
                Check out
              </button>
              <button className="w-full text-center bg mt-3 block font-semibold rounded text-[#555] transition-all ease-in-out py-1 px-3">
                <Link to="/" className="flex w-[90%] justify-center m-auto">
                  <HiArrowNarrowLeft />
                  <span className="px-2">Start Shopping</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
