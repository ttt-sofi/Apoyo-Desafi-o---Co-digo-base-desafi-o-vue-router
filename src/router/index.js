import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacto',
    name: 'contacto',

    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  },
  {
    path: '/Productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
