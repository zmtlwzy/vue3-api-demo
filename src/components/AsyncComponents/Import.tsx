import { defineAsyncComponent } from "vue";

export default defineAsyncComponent(() =>
  import('@/views/Ref.vue')
)