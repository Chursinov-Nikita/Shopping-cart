import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const validItems = cartItems.filter(Boolean);
  const cartCount = validItems.length;

  const [cost, setCost] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let item of validItems) {
      sum += Number(item.price.replace("$", ""));
    }
    setCost(sum);
  }, [cartItems]);

  return (
    <div className="w-full min-h-screen bg-zinc-950 overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-10 py-4 border-b border-zinc-800 sticky top-0 z-50 bg-zinc-950">
        <NavLink to="/">
          <span className="font-black text-xl tracking-[0.2em] uppercase text-white">
            Chursinov_Store
          </span>
        </NavLink>

        <div className="flex items-center gap-10">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-white" : "text-zinc-600 hover:text-white"
                }`
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
      <div className="w-full px-10 py-14 border-b border-zinc-800 flex items-end justify-between">
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-none text-white">
          Your Cart
        </h1>
        <p className="text-xs text-zinc-600 uppercase tracking-[0.3em] pb-2">
          {cartCount} {cartCount === 1 ? "item" : "items"} — Total: ${cost}
        </p>
      </div>

      {/* Empty state */}
      {validItems.length === 0 ? (
        <div className="w-full px-10 py-24 flex flex-col items-center justify-center gap-4 border-b border-zinc-800">
          <span className="text-zinc-700 text-xs uppercase tracking-[0.3em]">
            000 / Empty
          </span>
          <p className="text-white font-black text-2xl uppercase tracking-tight">
            Your Cart is Empty
          </p>
          <p className="text-zinc-600 text-xs uppercase tracking-widest">
            Add something from the store
          </p>
          <NavLink
            to="/"
            className="mt-4 border border-zinc-700 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:border-white transition-colors"
          >
            Back to Shop
          </NavLink>
        </div>
      ) : (
        <>
          {/* Cart Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-zinc-800 border-b border-zinc-800">
            {validItems.map((item, i) => (
              <div key={item.id} className="group flex flex-col">
                {/* Image */}
                <div className="overflow-hidden border-b border-zinc-800 bg-zinc-900">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-6 gap-6 bg-zinc-950">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="text-zinc-700 text-xs uppercase tracking-[0.2em]">
                        {String(i + 1).padStart(2, "0")} / {item.category}
                      </span>
                      <h3 className="text-white font-bold text-base uppercase tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-zinc-600 text-xs uppercase tracking-widest">
                        {item.color}
                      </p>
                    </div>
                    <span className="text-white font-black text-xl">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-full py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 border border-zinc-800 text-zinc-500 hover:border-red-900 hover:text-red-500 active:scale-95"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full px-10 py-10 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-700 text-xs uppercase tracking-[0.2em]">
                Order Total
              </span>
              <span className="text-white font-black text-4xl tracking-tighter">
                ${cost}
              </span>
              <span className="text-zinc-600 text-xs uppercase tracking-widest">
                {cost >= 100
                  ? "✓ Free shipping applied"
                  : `Add $${100 - cost} more for free shipping`}
              </span>
            </div>
            <button className="border border-zinc-700 px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:border-white active:scale-95 transition-all duration-200">
              Checkout
            </button>
          </div>
        </>
      )}

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

export default Cart;
