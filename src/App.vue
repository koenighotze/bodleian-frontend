<template>
  <main>
    <BodleianPage />
  </main>
</template>

<script>
import BodleianPage from './components/BodleianPage.vue'

export default {
  name: 'App',
  components: {
    BodleianPage
  }
}
</script>

<style>

body {
  background-color: silver;
  background-attachment: fixed;
}

main {
  padding: 1em;
  background-color: white;
  margin: 0 auto;
  max-width: 1024px;
  min-height: 300px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
