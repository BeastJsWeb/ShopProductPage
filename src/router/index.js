import { createRouter, createWebHistory } from "vue-router";
import ProductCard from '@/pages/ProductCard.vue'

const routes = [
  {
    path: '/',
    component: ProductCard
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router