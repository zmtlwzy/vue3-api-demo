import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { LoadingBarProviderInst } from "naive-ui"

import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { List, routesListType } from "./routesList";

import { renderRouterView } from './render'

interface loadingBarApiRef {
  value?: LoadingBarProviderInst
}


export const loadingBarApiRef: loadingBarApiRef = {}

type GetRoutesArr = (list: routesListType[], meta?: routesListType['meta']) => RouteRecordRaw[]
const getRoutesArr: GetRoutesArr = (List, Meta) => {
  const arr: RouteRecordRaw[] = [];
  const dir = Meta?.dir || ''
  for (let item of List) {
    const { component, children, meta, ...other } = item;
    const obj = {
      ...other,
    } as RouteRecordRaw
    if (component) {
      obj.component = () => import(`../views${dir}/${component}/index.vue`)
    } else {
      obj.component = renderRouterView()
    }
    if (children) {
      obj.children = getRoutesArr(children, meta);
    }
    arr.push(obj);
  }
  return arr;
};

const routes = getRoutesArr(List);

const router = createRouter({
  history:
    import.meta.env.DEV
      ? createWebHistory()
      : createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!from || to.path !== from.path) {
    if (loadingBarApiRef.value) {
      loadingBarApiRef.value?.start()
    }
    next()
  }
})

router.afterEach((to, from) => {
  if (!from || to.path !== from.path) {
    if (loadingBarApiRef.value) {
      loadingBarApiRef.value?.finish()
    }
  }
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
