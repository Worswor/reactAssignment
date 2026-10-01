import { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import onlineShop from './OnlineShop'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NaNvbar />
      <Routes>
        <Route path="/" element={<onlineShop />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
