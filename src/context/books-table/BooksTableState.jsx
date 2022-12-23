import PropTypes from 'prop-types'
import { useContext, useReducer } from 'react'
import BooksTableContext from './BooksTableContext'

import reducer from './BooksTableReducer'

const BooksTableState = ({ children }) => {
  const initialState = {
    books: [],
    isLoading: true,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BooksTableContext.Provider value={{ state, dispatch }}>{children}</BooksTableContext.Provider>
  )
}

BooksTableState.propTypes = {
  children: PropTypes.object.isRequired,
}

export const useBookTable = () => {
  const { state, dispatch } = useContext(BooksTableContext)
  return [state, dispatch]
}

export default BooksTableState
