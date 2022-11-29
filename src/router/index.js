import { createRouter, createWebHistory } from "vue-router";
const ProductCard = () => import('@/pages/ProductCard.vue')

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