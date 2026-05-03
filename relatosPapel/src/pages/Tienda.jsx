import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CabeceraTienda from '../components/CabeceraTienda.jsx'
import PaginacionCatalogo from '../components/PaginacionCatalogo.jsx'
import SidebarCatalogo from '../components/SidebarCatalogo.jsx'
import TarjetaLibro from '../components/TarjetaLibro.jsx'
import { useAuth } from '../context/useAuth.js'
import { getBooks } from '../services/bookService.js'
import './TiendaPage.css'

function filtrarPorTitulo(lista, texto) {
  const t = texto.trim().toLowerCase()
  if (!t) return lista
  return lista.filter((libro) => libro.titulo.toLowerCase().includes(t))
}

export default function Tienda() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { usuario, logout } = useAuth()
  const [libros, setLibros] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const consulta = searchParams.get('q') ?? ''

  const librosMostrados = useMemo(
    () => filtrarPorTitulo(libros, consulta),
    [libros, consulta],
  )

  useEffect(() => {
    if (!usuario) {
      navigate('/login', { replace: true })
    }
  }, [usuario, navigate])

  useEffect(() => {
    if (!usuario) return
    let cancelado = false
    ;(async () => {
      setCargando(true)
      setError(null)
      const res = await getBooks()
      if (cancelado) return
      if (res.error) {
        setError(res.error)
        setLibros([])
      } else {
        setLibros(res.data)
      }
      setCargando(false)
    })()
    return () => {
      cancelado = true
    }
  }, [usuario])

  if (!usuario) {
    return null
  }

  function handleLogout() {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div className="tienda">
      <CabeceraTienda usuario={usuario} onLogout={handleLogout} />

      <div className="tienda-cuerpo">
        <SidebarCatalogo />

        <section className="tienda-main" aria-labelledby="tienda-titulo">
          <h1 id="tienda-titulo" className="tienda-main__titulo">
            Descubre tu próxima lectura
          </h1>

          {cargando ? (
            <p className="tienda-resultado-busqueda" role="status">
              Cargando catálogo…
            </p>
          ) : error ? (
            <p className="tienda-sin-resultados" role="alert">
              No se pudo cargar el catálogo: {error}
            </p>
          ) : consulta.trim() && librosMostrados.length === 0 ? (
            <p className="tienda-sin-resultados" role="status">
              No hay libros cuyo título coincida con «{consulta.trim()}».
            </p>
          ) : (
            <>
              {consulta.trim() ? (
                <p className="tienda-resultado-busqueda" role="status">
                  Resultados para «{consulta.trim()}»: {librosMostrados.length}{' '}
                  {librosMostrados.length === 1 ? 'libro' : 'libros'}
                </p>
              ) : null}
              <div className="tienda-grid">
                {librosMostrados.map((libro, i) => (
                  <TarjetaLibro
                    key={`${libro.id}-${libro.titulo}-${i}`}
                    {...libro}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </div>

      <PaginacionCatalogo />
    </div>
  )
}
