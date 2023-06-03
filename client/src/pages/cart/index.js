import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-container w-[100%] py-[2rem] px-[4rem]">
      <h2 className="w-[50%] font-semibold text-center text-[30px] m-auto">
        Shopping Cart
      </h2>
      {cart.cartItems.length === 0 ? (
        <article>
          <section className="px-3 md:px-20">
            <Navbar />
            <section className="w-full mt-6 min-h-[100vh]">
              <div className="w-[100%] text-center text-[gray]">
                <h1 className="text-[40px] mb-5 font-bold">
                  Your Cart is Empty...🙁
                </h1>
                <h2 className="text-[26px] text-[#555] font-bold">
                  Please go back to the homepage to shop for an item...
                </h2>
                <button className="bg m-auto my-7 font-semibold rounded text-[white] hover:w-[26%] transition-all ease-in-out hover:duration-1000 py-1 px-3">
                  <Link to="/">
                    <HiArrowNarrowLeft />
                    <span>Start Shopping</span>
                  </Link>
                </button>
              </div>
            </section>
          </section>
          <Footer />
        </article>
      ) : (
        <div>
          <div className="titles grid items-center gap-6 grid-cols-5 text-[14px] text-center uppercase mt-[2rem] mb-[1rem]">
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
                    <p className="text-[9px]">
                      {cartItem.description.split(" ").slice(0, 10).join(" ") +
                        "..."}
                    </p>
                    <p className="pb-6">
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
                <div className="cart-product-quantity flex items-center justify-center">
                  <button>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button>+</button>
                </div>
                <div className="cart-product-total-price text-center">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </section>

          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <Link to="/">
                <HiArrowNarrowLeft />
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
