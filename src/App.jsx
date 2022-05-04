import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import Announcement from "./components/Announcement/Announcement";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    
      <BrowserRouter>
        <Announcement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
