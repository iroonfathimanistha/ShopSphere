import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

import "./App.css";

function readSavedCart() {
  try {
    const saved = localStorage.getItem("shopsphere-cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [cart, setCart] = useState(readSavedCart);

  useEffect(() => {
    localStorage.setItem("shopsphere-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    window.alert(`${product.name} added to cart!`);
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }

  function placeDemoOrder() {
    setCart([]);
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={addToCart} />}
        />

        <Route
          path="/shop"
          element={<Shop onAddToCart={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails onAddToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              onPlaceOrder={placeDemoOrder}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}