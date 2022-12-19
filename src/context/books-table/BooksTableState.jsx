import PropTypes from 'prop-types'
import { useState } from 'react'
import BooksTableContext from './BooksTableContext'

const BooksTableState = ({ children }) => {
  const [books, setBooks] = useState([])

  return (
    <BooksTableContext.Provider value={{ books, setBooks }}>{children}</BooksTableContext.Provider>
  )
}

BooksTableState.propTypes = {
  children: PropTypes.object.isRequired,
}

export default BooksTableState
