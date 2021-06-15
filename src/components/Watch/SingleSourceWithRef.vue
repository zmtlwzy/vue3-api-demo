<template>
  <div class="column-layout">
    <h2>signle-Ref</h2>
    <span>{{ count }}</span>
    <span>{{ other }}</span>
    <br />
    <button class="btn" @click="add">add</button>
    <button class="btn" @click="sub">sub</button>
  </div>
</template>

<script>
  import { ref, watch, defineComponent, toRefs } from 'vue';
  export default defineComponent({
    name: 'SingleSourceWithRef',
    setup() {
      const count = ref(0);
      const other = ref(100);
      const add = () => {
        count.value++;
      };
      const sub = () => {
        count.value--;
      };

      watch(count, (count, prevCount) => {
        console.log(`count:${count} -- pre:${prevCount}`);
      });
      watch(other, (count, prevCount) => {
        console.log(`other:${count} -- pre:${prevCount}`);
      });

      return {
        count,
        other,
        add,
        sub,
      };
    },
  });
</script>
