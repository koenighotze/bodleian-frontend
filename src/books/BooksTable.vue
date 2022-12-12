<template>
  <table>
    <thead>
    <tr>
      <th>
        Title
      </th>
      <th>
        ISBN
      </th>
      <th>
        Authors
      </th>
      <th>
        Action
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        {{ book.title }}
      </td>
      <td>
        {{ book.isbn }}
      </td>
      <td>
        {{ book.authors.join(',') }}
      </td>
      <td>
        <button name="Remove" v-on:click="removeBook()">Remove</button>
        <button name="Edit" v-on:click="editBook()">Edit</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import books from '../mocks/books.js'
export default {
  name: 'BooksTable',
  data () {
    return { books: books.books, book: books.books[0] }
  },
  methods: {
    removeBook () {
      console.log('rm')
    },
    editBook () {
      console.log('edit')
    }

  }
}
</script>

<style scoped>
th {
  text-decoration: underline;
}
</style>
