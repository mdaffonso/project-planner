<template>

  <p v-if="!projects && !error">
    Carregando projetos...
  </p>

  <div v-else class="projects">
    <Filters @filterChange="current = $event" :current="current" />
    <ProjectCard  
      v-for="project in filteredProjects" 
      :key="project.id"
      :id="project.id"
      :title="project.title"
      :details="project.details"
      :completed="project.completed"
      @delete="handleDelete"
      @complete="handleComplete" />
  </div>

  <p v-if="error">
    {{ error }}
  </p>
  
  <p class="empty" v-if="filteredProjects && filteredProjects.length === 0">
    Nenhum projeto disponível para a opção de filtro escolhida...
  </p>

</template>

<script>
import ProjectCard from "../components/ProjectCard.vue"
import Filters from "../components/Filters.vue"

export default {
  name: 'Home',

  components: { ProjectCard, Filters },

  data () {
    return {
      projects: null,
      error: null,
      current: "all"
    }
  },

  mounted () {
    fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(e => this.error = e.message)
  },

  methods: {
    handleDelete (id) {
      this.projects = this.projects.filter(project => project.id !== id)
    },

    handleComplete (id) {
      const p = this.projects.find(project => project.id === id)
      p.completed = !p.completed
    }
  },

  computed: {
    filteredProjects () {
      const returnFilter = (p, filter) => {
        const filterMatrix = {
          all: true,
          ongoing: !p?.completed,
          completed: p?.completed
        }

        return filterMatrix[filter]
      }

      return this.projects?.filter(project => returnFilter(project, this.current))
    }
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
}

.empty {
  padding: 1.5rem;
  font-style: italic;
  color: #777;
  background: white;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  opacity: 0.5;
}
</style>