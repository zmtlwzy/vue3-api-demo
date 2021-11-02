import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default function genComponents() {
    return Components({
        dts: 'types/components.d.ts',
        // auto import dirs compontents 
        dirs: ['src/components', 'src/layout'],
        // auto import Icon & Naive compontents
        resolvers: [IconsResolver({
            prefix: 'i',
            customCollections: [
                'my-svg'
            ]
        }), NaiveUiResolver()],
    })
}
