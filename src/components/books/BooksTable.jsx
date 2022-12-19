import { useContext, useEffect, useState } from 'react'
import BooksTableContext from '../../context/books-table/BooksTableContext'
import { fetchAllBooks } from '../../service/bookRepository'
import BookItem from './BookItem'
import './BooksTable.css'

const BooksTable = () => {
  const { books, setBooks } = useContext(BooksTableContext)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    let ignore = false
    const fetch = async () => {
      const bookData = await fetchAllBooks()
      if (!ignore) {
        setBooks(bookData)
      }
    }
    fetch()
    return () => (ignore = true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filterChanged = (e) => setFilter(e.target.value)

  // TODO useMemo
  const filteredBooks = books.filter((book) => {
    const source = `${book.title}${book.authors.join('')}`.toLowerCase()

    return source.includes(filter.toLowerCase())
  })

  return (
    <div className="book-table">
      <span className="data-header">Books</span>
      <div>
        Search:
        <input
          type="search"
          value={filter}
          onChange={filterChanged}
          placeholder="Enter filter expression"
        />
        <button>Add book</button>
      </div>
      {filteredBooks.length === 0 && <p>No books found...</p>}
      {filteredBooks.length > 0 &&
        filteredBooks.map((book) => <BookItem key={book.id} book={book} />)}
    </div>
  )
}

export default BooksTable
