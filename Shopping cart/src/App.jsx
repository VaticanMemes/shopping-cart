import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/navbar.jsx';
import Shop from "./pages/home/shop.jsx";
import Cart from "./pages/cart/cart.jsx";
import Footer from "./components/footer.jsx";
// import { ShopContextProvider } from './context/shop-content.jsx';

function App() {
  return (
    <>
      {/* <ShopContextProvider> */}
        <Router>
          <MyNavbar />
          <div className="container-md">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      {/* </ShopContextProvider> */}
    </>
  )
}

export default App
