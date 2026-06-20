import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../api/productsApi";

const Products = () => {
  const { data: items, isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart(item) {
    dispatch(addToCart(item));
    navigate("/cart");
  }

  if (isLoading) {
    return (
      <div className="pb-4 flex justify-center items-center min-h-screen">
        {/* Placeholder for future Skeleton Loader */}
        <h1 className="font-bold text-[30px] text-center animate-pulse">Loading products...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pb-4 flex justify-center items-center min-h-screen">
        <h1 className="font-bold text-[30px] text-center text-red-500">
          Something went wrong. Please try again later.
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full mb-10 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items?.map((item) => (
        <section key={item.id} className="w-full py-6">
          <div className="w-full p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 group">
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-bold capitalize truncate" title={item.title}>
                {item.title}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-600 font-medium">${item.price}</p>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 capitalize">
                  {item.category}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {item.description}
              </p>
              <button
                className="w-full mt-4 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors duration-300 flex items-center justify-center gap-2"
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