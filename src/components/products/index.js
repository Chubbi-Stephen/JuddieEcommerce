import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart(item) {
    dispatch(addToCart(item));
    navigate("/cart");
    
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="pb-4 flex justify-center items-center min-h-screen">
        <h1 className="font-bold text-[30px] text-center">Please wait a minute...</h1>
      </div>
    );
  }

  return (
    <div className="w-full mb-10 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <section key={item.id} className="w-full py-6">
          <div className="w-full p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <img
              src={item.image}
              alt="Product Illustration"
              className="w-full h-[200px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="pt-4">
              <h3 className="text-lg font-bold capitalize truncate">{item.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-600 font-medium">${item.price}</p>
                <span className="text-sm text-gray-500 capitalize">{item.category}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {item.description.split(" ").slice(0, 10).join(" ")}...
              </p>
              <button
                className="w-full mt-4 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                onClick={() => handleAddToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;