import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    dispatch(addToCart(item));
    // console.log("hello world");
  }

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="pb-4">
        <h1 className="font-bold text-[30px]">Please wait a minute....</h1>
      </div>
    );
  }

  return (
    <div className="w-[100%] mb-10 showcase grid grid-cols-3 gap-5">
      {items.map((item) => (
        <section key={item._id} className="w-[100%] box py-6">
          <div className="w-[80%] m-auto">
            <img
              src={item.image}
              alt="img_Illustration"
              className="w-[100%] h-[200px] object-cover rounded hover:scale-105 transition-all"
            />
            <span className="flex pt-6">
              <h3 className="w-full capitalize font-bold">{item.title}</h3>
              <div className="w-[35%] font-bold text-center rounded-full bg">
                <p>${item.price}</p>
              </div>
            </span>
            <h5 className="pt-4 font-medium pb-3 capitalize">
              Category: {item.category}
            </h5>
            <p className="text-[13px]">
              {item.description.split(" ").slice(0, 10).join(" ") + "..."}
            </p>
            <button className="bg mt-4" onClick={() => handleAddToCart(item)}>
              Add To Cart
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;

// trying to make handleAddToCart to add to cart on click
