import { useContext, useEffect, useState } from 'react'
import BooksTableContext from '../../context/books-table/BooksTableContext'
import { fetchAllBooks } from '../../service/bookRepository'
import AddBookForm from './AddBookForm'
import BookItem from './BookItem'
import './BooksTable.css'

const BooksTable = () => {
  const { books, setBooks } = useContext(BooksTableContext)
  const [filter, setFilter] = useState('')
  const [isAddBookFormVisible, setIsAddBookFormVisible] = useState(false)

  useEffect(() => {
    if (isAddBookFormVisible) {
      return
    }
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
  }, [isAddBookFormVisible])

  const filterChanged = (e) => setFilter(e.target.value)

  const filteredBooks = books.filter((book) => {
    const source = `${book.title}${book.authors.join('')}`.toLowerCase()
    return source.includes(filter.toLowerCase())
  })

  return (
    <div className="book-table">
      <h1>Books</h1>
      <div className="tool-bar">
        <div className="tool">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="search"
            type="search"
            value={filter}
            onChange={filterChanged}
            placeholder="Enter filter expression"
          />
        </div>
        {!isAddBookFormVisible && (
          <div className="tool">
            <button onClick={() => setIsAddBookFormVisible(true)}>
              <i className="fa-solid fa-square-plus"></i>
              {}Add book
            </button>
          </div>
        )}
      </div>
      {isAddBookFormVisible && <AddBookForm showForm={setIsAddBookFormVisible} />}
      {!isAddBookFormVisible && (
        <div className="table-content">
          {filteredBooks.length === 0 && <p>No books found...</p>}
          {filteredBooks.length > 0 &&
            filteredBooks.map((book) => <BookItem key={book.id} book={book} />)}
        </div>
      )}
    </div>
  )
}

export default BooksTable
