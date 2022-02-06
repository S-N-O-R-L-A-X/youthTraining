import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Version from '../views/versionLog/VersionInfo.vue'
import Forum from '../views/Forum.vue'
import Sidebar from '../layout/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/version',
    name: 'Version',
    component: Version
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: Sidebar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
