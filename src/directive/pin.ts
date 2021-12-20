import type { App, Directive, DirectiveBinding } from 'vue';

const mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  console.log(el, 'el');
  console.log(binding, 'binding');
  const style = el.style;
  style.position = 'fixed';
  style.bottom = '10rem';
  const s = binding.arg || 'left';
  style[s] = binding.value + 'px';
};

const updated = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  const style = el.style;
  const s = binding.arg || 'left';
  style.left = '';
  style.right = '';
  style[s] = binding.value + 'px';
};

const pinDirective: Directive = {
  mounted,
  updated
};

export function setupPinDirective(app: App) {
  app.directive('pin', pinDirective);
}

export default setupPinDirective;
