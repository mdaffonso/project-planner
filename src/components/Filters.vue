<template>
  <div>
    <button @click="applyFilter('all')" :class="{ active: current === 'all' }">todos</button>
    <button @click="applyFilter('ongoing')" :class="{ active: current === 'ongoing' }">pendentes</button>
    <button @click="applyFilter('completed')" :class="{ active: current === 'completed' }">concluídos</button>
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: [ "current" ],
  methods: {
    applyFilter (by) {
      this.$emit("filterChange", by)
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

button {
  background: transparent;
  border: none;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
  text-transform: uppercase;
  padding: 0.125em;
  color: #aa9;
}

.active {
  color: #544;
}
</style>