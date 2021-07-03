import type { RouteRecordRaw } from 'vue-router';

type same = Pick<RouteRecordRaw, 'path' | 'redirect'>
export interface routesListType extends same {
    component?: string;
    children?: routesListType[] | undefined;
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
        path: '/event',
        component: 'Event'
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
        path: '/crossComponent',
        component: 'CrossComponent'
    },
    {
        path: '/useHooks',
        component: 'UseHooks'
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
        path: '/scriptSetup',
        component: 'ScriptSetup',
    },
    {
        path: '/cssVar',
        component: 'CssVar',
    },
    {
        path: '/customDirective',
        component: 'CustomDirective'
    },
    {
        path: '/otherApi',
        component: 'OtherApi'
    }
]