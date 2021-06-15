import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { List } from "./routerList";

const getRoutesArr = (Arr) => {
  const arr = [];
  for (let item of Arr) {
    const { component, children, suffix, ...obj } = item;
    obj.component = () => import(`../views/${component}${suffix ? suffix : ".vue"}`)
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
    import.meta.env.MODE !== "production"
      ? createWebHistory()
      : createWebHashHistory(),
  routes,
});

export default router;
