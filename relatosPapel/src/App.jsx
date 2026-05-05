import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About.jsx'
<<<<<<< Updated upstream
import Login from './pages/Login/Login.jsx'
import Tienda from './pages/Tienda/Tienda.jsx'
import LibroDetalle from './pages/Tienda/LibroDetalle.jsx'
import Carrito from './pages/Carrito/Carrito.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import Perfil from './pages/Perfil/Perfil.jsx'
import PerfilDetalle from './pages/Perfil/PerfilDetalle.jsx'
=======
import Login from './pages/Login.jsx'
import Tienda from './pages/Tienda.jsx'
import LibroDetalle from './pages/LibroDetalle.jsx'
import Carrito from './pages/Carrito.jsx'
import Checkout from './pages/Checkout.jsx'
import Perfil from './pages/Perfil.jsx'
import PerfilDetalle from './pages/PerfilDetalle.jsx'
import CompraExitosa from './pages/CompraExitosa.jsx'
>>>>>>> Stashed changes

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
        <Route path="tienda/compra-exitosa" element={<CompraExitosa />} />
      </Route>
    </Routes>
  )
}
