import { createRouter, createWebHistory } from 'vue-router'

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
  }
]

const router = createRouter({
  history: createWebHistory(), // 路由模式：history模式
  routes: routes
})

export default router
