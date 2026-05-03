import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Tienda from './pages/Tienda.jsx'
import LibroDetalle from './pages/LibroDetalle.jsx'
import Carrito from './pages/Carrito.jsx'
import Checkout from './pages/Checkout.jsx'
import Perfil from './pages/Perfil.jsx'
import PerfilDetalle from './pages/PerfilDetalle.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path="tienda/libro/:libroId" element={<LibroDetalle />} />
        <Route path="tienda/carrito" element={<Carrito />} />
        <Route path="tienda/checkout" element={<Checkout />} />
        <Route path="tienda/perfil" element={<Perfil />} />
        <Route path="tienda/perfil/datos" element={<PerfilDetalle />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}
