import Vue from 'vue'
import Router from 'vue-router'
import   routes from './router.js'
import { setTitle } from '@/lib/util'

Vue.use(Router)
const router= new Router({
  mode:'history',
  routes
})

const HAS_LOGINED= true

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.name !=='login'){
    if(HAS_LOGINED) next()
     else next({name:'login'})
  }else{
    if(HAS_LOGINED) next({name:'home'})
    else next()
  }
})

router.afterEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
 to.meta && setTitle(to.meta.title)
  if(to.name !=='login'){
    if(HAS_LOGINED) next()
     else next({name:'login'})
  }else{
    if(HAS_LOGINED) next({name:'home'})
    else next()
  }
})

export default router
