import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductForm from '../views/ProductForm.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';

const routes = [
  { path: '/', component: HomePage , meta: {requiresAuth: true}}, // Homepage
  { path: '/create', component: ProductForm, meta: {requiresAuth: true} }, // About Page
  { path: '/register', component: RegisterPage }, // Register Page
  { path: '/login', component: LoginPage }, // About Page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      const token = localStorage.getItem('access_token');
      if (!token) {
        return next('/login')
      }
    } 
    next()
  });

export default router;