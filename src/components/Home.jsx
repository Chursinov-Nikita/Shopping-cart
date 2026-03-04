import Header from "./Header";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import allProducts from "../Data/allProducts";

const Home = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  return (
    <div className="w-full min-h-screen bg-zinc-950 overflow-x-hidden">
      {/* Header */}
      <Header />
      {/* Hero */}
      <div className="w-full px-10 py-14 border-b border-zinc-800 flex items-end justify-between mt-10">
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-none text-white">
          New Drop
        </h1>
        <p className="text-xs text-zinc-600 uppercase tracking-[0.3em] pb-2">
          Collection 2026 — {allProducts.length} items
        </p>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-zinc-800 border-b border-zinc-800">
        {allProducts.map((product, i) => {
          const inCart = cartItems.some((item) => item?.id === product.id);
          return (
            <div key={product.id} className="group flex flex-col">
              {/* Image */}
              <div className="overflow-hidden border-b border-zinc-800 bg-zinc-900">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-6 gap-6 bg-zinc-950">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="text-zinc-700 text-xs uppercase tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")} / {product.category}
                    </span>
                    <h3 className="text-white font-bold text-base uppercase tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-zinc-600 text-xs uppercase tracking-widest">
                      {product.color}
                    </p>
                  </div>
                  <span className="text-white font-black text-xl">
                    {product.price}
                  </span>
                </div>

                {/* buttons */}
                <button
                  onClick={() =>
                    inCart ? removeFromCart(product.id) : addToCart(product)
                  }
                  className={`w-full py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 border active:scale-95 ${
                    inCart
                      ? "border-white text-white hover:border-red-500 hover:text-red-500"
                      : "border-zinc-700 text-white hover:border-white"
                  }`}
                >
                  {inCart ? "✓ Remove" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="w-full px-10 py-5 flex justify-between items-center border-t border-zinc-900">
        <span className="text-xs text-zinc-700 uppercase tracking-widest">
          © 2026 Chursinov_Store
        </span>
        <span className="text-xs text-zinc-700 uppercase tracking-widest">
          Free shipping over $100
        </span>
      </div>
    </div>
  );
};

export default Home;
