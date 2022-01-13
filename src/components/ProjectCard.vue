<template>
  <div class="project" :class="{ completed }" @click="toggleDetails">
    <div class="top-row">
      <h2>{{ title }}</h2>
      <div>
        <CardButton variant="edit" :click="editProject" />
        <CardButton variant="delete" :click="deleteProject" hoverColor="crimson" />
        <CardButton variant="done" :click="toggleComplete" :lit="completed" />
      </div>
    </div>
    <p v-if="showDetails">{{ details }}</p>
  </div>
</template>

<script>
import CardButton from "./CardButton.vue"

export default {
  name: "ProjectCard",

  components: {
    CardButton
  },

  props: [ "id", "title", "details", "completed" ],

  data () {
    return {
      showDetails: false,
      uri: `http://localhost:3000/projects/${this.id}`
    }
  },

  methods: {
    toggleDetails () {
      this.showDetails = !this.showDetails
    },

    deleteProject () {
      fetch (this.uri, {
        method: "DELETE"
      }).then(() => this.$emit("delete", this.id))
        .catch(e => console.error(e.message))
    },

    toggleComplete () {
      fetch (this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ completed: !this.completed })
      }).then(() => this.$emit("complete", this.id))
        .catch(e => console.error(e.message))
    },

    editProject () {
      this.$router.push(`/project/${this.id}`)
    }
  }

}
</script>

<style scoped>
.project {
  display: flex;
  flex-flow: column;

  gap: 1rem;

  padding: 1rem;
  background: white;
  border-radius: 0.125rem;
  border-left: 0.25rem solid rgb(179, 0, 45);

  cursor: pointer;
}

.completed {
  border-left-color: rgb(84, 187, 0);
}

.top-row {
  display: flex;
  flex-flow: row;

  justify-content: space-between;
  align-items: center;
}

.top-row > div {
  display: flex;
}
</style>