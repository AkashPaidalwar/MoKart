import React from "react";
import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userContext } from "./Context/Context";

function App() {
  const { user } = React.useContext(userContext);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={user ? <Cart /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
