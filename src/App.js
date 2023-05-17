import "./App.css";
import {Route, Routes} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/sign-up/Signup";
import { ProductListing } from "./pages/product-listing/ProductsListing";
import Mockman from "mockman-js";
import { Navigation } from "./components/navigation/Navigation";
import { Footer } from "./components/footer/Footer";
import { ProductDetails } from "./pages/Product-details/ProductDetails";
import { RequiresAuth } from "./components/RequiresAuth";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductListing/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
        <Route path="/cart" element={<RequiresAuth><Cart/></RequiresAuth>}/>
        <Route path="/wishlist" element={<RequiresAuth><Wishlist/></RequiresAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
