// MAP STATE + ACTION -> new STATE
const reducer = (state, { type, payload }) => {
  console.log('Action: ', type)

  switch (type) {
    case 'FETCH_ALL_BOOKS': {
      return { ...state, isLoading: true }
    }
    case 'FETCHED_ALL_BOOKS': {
      return { books: payload.books, isLoading: false }
    }
    case 'ADD_BOOK': {
      return { books: payload.books, isLoading: false }
    }
    case 'REMOVE_BOOK': {
      return { books: payload.books, isLoading: false }
    }
    default:
      console.log(`Unhandled action ${type}`)
      return state
  }
}

export default reducer
