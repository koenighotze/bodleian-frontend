<template>
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
</template>

<script>
const book = {
  authors: [
    'Thomas Mann'
  ],
  id: '681c2575-1263-465f-80e9-47c4686b0373',
  isbn: '3596294312',
  title: 'Buddenbrooks. Verfall einer Familie'
}

export default {
  name: 'BookRow',
  data () {
    return { book }
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
</style>
