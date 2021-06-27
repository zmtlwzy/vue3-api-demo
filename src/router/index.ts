import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { LoadingBarProviderInst } from "naive-ui"

import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { List, routesListType } from "./routerList";

interface loadingBarApiRef {
  value?:LoadingBarProviderInst
}

export const loadingBarApiRef:loadingBarApiRef = {}

const getRoutesArr: (arr: routesListType[]) => RouteRecordRaw[] = (Arr) => {
  const arr: RouteRecordRaw[] = [];
  for (let item of Arr) {
    const { component, children, ...other } = item;
    let obj: RouteRecordRaw
    obj = {
      ...other,
      component: () => import(`../views/${component}/index.vue`),
    }
    if (children) {
      obj.children = getRoutesArr(children);
    }
    arr.push(obj);
  }
  return arr;
};

const routes = getRoutesArr(List);

const router = createRouter({
  history:
    import.meta.env.DEV
      ? createWebHashHistory()
      : createWebHistory(),
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
