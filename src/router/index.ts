import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { getNaiveMenuList } from './menu'

export const routes = setupLayouts(generatedRoutes)
export { getNaiveMenuList }
