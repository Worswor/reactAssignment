import { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import onlineShop from './OnlineShop'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <NaNvbar />
        <Route path="/" element={<onlineShop />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App
