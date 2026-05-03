export default function SidebarCatalogo() {
  return (
    <aside className="tienda-sidebar">
      <button type="button">
        Filtros <span aria-hidden>▼</span>
      </button>
      <nav className="tienda-sidebar__nav" aria-label="Categorías">
        <button type="button">
          <span aria-hidden>📖</span> Libros físicos
        </button>
        <button type="button">
          <span aria-hidden>📄</span> Libros digitales
        </button>
      </nav>
    </aside>
  )
}
