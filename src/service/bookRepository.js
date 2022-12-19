import bookData from '../context/books-table/book-data'
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

const fetchAllBooks = async () => {
  const rndInt = Math.floor(Math.random() * 2) + 1
  await sleep(rndInt * 1000)
  return bookData
}

export { fetchAllBooks }
