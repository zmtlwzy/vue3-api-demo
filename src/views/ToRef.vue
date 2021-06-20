<template>
  <n-card>
    <n-space vertical align="center">
      <p>count: {x:{{ x }} , y:{{ y }}}</p>
      <p>other: {a:{{ a }} , b:{{ b }}}</p>
      <p>r:{{ z }}</p>
      <n-button type="primary" @click="handle">click</n-button>
    </n-space>
  </n-card>
</template>

<script>
  import { reactive, toRefs, toRef, ref, defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const count = reactive({
        x: 0,
        y: 0,
      });

      const other = reactive({
        a: 100,
        b: 100,
      });

      const r = { z: ref(1) };

      const handle = () => {
        count.x++;
        count.y += 2;
        other.a--;
        other.b -= 2;
        r.z.value++;
      };

      return {
        ...toRefs(count),
        a: toRef(other, 'a'),
        b: toRef(other, 'b'),
        z: toRef(r, 'z'),
        handle,
      };
    },
  });
</script>

<style></style>
