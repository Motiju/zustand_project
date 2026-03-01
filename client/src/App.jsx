import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home_page/Home'
import Cart from './pages/cart_page/Cart'

function App() {

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Navbar></Navbar>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
