<template>
  <div class="main">
    <h1>Bodleian - Digital Library</h1>

    <BooksTable />
  </div>
</template>

<script>
import BooksTable from '@/books/BooksTable'
export default {
  name: 'BodleianPage',
  components: {
    BooksTable
  }
}
</script>

<style scoped>
 div.main {
 }
 table {
   margin: 0 auto;
   min-width: 80%;
   text-align: center;
 }
 th {
   border-bottom: 1px black solid;
 }
 h1 {
   text-align: center;
 }
</style>
