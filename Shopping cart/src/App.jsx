import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/navbar.jsx';
import Shop from "./pages/home/shop.jsx";
import Cart from "./pages/cart/cart.jsx";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
