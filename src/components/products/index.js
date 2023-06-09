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
    <div className="w-[100%] mb-10 showcase grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
      {items.map((item) => (
        <section key={item._id} className="w-[100%] py-6 ">
          <div className="w-[100%] p-3 shadow-2xl m-auto rounded md:w-[95%]">
            <img
              src={item.image}
              alt="img_Illustration"
              className="w-[100%] h-[200px] object-cover rounded hover:scale-100 transition-all"
            />
            <span className="flex pt-6">
              <h3 className="w-full capitalize font-bold underline">
                {item.title}
              </h3>
              <div className="w-[38%] text-[#555] h-[1.7rem] font-bold text-center rounded-full bg">
                <p>${item.price}</p>
              </div>
            </span>
            <h5 className="pt-4 font-medium pb-3 capitalize">
              Category: {item.category}
            </h5>
            <p className="text-[13px]">
              {item.description.split(" ").slice(0, 10).join(" ") + "..."}
            </p>
            <button
              className="bg text-[#555] font-bold shadow-2xl mt-4 px-3 rounded"
              onClick={() => handleAddToCart(item)}
            >
              Add To Cart
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
