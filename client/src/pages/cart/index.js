import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
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
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>

          <section className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem._id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.title} />
                  {console.log(cartItem.title)}
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.description}</p>
                    <p>{cartItem.category}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">{cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button>-</button>
                  <div className="count">{cartItem.quantity}</div>
                  <button>+</button>
                </div>
                <div className="cart-product-total-price">
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
