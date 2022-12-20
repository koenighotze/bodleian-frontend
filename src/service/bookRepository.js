import { v4 as uuid } from 'uuid'
import bookData from '../context/books-table/book-data'

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

let books = [...bookData]

const randomSleep = () => sleep((Math.floor(Math.random() * 2) + 1) * 1000)

const fetchAllBooks = async () => {
  await randomSleep()
  return books
}

const addNewBook = async ({ title, isbn, authors }) => {
  await randomSleep()

  books.push({
    id: uuid(),
    title,
    isbn,
    authors,
  })
}

const deleteBook = async ({ id }) => {
  await randomSleep()

  const idx = books.findIndex((book) => book.id === id)
  if (idx >= 0) {
    delete books[idx]
  }
}

export { fetchAllBooks, addNewBook, deleteBook }
