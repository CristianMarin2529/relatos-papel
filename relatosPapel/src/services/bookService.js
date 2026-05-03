import booksData from './books.json'
import { delay, ok, fail } from './apiClient.js'

/** GET /books */
export async function getBooks() {
  await delay(320)
  return ok(booksData.catalog.map((row) => ({ ...row })))
}

/** GET /books/:id */
export async function getBookById(id) {
  await delay(280)
  const libro = booksData.books.find((b) => b.id === id)
  if (!libro) {
    return fail('Libro no encontrado', 404)
  }
  return ok({ ...libro })
}
