import { resolveComponent } from 'vue';
import type { routesListType } from '@/router/routerList';
import { NIcon } from 'naive-ui';

export function rederRouter(obj: routesListType) {
  return () => <router-link to={obj.path}>{obj.component}</router-link>;
}

export function renderIcon(icon: string) {
  return () => <NIcon>{resolveComponent(icon)}</NIcon>;
}
