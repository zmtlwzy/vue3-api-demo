import type { RouteRecordRaw } from 'vue-router';

type same = Omit<RouteRecordRaw, 'name' | 'children'>

type meta = {
    title?: string
}
export interface routesListType extends same {
    name?: string;
    children?: routesListType[] | undefined;
    meta?: meta
}

export const List: routesListType[] = [
    {
        path: '/',
        redirect: '/refs',
    },
    {
        path: '/rfcs',
        name: 'Rfcs',
        redirect: '/rfcs/scriptSetup',
        children: [
            {
                path: 'scriptSetup',
                name: 'ScriptSetup',
                component: () => import('views/ScriptSetup/index.vue')
            }
        ]
    },
    {
        path: '/newFeatures',
        name: 'NewFeatures',
        redirect: '/newFeatures/vbindModifiers',
        meta: {
            title: 'NewFeatures in 3.2.x'
        },
        children: [
            {
                path: 'vbindModifiers',
                name: 'VbindModifiers',
                component: () => import('views/NewFeatures/vBind.vue')
            },
            {
                path: 'v-memo',
                name: 'V-memo',
                component: () => import('views/NewFeatures/vMemo.vue')
            },
            {
                path: 'customElement',
                name: 'CustomElement',
                component: () => import('views/NewFeatures/customElement.vue')
            },
            {
                path: 'effectScope',
                name: 'effectScope',
                component: () => import('views/NewFeatures/effectScope.vue')
            }
        ]
    },
    {
        path: '/refs',
        name: 'Refs',
        redirect: '/refs/ref',
        children: [
            {
                path: 'ref',
                name: 'Ref',
                component: () => import('views/Refs/Ref/index.vue')
            },
            {
                path: 'unRef',
                name: 'UnRef',
                component: () => import('views/Refs/UnRef/index.vue')
            },
            {
                path: 'toRef',
                name: 'ToRef',
                component: () => import('views/Refs/ToRef/index.vue')
            },
            {
                path: 'toRefs',
                name: 'ToRefs',
                component: () => import('views/Refs/ToRefs/index.vue')
            },
            {
                path: 'isRef',
                name: 'IsRef',
                component: () => import('views/Refs/IsRef/index.vue')
            },
            {
                path: 'customRef',
                name: 'CustomRef',
                component: () => import('views/Refs/CustomRef/index.vue')
            },
            {
                path: 'shallowRef',
                name: 'ShallowRef',
                component: () => import('views/Refs/ShallowRef/index.vue')
            },
            {
                path: 'triggerRef',
                name: 'TriggerRef',
                component: () => import('views/Refs/TriggerRef/index.vue')

            }
        ]
    },
    {
        path: '/baseReactivity',
        name: 'BaseReactivity',
        redirect: '/baseReactivity/reactive',
        children: [
            {
                path: 'reactive',
                name: 'Reactive',
                component: () => import('views/BaseReactivity/Reactive/index.vue')
            },
            {
                path: 'readonly',
                name: 'Readonly',
                component: () => import('views/BaseReactivity/Readonly/index.vue')
            },
            {
                path: 'isProxy',
                name: 'IsProxy',
                component: () => import('views/BaseReactivity/IsProxy/index.vue')
            },
            {
                path: 'isReactive',
                name: 'IsReactive',
                component: () => import('views/BaseReactivity/IsReactive/index.vue')
            },
            {
                path: 'isReadonly',
                name: 'IsReadonly',
                component: () => import('views/BaseReactivity/IsReadonly/index.vue')
            },
            {
                path: 'toRaw',
                name: 'ToRaw',
                component: () => import('views/BaseReactivity/ToRaw/index.vue')
            },
            {
                path: 'markRaw',
                name: 'MarkRaw',
                component: () => import('views/BaseReactivity/MarkRaw/index.vue')
            },
            {
                path: 'shallowReactive',
                name: 'ShallowReactive',
                component: () => import('views/BaseReactivity/ShallowReactive/index.vue')
            },
            {
                path: 'shallowReadonly',
                name: 'ShallowReadonly',
                component: () => import('views/BaseReactivity/ShallowReadonly/index.vue')
            },

        ]
    },
    {
        path: '/computed',
        name: 'Computed',
        component: () => import('views/Computed/index.vue')
    },
    {
        path: '/watch',
        name: 'Watch',
        component: () => import('views/Watch/index.vue')
    },
    {
        path: '/watchEffect',
        name: 'WatchEffect',
        component: () => import('views/WatchEffect/index.vue')
    },
    {
        path: '/event',
        name: 'Event',
        component: () => import('views/Event/index.vue')
    },
    {
        path: '/slots',
        name: 'Slots',
        component: () => import('views/Slots/index.vue')
    },
    {
        path: '/teleport',
        name: 'Teleport',
        component: () => import('views/Teleport/index.vue')
    },
    {
        path: '/lifeCycle',
        name: 'LifeCycle',
        component: () => import('views/LifeCycle/index.vue')
    },
    {
        path: '/useHooks',
        name: 'UseHooks',
        component: () => import('views/UseHooks/index.vue')
    },
    {
        path: '/asyncComponent',
        name: 'AsyncComponent',
        component: () => import('views/AsyncComponent/index.vue')
    },
    {
        path: '/functionRender',
        name: 'FunctionRender',
        component: () => import('views/FunctionRender/index.vue')
    },
    {
        path: '/transition',
        name: 'Transition',
        component: () => import('views/Transition/index.vue')
    },
    {
        path: '/fragments',
        name: 'Fragments',
        component: () => import('views/Fragments/index.vue')
    },
    {
        path: '/cssVar',
        name: 'CssVar',
        component: () => import('views/CssVar/index.vue')
    },
    {
        path: '/customDirective',
        name: 'CustomDirective',
        component: () => import('views/CustomDirective/index.vue')
    },
    {
        path: '/other',
        name: 'Other',
        redirect: '/other/routerApi',
        children: [
            {
                path: 'routerApi',
                name: 'RouterApi',
                component: () => import('views/RouterApi/index.vue')
            },
            {
                path: 'crossComponent',
                name: 'CrossComponent',
                component: () => import('views/CrossComponent/index.vue')
            },

        ]
    }
]