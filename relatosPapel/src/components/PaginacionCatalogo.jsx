export default function PaginacionCatalogo() {
  return (
    <nav aria-label="Paginación">
      <button type="button" aria-label="Página anterior">
        ←
      </button>
      <button type="button" aria-current="page">
        1
      </button>
      <button type="button">2</button>
      <button type="button" aria-label="Página siguiente">
        →
      </button>
    </nav>
  )
}
