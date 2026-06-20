import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/slices/cartSlice";
import { HiCheckCircle, HiHome } from "react-icons/hi";

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear cart after a successful "checkout"
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <article className="bg-gray-50 min-h-screen flex flex-col">
      <div className="px-5 md:px-10 lg:px-24">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-20">
          <section className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center">
            <div className="flex justify-center mb-6">
              <HiCheckCircle className="text-cyan-500 text-8xl animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase. Your order has been received and is being processed. 
              You will receive an email confirmation shortly.
            </p>
            <div className="space-y-4">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 bg-cyan-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-100"
              >
                <HiHome className="text-xl" />
                Return to Home
              </Link>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </article>
  );
};

export default Checkout;
