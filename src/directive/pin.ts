import type { App, Directive, DirectiveBinding } from 'vue'

const mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  console.log(el, 'el')
  console.log(binding, 'binding')
  const style = el.style
  style.position = 'fixed'
  style.bottom = '10rem'
  const s = (binding.arg || 'left')
  // @ts-expect-error: ignore
  style[s] = `${binding.value}px` as string
}

const updated = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  const style = el.style
  const s = binding.arg || 'left'
  style.left = ''
  style.right = ''
  // @ts-expect-error: ignore
  style[s] = `${binding.value}px`
}

export const pinDirective: Directive = {
  mounted,
  updated,
}

export function setupPinDirective(app: App) {
  console.log(app, 'app')
  app.directive('pin', pinDirective)
}
