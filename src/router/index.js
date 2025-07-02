import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MenPage from '../views/MenPage.vue'
import WomenPage from '../views/WomenPage.vue'
import AccessoriesPage from '../views/AccessoriesPage.vue'
import SalesPage from '../views/SalesPage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/men',
      name: 'men',
      component: MenPage,
    },
    {
      path: '/women',
      name: 'women',
      component: WomenPage,
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: AccessoriesPage,
    },
    {
      path: '/sale',
      name: 'sale',
      component: SalesPage,
    },
  ],
})

export default router
