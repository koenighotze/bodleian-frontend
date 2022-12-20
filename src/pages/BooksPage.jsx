import BooksTable from '../components/books/BooksTable'
import BooksTableState from '../context/books-table/BooksTableState'

const booksPage = () => (
  <BooksTableState>
    <BooksTable />
  </BooksTableState>
)

export default booksPage
