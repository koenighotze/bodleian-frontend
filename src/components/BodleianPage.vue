<template>
  <div class="main">
    <h1>Bodleian - Digital Library</h1>

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
          Title
        </td>
        <td>
          ISBN
        </td>
        <td>
          Authors
        </td>
        <td>
          Action
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BodleianPage'
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
