import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Media from '../views/Media.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/media/:id', component: Media }
]

const router = new VueRouter({
  mode: 'history',
  base: '/Media-Hub/',
  routes
})

export default router
