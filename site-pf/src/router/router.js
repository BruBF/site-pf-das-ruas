import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import Doacoes from '@/pages/doacoes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  
  {
    path: '/doacoes',
    name: 'Doacoes',
    component: Doacoes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;