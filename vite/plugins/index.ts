import genUnocss from './unocss'
import genAutoImport from './unplugin_auto_import'
import genComponents from './unplugin_vue_components'
import genIcons from './unplugin_icons'

const plugins = []

plugins.push(genUnocss())
plugins.push(genAutoImport())
plugins.push(genComponents())
plugins.push(genIcons())

export default plugins