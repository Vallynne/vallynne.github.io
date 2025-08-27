import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // Default landing page → Games
  {
    path: '/',
    redirect: '/game-projects'
  },
  {
    path: '/game-projects',
    name: 'Games',
    component: () => import(/* webpackChunkName: "games" */ '../views/GameProjects.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '*',
    redirect: '/game-projects'
  }
]

const router = new VueRouter({
  // mode: 'history', // uncomment if you’re using history mode (and server supports it)
  routes
})

export default router
