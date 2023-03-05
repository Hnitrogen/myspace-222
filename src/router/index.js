import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/error/NotFound' 
import RankListIndexView from '../views/ranklist/RanklistIndexView'
import PkIndexView from '../views/pk/PkIndexView'
import RecordIndexView from '../views/record/RecordIndexView' 
import MyBotView from '../views/account/me/MyBotView'
import GotoView from '../views/goto/GotoView'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/",
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RankListIndexView,
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
  },
  {
    path: "/mybot/",
    name: "mybot_index",
    component: MyBotView,
  },
  {
    path: "/404/",
    name: "notfound",
    component: NotFound,
  },
  {
    path: "/goto/",
    name: "goto",
    component: GotoView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
