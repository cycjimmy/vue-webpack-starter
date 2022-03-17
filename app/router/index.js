import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Foo from '../views/Foo.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/foo',
    name: 'foo',
    component: Foo,
  },
  {
    path: '/bar',
    name: 'bar',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Bar.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'main_nav_active',
});

export default router;
