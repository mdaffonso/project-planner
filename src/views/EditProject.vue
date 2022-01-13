<template>
  <p v-if="!this.title">Carregando dados do projeto...</p>
  
  <Form v-else @submit.prevent="handleSubmit">
    <h1>Modificar projeto</h1>
    <label for="title">Título</label>
    <input v-model="title" type="text" id="title" required>

    <label for="details">Detalhes</label>
    <textarea v-model="details" name="details" id="details" required></textarea>

    <button>Modificar</button>
  </Form>
</template>

<script>
import Form from "../components/Form.vue"

export default {
  name: "EditProject",

  components: { Form },

  props: [ "id" ],

  data () {
    return {
      title: "",
      details: "",
      uri: `http://localhost:3000/projects/${this.id}`
    }
  },

  mounted () {
    fetch(this.uri)
      .then(res => res.json())
      .then(data => {
        this.title = data.title
        this.details = data.details
      })
      .catch(e => console.error(e.message))
  },

  methods: {
    handleSubmit () {
      const editedProject = {
        title: this.title,
        details: this.details
      }

      fetch(this.uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedProject)
      }).then(() => {
        this.$router.push("/")
      }).catch(e => console.error(e.message))
    }
  }
}
</script>