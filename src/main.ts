import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from '~/router'
import { registerCustomEl } from '~/webComponents'
// import { setupGlobDirectives } from '~/directive'

import '@unocss/reset/normalize.css'
import './styles/main.css'
import 'uno.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes, base: import.meta.env.BASE_URL,

  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)

async function bootstrap() {
  // const { app } = await createApp()
  registerCustomEl()
}

bootstrap()
