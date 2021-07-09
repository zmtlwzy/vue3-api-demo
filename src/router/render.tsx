import { resolveComponent } from 'vue';
import type { routesListType } from '@/router/routesList';
import { NIcon } from 'naive-ui';

export function renderRouter({ name }: routesListType, link: string) {
  return () => <router-link to={link}>{name}</router-link>;
}

export function renderRouterView() {
  return {
    render: () => <router-view />,
  };
}

export function renderIcon(icon: string) {
  return () => <NIcon>{resolveComponent(icon)}</NIcon>;
}
