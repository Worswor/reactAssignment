import { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import OnlineShop from './OnlineShop'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<OnlineShop />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;