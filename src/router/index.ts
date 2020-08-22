import { createRouter, createWebHashHistory, createMemoryHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import { Component } from 'vue'
import { List, routeList } from '../config/routerList'

interface Route {
  path: string;
  component: () => Promise<Component> | Component;
  redirect?: string;
  children?: Route[];
}

const getRoutesArr = (Arr: routeList[]) => {
  const arr = [
    {
      path: "/",
      redirect: Arr[0].path,
    }
  ] as Array<Route>;
  for (let item of Arr) {
    const obj = {} as Route
    const { path, component, children, suffix } = item;
    obj.path = path;
    obj.component = () =>
      import(/* webpackChunkName: "[request]" */ `../views/${component}${suffix ? suffix : '.vue'}`);
    if (children) {
      obj.children = getRoutesArr(children);
    }
    arr.push(obj);
  }
  return arr;
};

const routes: Array<RouteRecordRaw> = getRoutesArr(List)

const router = createRouter({
  // history: createWebHashHistory(),
  // history: createMemoryHistory(),
  history: process.env.NODE_ENV !== 'production' ? createWebHistory() : createWebHashHistory(),
  routes
});

export default router;
