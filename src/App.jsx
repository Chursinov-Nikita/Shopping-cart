import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
