import React from "react";
import { Route } from "react-router-dom";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CartContextProvider from "./contexts/CartContext";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Navigation />

        {/* Routelar */}
        <ProductContextProvider>
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </ProductContextProvider>
      </div>
    </CartContextProvider>
  );
}

export default App;
