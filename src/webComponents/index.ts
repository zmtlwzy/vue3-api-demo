import { defineCustomElement } from 'vue'
import Foo from './foo.ce.vue'

// convert into custom element constructor
const MyFoo = defineCustomElement(Foo)

// register
export function registerCustomEl() {
  customElements.define('my-foo', MyFoo)
}
