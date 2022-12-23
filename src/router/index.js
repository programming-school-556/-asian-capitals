import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dialogs',
    component: () => import('../views/DialogsView.vue')
  },
  {
    path: '/game',
    component: () => import('../views/MessagesView.vue')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
