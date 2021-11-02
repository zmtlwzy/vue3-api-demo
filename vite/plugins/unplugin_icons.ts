import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default function genIcons() {
    return Icons({
        scale: 1, // Scale of icons against 1em
        defaultStyle: 'display:inline-block;', // Style apply to icons
        defaultClass: '', // Class names apply to icons
        compiler: 'vue3', // 'vue2', 'vue3', 'jsx'
        jsx: 'react', // 'react' or 'preact'
        customCollections: {
            'my-svg': FileSystemIconLoader(resolve(process.cwd(), 'src/assets/icons'))
        }
    })
}