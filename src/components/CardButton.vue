<template>
  <button @click.stop="click" :style="highlight">
    <span class="material-icons" :class="{ lit }">{{ variant }}</span>
  </button>
</template>

<script>
export default {
  name: "CardButton",

  props: [
    "click",
    "variant",
    "lit",
    "hoverColor"
  ],

  computed: {
    highlight () {
      return {
        "--color": this.hoverColor
      }
    }
  }
}
</script>

<style scoped>
button {
  --color: #678;
  background: transparent;
  border: none;
  padding: 0.25rem;
}

button > span {
  color: #bbb;
}

button:hover > span {
  color: var(--color);
}

.lit {
  color: rgb(134, 218, 0);
}
</style>