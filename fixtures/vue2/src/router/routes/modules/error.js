export default [
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error/not-found.vue'),
    meta: {
      title: '404 Not Found'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]
