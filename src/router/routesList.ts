import type { RouteRecordRaw } from 'vue-router';

type same = Omit<RouteRecordRaw, 'component' | 'components' | 'children'>

export interface routesListType extends same {
    name?: string;
    component?: string;
    children?: routesListType[] | undefined;
    meta?: {
        dir?: string
    }
}

export const List: routesListType[] = [
    {
        path: '/',
        redirect: '/refs'
    },
    {
        path: '/refs',
        name: 'Refs',
        meta: {
            dir: '/Refs',
        },
        redirect: '/refs/ref',
        children: [
            {
                path: 'ref',
                component: 'Ref'
            },
            {
                path: 'unRef',
                component: 'UnRef'
            },
            {
                path: 'toRef',
                component: 'ToRef'
            },
            {
                path: 'toRefs',
                component: 'ToRefs'
            },
            // {
            //     path: 'isRef',
            //     component: 'IsRef'
            // },
            {
                path: 'customRef',
                component: 'CustomRef'
            },
            {
                path: 'shallowRef',
                component: 'ShallowRef'
            },
            {
                path: 'triggerRef',
                component: 'TriggerRef'
            }
        ]
    },
    // {
    //     path: '/baseReactivity',
    //     dir: '/BaseReactivity',
    //     redirect: '/baseReactivity/reactive',
    //     children: [
    //         {
    //             path: '/reactive',
    //             component: 'Reactive'
    //         },
    //         {
    //             path: '/readonly',
    //             component: 'Readonly'
    //         },
    //         {
    //             path: '/isProxy',
    //             component: 'IsProxy'
    //         },
    //         {
    //             path: '/isReactive',
    //             component: 'IsReactive'
    //         },
    //         {
    //             path: '/isReadonly',
    //             component: 'IsReadonly'
    //         },
    //         {
    //             path: '/toRaw',
    //             component: 'ToRaw'
    //         },
    //         {
    //             path: '/markRaw',
    //             component: 'MarkRaw'
    //         },
    //         {
    //             path: '/shallowReactive',
    //             component: 'ShallowReactive'
    //         },
    //         {
    //             path: '/shallowReadonly',
    //             component: 'ShallowReadonly'
    //         },

    //     ]
    // },

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
]