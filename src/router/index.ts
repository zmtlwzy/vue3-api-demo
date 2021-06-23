import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { List, routesListType } from "./routerList";

const getRoutesArr: (arr: routesListType[]) => RouteRecordRaw[] = (Arr) => {
  const arr: RouteRecordRaw[] = [];
  for (let item of Arr) {
    const { component, children, suffix, ...other } = item;
    let obj: RouteRecordRaw
    obj = {
      ...other,
      component: () => import(`../views/${component}.vue`),
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

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
