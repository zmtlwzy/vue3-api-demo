import { routesListType } from '@/router/routesList';

import { MenuOption } from 'naive-ui';
import { renderRouter } from '@/router/render';

export function genMeunList(list: routesListType[], path: routesListType['path'] = '') {
    return list.map((item) => {
        const _item = {} as MenuOption;
        const link = `${path ? path + '/' : ''}${item.path}`
        _item.key = item.name!;
        if (item.component) {
            _item.label = renderRouter(item, link);
        } else {
            _item.label = item.name
        }
        if (item.children) {
            _item.children = genMeunList(item.children, item.path);
        }
        return _item;
    });
}