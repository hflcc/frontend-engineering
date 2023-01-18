import {createWebHistory, createRouter} from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/pages/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
