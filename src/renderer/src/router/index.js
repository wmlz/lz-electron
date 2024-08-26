import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    // 异步加载，打包时代码分割，性能优化
    component: () => import('../components/App.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('../components/App2.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../components/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
