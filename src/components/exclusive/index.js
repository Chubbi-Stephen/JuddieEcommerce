import React, { useState, useEffect } from "react";

function Exclusive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from an API (e.g., Fake Store API)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products based on the search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  return (
    <section className="w-full px-6 md:px-12 lg:px-20">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="font-semibold text-3xl capitalize leading-relaxed">
          <span className="text-cyan-500">Exclusive</span> Products
        </h1>
        <p className="mt-4 text-gray-600">
          Search for the latest articles and find amazing products to buy from
          our huge collection.
        </p>
      </div>

      {/* Search Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Search Products By Category"
          className="w-full md:w-1/2 h-12 px-4 bg-gray-100 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="button"
          className="w-full md:w-auto bg-black text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-all"
        >
          Explore Now
        </button>
      </div>

      {/* Recommendations Section */}
      {filteredProducts.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-bold truncate">{product.title}</h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {searchTerm && filteredProducts.length === 0 && (
        <div className="mt-8 text-center text-gray-600">
          <p>No products found for "{searchTerm}".</p>
        </div>
      )}
    </section>
  );
}

export default Exclusive;
