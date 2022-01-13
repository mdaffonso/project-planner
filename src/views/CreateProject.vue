<template>
  <Form @submit.prevent="handleSubmit">
    <h1>Criar novo projeto</h1>
    <label for="title">Título</label>
    <input v-model="title" type="text" id="title" required>

    <label for="details">Detalhes</label>
    <textarea v-model="details" name="details" id="details" required></textarea>

    <button>Criar</button>
  </Form>
</template>

<script>
import Form from "../components/Form.vue"

export default {
  name: "CreateProject",

  components: { Form },

  data () {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects"
    }
  },

  methods: {
    handleSubmit () {
      const newProject = {
        title: this.title,
        details: this.details,
        completed: false
      }

      fetch(this.uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProject)
      }).then(() => {
        this.$router.push("/")
      }).catch(e => console.log(e.message))
    }
  }
}
</script>