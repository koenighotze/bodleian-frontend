import { fetchAllBooks } from './bookRepository'

describe('The bookrepository', () => {
  describe('when fetching the books', () => {
    it('should return the books', async () => {
      const books = await fetchAllBooks()

      expect(books).toHaveLength(3)
    })
  })
})
