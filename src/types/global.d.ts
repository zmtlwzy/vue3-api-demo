import type {
  ComponentPublicInstance,
  FunctionalComponent,
} from 'vue';

declare global {

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new(): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
