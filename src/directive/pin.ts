import type { App, Directive, DirectiveBinding } from 'vue';

const mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    console.log(el, 'el')
    console.log(binding, 'binding')
    el.style.position = 'fixed'
    const s = binding.arg || 'left'
    el.style[s] = binding.value + 'px'
};

const updated = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    const s = binding.arg || 'left'
    el.style.left = ''
    el.style.right = ''
    el.style[s] = binding.value + 'px'
};

const pinDirective: Directive = {
    mounted,
    updated
}

export function setupPinDirective(app: App) {
    app.directive('pin', pinDirective)
}

export default setupPinDirective;