import { ComponentInternalInstance } from "vue";

interface theNum {
  a: number;
  b: number;
}

interface all extends theNum {
  el: ComponentInternalInstance | Element | null
}

export {
  theNum,
  all
}