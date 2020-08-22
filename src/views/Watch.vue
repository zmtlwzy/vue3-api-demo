<template>
  <div class="column-layout">
    <A />
    <B />
    <C />
    open console
  </div>
</template>

<script>
import { ref, watch, defineComponent } from "vue";
import { A, B, C } from "../components/Watch";
export default defineComponent({
  name: "watch",
  components: {
    A,
    B,
    C,
  },
  setup() {
    const count = ref(0);
    const count2 = ref(110);
    const add = () => {
      count.value++;
    };
    const sub = () => {
      count2.value--;
    };

    watch([count, count2], ([val, val2], [preVal, preVal2]) => {
      val !== preVal && console.log(`val:${val} -- preVal:${preVal}`);
      val2 !== preVal2 && console.log(`val2:${val2} -- preVal2:${preVal2}`);
    });
    return {
      count,
      count2,
      add,
      sub,
    };
  },
});
</script>
