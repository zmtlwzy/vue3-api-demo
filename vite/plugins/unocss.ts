import Unocss from 'unocss/vite';
import { presetUno, presetAttributify } from 'unocss';
import presetIcons from '@unocss/preset-icons'

export default function genUnocss() {
    return Unocss({
        presets: [
            presetAttributify({
                strict: true,
                prefix: 'un-',
                prefixedOnly: true,
                nonValuedAttribute: false,
            }),
            presetUno(),
            presetIcons({
                prefix: 'i-'
            })
        ]
    })
}