import type { App } from 'vue';

import {
    create,
    // component
    NH1,
    NH2,
    NSpin,
    NIcon,
    NMenu,
    NCard,
    NAlert,
    NSpace,
    NButton,
    NButtonGroup,
    NSwitch,
    NLayout,
    NCheckbox,
    NEllipsis,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NLayoutHeader,
} from 'naive-ui'

const naive = create({
    components: [
        NH1,
        NH2,
        NSpin,
        NIcon,
        NMenu,
        NCard,
        NAlert,
        NSpace,
        NButton,
        NButtonGroup,
        NSwitch,
        NLayout,
        NCheckbox,
        NEllipsis,
        NLayoutContent,
        NLayoutFooter,
        NLayoutSider,
        NLayoutHeader
    ]
})

export function setupNaiveUI(app: App) {
    app.use(naive)
}