import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import CreateProject from "../views/CreateProject.vue"
import EditProject from "../views/EditProject.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create Project",
    component: CreateProject
  },
  {
    path: "/project/:id",
    name: "Edit Project",
    component: EditProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
