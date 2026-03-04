import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.filter(Boolean).length;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    //NavBar
    <nav className="w-full flex items-center justify-between px-10 py-4 border-b border-zinc-800 fixed top-0 z-50 bg-zinc-950">
      <span
        onClick={scrollToTop}
        className="font-black text-xl tracking-[0.2em] uppercase text-white cursor-pointer"
      >
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
  );
};

export default Header;
