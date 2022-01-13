<template>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'Home' }">Projetos</router-link></li>
      <li><router-link :to="{ name: 'Create Project' }">Criar Novo</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style-type: none;
  margin: 3rem 0 1rem;
}

a {
  text-decoration: none;
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #876;
  padding: 0.25em 0;
}

a.router-link-active {
  border-bottom: 0.125em solid rgb(0, 202, 158);
}
</style>