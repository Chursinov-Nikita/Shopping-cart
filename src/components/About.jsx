import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const About = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.filter(Boolean).length;

  const qualities = ["Fast", "Style", "Reliability", "Сommunicativeness"];

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
          About Us
        </h1>
        <p className="text-xs text-zinc-600 uppercase tracking-[0.3em] pb-2">
          Est. 2026 — Chursinov_Store
        </p>
      </div>

      {/* Content grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800 border-b border-zinc-800">
        {/* Mission */}
        <div className="flex flex-col gap-6 p-10">
          <span className="text-zinc-700 text-xs uppercase tracking-[0.2em]">
            01 / Mission
          </span>
          <p className="text-white text-sm leading-relaxed tracking-wide">
            Welcome to our Store , your destination for stylish and comfortable
            clothing. We specialize in a wide variety of t-shirts, from soft,
            everyday basics to bold graphic prints, alongside a curated
            selection of hoodies, jackets, and accessories.
          </p>
          <p className="text-zinc-500 text-xs leading-relaxed tracking-wide">
            We focus on quality and the latest trends to help you express your
            individuality. Our friendly staff is here to assist you in finding
            the perfect look. Visit us today and discover your new favorite
            outfit.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-6 p-10">
          <span className="text-zinc-700 text-xs uppercase tracking-[0.2em]">
            02 / Qualities
          </span>
          <div className="flex flex-col divide-y divide-zinc-800">
            {qualities.map((tech, i) => (
              <div
                key={tech}
                className="flex items-center justify-between py-4"
              >
                <span className="text-white text-sm font-bold uppercase tracking-[0.15em]">
                  {tech}
                </span>
                <span className="text-zinc-700 text-xs uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values row */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 border-b border-zinc-800">
        {[
          { index: "03", label: "Philosophy", value: "The Voice" },
          { index: "04", label: "Design", value: "Elegant" },
          { index: "05", label: "Approach", value: "Ship & Iterate" },
        ].map(({ index, label, value }) => (
          <div key={index} className="flex flex-col gap-3 p-10">
            <span className="text-zinc-700 text-xs uppercase tracking-[0.2em]">
              {index} / {label}
            </span>
            <span className="text-white font-black text-xl uppercase tracking-wide">
              {value}
            </span>
          </div>
        ))}
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

export default About;
