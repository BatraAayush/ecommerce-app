import "./App.css";
import {Route, Routes} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Login } from "./pages/login/Login";
import { ProductListing } from "./pages/product-listing/ProductsListing";
import Mockman from "mockman-js";
import { Navigation } from "./components/navigation/Navigation";
import { Footer } from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductListing/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
