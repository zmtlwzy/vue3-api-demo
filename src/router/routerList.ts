import type { RouteRecordRaw } from 'vue-router';

type same = Pick<RouteRecordRaw, 'path' | 'redirect'>
export interface routesListType extends same {
    component?: string;
    children?: routesListType[] | undefined;
    suffix?: string | undefined;
}

export const List: routesListType[] = [
    {
        path: '/',
        redirect: '/ref'
    },
    {
        path: '/ref',
        component: 'Ref'
    },
    {
        path: '/reactive',
        component: 'Reactive'
    },
    {
        path: '/toRef',
        component: 'ToRef'
    },
    {
        path: '/computed',
        component: 'Computed'
    },
    {
        path: '/watch',
        component: 'Watch'
    },
    {
        path: '/watchEffect',
        component: 'WatchEffect'
    },
    {
        path: '/slots',
        component: 'Slots'
    },
    {
        path: '/teleport',
        component: 'Teleport'
    },
    {
        path: '/lifeCycle',
        component: 'LifeCycle'
    },
    {
        path: '/crossComponentsShared',
        component: 'CrossComponentsShared'
    },
    {
        path: '/mouseEvent',
        component: 'MouseDemo'
    },
    {
        path: '/tsxTest',
        component: 'TsxTest',
    },
    {
        path: '/captureTest',
        component: 'CaptureTest',
    },
    {
        path: '/routerApi',
        component: 'RouterApi',
    },
    {
        path: '/asyncComponent',
        component: 'AsyncComponent',
    },
    {
        path: '/functionRender',
        component: 'FunctionRender',
    },
    {
        path: '/transition',
        component: 'Transition',
    },
    {
        path: '/fragments',
        component: 'Fragments',
    },
    {
        path: '/customRef',
        component: 'CustomRef',
    },
    {
        path: '/scriptSetup',
        component: 'ScriptSetup',
    },
    {
        path: '/cssVar',
        component: 'CssVar',
    },
    {
        path: '/directive',
        component: 'Directive'
    }
]