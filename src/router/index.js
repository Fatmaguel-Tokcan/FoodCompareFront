import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bmi',
    name: 'bmi',
    component: () => import(/* webpackChunkName: "about" */ '../views/BmiView.vue')
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecipesView.vue')
  },
  {
    path: '/meal-planner', // Pfad zur Meal Planner Seite
    name: 'meal-planner', // Name der Route
    component: () => import(/* webpackChunkName: "meal-planner" */ '../views/MealPlannerView.vue') // Komponente für den Meal Planner
  },
  {
    path: '/shopping-list', // Pfad zur Shopping List Seite
    name: 'shopping-list', // Name der Route
    component: () => import(/* webpackChunkName: "shopping-list" */ '../views/ShoppingListView.vue') // Komponente für den Shopping List
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
