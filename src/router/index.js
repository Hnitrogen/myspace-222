import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/error/NotFound' 
import RankListIndexView from '../views/ranklist/RanklistIndexView'
import PkIndexView from '../views/pk/PkIndexView'
import RecordIndexView from '../views/record/RecordIndexView' 
import MyBotView from '../views/account/me/MyBotView'
import GotoView from '../views/goto/GotoView'
import PasteBinView from '../views/pastebin/PasteBinView'

const routes = [
  {
    path: "/myspace/",
    name: "home",
    redirect: "/pk/",
  },
  {
    path: "/myspace/ranklist/",
    name: "ranklist_index",
    component: RankListIndexView,
  },
  {
    path: "/myspace/pk/",
    name: "pk_index",
    component: PkIndexView,
  },
  {
    path: "/myspace/record/",
    name: "record_index",
    component: RecordIndexView,
  },
  {
    path: "/myspace/mybot/",
    name: "mybot_index",
    component: MyBotView,
  },
  {
    path: "/myspace/404/",
    name: "notfound",
    component: NotFound,
  },
  {
    path: "/myspace/goto/",
    name: "goto",
    component: GotoView,
  },
  {
    path: "/myspace/pastebin/",
    name: "pastebin",
    component: PasteBinView,
  },
  {
    path: "/myspace/:catchAll(.*)",
    redirect: "/myspace/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
