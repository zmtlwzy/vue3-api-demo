<template>
  <div class="column-layout">
    <h2>Multiple</h2>
    <span>{{ count }}</span>
    <br />
    <span>{{ count2 }}</span>
    <br />
    <button class="btn" @click="add">add</button>
    <button class="btn" @click="sub">sub</button>
  </div>
</template>

<script>
  import { ref, watch, defineComponent } from 'vue';
  export default defineComponent({
    name: 'MultipleSource',
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
        console.log(`val:${val} -- preVal:${preVal}`);
        console.log(`val2:${val2} -- preVal2:${preVal2}`);
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
