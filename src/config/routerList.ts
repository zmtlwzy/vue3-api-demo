export interface routeList {
    path: string;
    component: string;
    redirect?: string;
    children?: routeList[];
    suffix?: string;
}

export const List: routeList[] = [
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
        path: '/CrossComponentsShared',
        component: 'CrossComponentsShared'
    },
    {
        path: '/mouseEvent',
        component: 'MouseDemo'
    },
    {
        path: '/tsxTest',
        component: 'TsxTest',
        suffix: '.tsx'
    },
    {
        path: '/CaptureTest',
        component: 'CaptureTest',
    },
    {
        path: '/RouterApi',
        component: 'RouterApi',
        suffix: '.tsx'
    },
    {
        path: '/AsyncComponent',
        component: 'AsyncComponent',
        suffix: '.jsx'
    },
    {
        path: '/FunctionRender',
        component: 'FunctionRender',
    },
    {
        path: '/Transition',
        component: 'Transition',
    },
    {
        path: '/Fragments',
        component: 'Fragments',
    },
]