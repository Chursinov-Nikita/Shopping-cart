import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const allProducts = [
  {
    id: 1,
    name: "Usual Tee",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Basic Tee in black.",
    price: "$40",
    color: "Black",
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Tas Tee",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "Basic Tee",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Basic Tee in dark gray.",
    price: "$30",
    color: "Charcoal",
    category: "T-Shirts",
  },
  {
    id: 4,
    name: "Artwork Tee",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Artwork Tee in peach.",
    price: "$55",
    color: "Iso Dots",
    category: "T-Shirts",
  },
];

const Home = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const cartCount = cartItems.filter(Boolean).length;

  return (
    <div className="w-full min-h-screen bg-zinc-950 overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-10 py-4 border-b border-zinc-800 fixed top-0 z-50 bg-zinc-950">
        <span className="font-black text-xl tracking-[0.2em] uppercase text-white">
          Chursinov_Store
        </span>
        <div className="flex items-center gap-10">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? "text-white" : "text-zinc-600 hover:text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white border border-zinc-700 px-5 py-2 hover:border-white transition-colors"
          >
            Cart
            {cartCount > 0 && (
              <span className="text-xs font-black text-zinc-400">
                ({cartCount})
              </span>
            )}
          </NavLink>
        </div>
      </nav>

      {/* Hero */}
      <div className="w-full px-10 py-14 border-b border-zinc-800 flex items-end justify-between mt-10">
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-none text-white">
          New Drop
        </h1>
        <p className="text-xs text-zinc-600 uppercase tracking-[0.3em] pb-2">
          {/* Fix 3: cartCount is already a number, removed .length */}
          Collection 2026 — {allProducts.length} items
        </p>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-zinc-800 border-b border-zinc-800">
        {/* Fix 1: allProducts instead of undefined filtered */}
        {/* Fix 2: added index i to .map() callback */}
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

                <button
                  onClick={() => addToCart(product)}
                  disabled={inCart}
                  className={`w-full py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 border ${
                    inCart
                      ? "border-zinc-800 text-zinc-700 cursor-not-allowed"
                      : "border-zinc-700 text-white hover:border-white active:scale-95"
                  }`}
                >
                  {inCart ? "✓ In Cart" : "Add to Cart"}
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
