import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} from "../../components/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container w-full bg-gray-50">
      {cart.cartItems.length === 0 ? (
        <article>
          <section className="px-5 md:px-10 lg:px-24">
            <Navbar />
            <section className="w-full min-h-[100vh] flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-5">
                Your Cart is Empty...🙁
              </h1>
              <h2 className="text-xl text-gray-600 font-medium mb-6">
                Please go back to the homepage to shop for an item.
              </h2>
              <Link
                to="/"
                className="flex items-center bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-600 transition-all"
              >
                <HiArrowNarrowLeft className="mr-2" />
                Start Shopping
              </Link>
            </section>
          </section>
          <Footer />
        </article>
      ) : (
        <div className="px-5 md:px-10 lg:px-24">
          <Navbar />
          <h2 className="text-center text-3xl font-bold my-6">Shopping Cart</h2>
          <div className="hidden sm:grid grid-cols-5 gap-4 text-center font-semibold text-gray-600 uppercase mb-4">
            <h3 className="col-span-2">Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>

          <section className="cart-items space-y-6">
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem._id}
                className="grid grid-cols-1 sm:grid-cols-5 items-center gap-4 border-t py-4"
              >
                {/* Product Details */}
                <div className="flex items-center col-span-2">
                  <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {cartItem.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {cartItem.description.split(" ").slice(0, 10).join(" ")}...
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      <strong>Category:</strong> {cartItem.category}
                    </p>
                    <button
                      onClick={() => handleRemoveFromCart(cartItem)}
                      className="text-red-500 text-sm mt-2 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center text-gray-800 font-medium">
                  ${cartItem.price.toFixed(2)}
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => handleDecreaseCart(cartItem)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <div className="px-4 py-1">{cartItem.cartQuantity}</div>
                    <button
                      onClick={() => handleIncreaseCart(cartItem)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="text-center text-gray-800 font-bold">
                  ${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                </div>
              </div>
            ))}
          </section>

          {/* Cart Summary */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
            >
              Clear Cart
            </button>
            <div className="text-center mt-4 sm:mt-0">
              <h3 className="text-xl font-bold text-gray-800">
                Subtotal: ${cart.cartTotalAmount.toFixed(2)}
              </h3>
              <p className="text-sm text-gray-600">
                Taxes and shipping calculated at checkout.
              </p>
              <button className="mt-4 bg-cyan-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-cyan-600 transition-all">
                Proceed to Checkout
              </button>
            </div>
            <Link
              to="/"
              className="mt-4 sm:mt-0 bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-all"
            >
              <HiArrowNarrowLeft className="inline-block mr-2" />
              Continue Shopping
            </Link>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Cart;