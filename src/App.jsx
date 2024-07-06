import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/auth/Login'
import Navbar from './components/global/Navbar';
import Register from './pages/auth/Register';
import Purchase from './pages/purchase/Purchase';
import Home from './pages/home/Home';
import Footer from './components/global/Footer';
import Orders from './pages/orders/Orders';
import NotFound from './pages/notFound/NotFound';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/purchase-reagents" element={<Purchase title={"Reagents"} />} />
        <Route path="/purchase-analyzers" element={<Purchase title={"Analyzers"} />} />
        <Route path="/" element={<Home />} />
        <Route path="/my-orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
