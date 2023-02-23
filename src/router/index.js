import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobView from '../views/jobs/JobView.vue'
import JobDetailView from '../views/jobs/JobDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView

  },
  {
    path: "/jobs",
    name: 'job',
    component: JobView

  },
  {
    path : "/jobdetail/:id",
    name : "jobDetail",
    component : JobDetailView,
    props: true
  },
  //redirect
  {
    path : '/all-jobs',
    redirect : '/jobs'
  },

  //catchAll
  {
    path : '/:catchAll(.*)',
    component : NotFoundView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
