import BooksTable from '../components/books/BooksTable'
import BooksTableState from '../context/books-table/BooksTableState'

const booksPage = () => {
  return (
    <div>
      <BooksTableState>
        <BooksTable />
      </BooksTableState>
    </div>
  )
}

export default booksPage
