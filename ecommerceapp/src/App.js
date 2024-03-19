import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Navabar from "./component/header/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetail from "./component/productData/ProductDetail";
import { CartProvider } from './context/CartContext';




function App() {
  return (
    <>
      <CartProvider>
        <Navabar />
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/Productlist" element={<ProductListPage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/products/:productid" element={<ProductDetail />}></Route>
        </Routes>
      </CartProvider>
    </>
  )
}

export default App;
