import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Version from '../views/versionLog/VersionInfo.vue'
import Forum from '../views/Forum.vue'
import Sidebar from '../layout/Sidebar.vue'
import EQ from '../views/articles/eq/Index.vue'
import ERROR from '@/views/error/404.vue'
import Listen from '@/views/articles/listen/Index.vue'
import WhatIsCommunication from '@/views/articles/communication/whatIsCommunication/Index.vue'
import InterpersonalCommunicationTechnique from '@/views/articles/communication/interpersonalCommunicationTechnique/Index.vue'
import EffectiveCommunicationTechnique from '@/views/articles/communication/effectiveCommunicationTechnique/Index.vue'

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
  {
    path:'/eq',
    name:'EQ',
    component: EQ
  },
  {
    path:'/listen',
    name:'Listen',
    component: Listen
  },
  {
    path:'/whatIsCommunication',
    name:'WhatIsCommunication',
    component: WhatIsCommunication
  },
  {
    path:'/interpersonalCommunicationTechnique',
    name:'InterpersonalCommunicationTechnique',
    component: InterpersonalCommunicationTechnique
  },
  {
    path:'/effectiveCommunicationTechnique',
    name:'EffectiveCommunicationTechnique',
    component: EffectiveCommunicationTechnique
  },
  {
    path:'*',
    name:'404',
    component: ERROR,
    hidden: true,
    meta:{
      keepAlive:true,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
