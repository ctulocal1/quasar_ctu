
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/contract', component: () => import('../pages/contract/Home.vue') },
      { path: '/contract/appendices', component: () => import('../pages/contract/Appendices.vue') },
      { path: '/contract/appendix/a', component: () => import('../pages/contract/AppendixA.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
