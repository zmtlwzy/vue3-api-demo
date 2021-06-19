<template>
  <div>
    <div @click="hangleClick" class="btn">inc</div>
    <span>{{ a }}</span>
    <span>{{ b }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, getCurrentInstance, computed, reactive } from 'vue';
  export default defineComponent({
    name: 'ScriptSetup_demo1',
  });
</script>

<script setup lang="ts">
  ref: a = 1;
  const b = ref<number>(200);
  const inc = () => {
    a++;
  };
  const inc2 = () => {
    setTimeout(() => {
      $a.value++;
    }, 100);
  };
  const inc3 = () => {
    b.value--;
  };
  const hangleClick = () => {
    inc();
    inc2();
    inc3();
  };
  onMounted(() => {
    console.log(getCurrentInstance()?.ctx.$options.name);
  });
</script>

<style></style>
