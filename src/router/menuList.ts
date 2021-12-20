import { routesListType } from '@/router/routesList';

import { MenuOption } from 'naive-ui';
import { renderRouter } from '@/router/render';

export function genMeunList(list: routesListType[], path: routesListType['path'] = '') {
  return list.map(item => {
    const _item = {} as MenuOption;
    const link = `${path ? path + '/' : ''}${item.path}`;
    const title = item?.meta?.title ?? item.name!;
    _item.key = item.name!;
    if (item.component) {
      _item.label = renderRouter(title, link);
    } else {
      _item.label = title;
    }
    if (item.children) {
      _item.children = genMeunList(item.children, link);
    }
    return _item;
  });
}
