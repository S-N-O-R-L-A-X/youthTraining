import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import Home from '../views/Home.vue'
import Version from '../views/versionLog/VersionInfo.vue'
import Forum from '../views/Forum.vue'
import Sidebar from '../layout/Sidebar.vue'
import ERROR from '@/views/error/404.vue'
import EQ from '@/views/articles/eq'
import ListenTechnique from '@/views/articles/listen/listenTechnique'
import WhatIsCommunication from '@/views/articles/communication/whatIsCommunication'
import InterpersonalCommunicationTechnique from '@/views/articles/communication/interpersonalCommunicationTechnique'
import EffectiveCommunicationTechnique from '@/views/articles/communication/effectiveCommunicationTechnique'
import NonverbalCommunication from '@/views/articles/communication/nonverbalCommunication'
import WordCommunication from '@/views/articles/communication/wordCommunication'
import CommunicationSkill from '@/views/articles/communication/communicationSkill'
import ImportantHint from '@/views/articles/listen/importantHint'
import Exam from '@/views/exam/exam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Layout,
    children:[
      {
        path:'',
        name:'Home',
        component: Home
      }
    ]
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
    path: '/exam',
    name: 'Exam',
    component: Exam
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
    path:'/communication',
    name:'Communication',
    component: Layout,
    meta:{title:'Communication'},
    children:[
      {
        path:'whatIsCommunication',
        name:'WhatIsCommunication',
        component: WhatIsCommunication
      },
      {
        path:'interpersonalCommunicationTechnique',
        name:'InterpersonalCommunicationTechnique',
        component: InterpersonalCommunicationTechnique
      },
      {
        path:'effectiveCommunicationTechnique',
        name:'EffectiveCommunicationTechnique',
        component: EffectiveCommunicationTechnique
      },
      {
        path:'nonverbalCommunication',
        name:'NonverbalCommunication',
        component: NonverbalCommunication
      },
      {
        path:'wordCommunication',
        name:'WordCommunication',
        component: WordCommunication
      },
      {
        path:'communicationSkill',
        name:'CommunicationSkill',
        component: CommunicationSkill
      },
      
    ]
  },
  
  {
    path:'/eq',
    name:'EQ',
    component: Layout,
    children: [
      {
        path:'',
        component: EQ
      }
    ]
  },
  {
    path:'/listen',
    name:'Listen',
    component: Layout,
    children: [
      {
        path:'listenTechnique',
        name:'ListenTechnique',
        component: ListenTechnique
      },
      {
        path:'importantHint',
        name:'ImportantHint',
        component: ImportantHint
      },
    ]
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
