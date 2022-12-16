import BookItem from './BookItem'
import books from './book-data'
import './BookTable.css'

const BookTable = () => {
  return (
    <div className="book-table">
      <span className="data-header">Books</span>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookTable
