<template>
  <Nav />
  <div id="body">
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"

export default {
  name: "App",
  components: { Nav }
}
</script>


<style scoped>

#body {
  padding: var(--p);
  margin: 0 auto;
  height: 100%;
}
</style>