<template>
  <n-h2>{{ $options.name }}</n-h2>
  <div class="grid-layout-2">
    <Comps.Base />
    <Comps.UseContext msg="demo2" :num="123" @inc="handleClick" ref="comp">
      <template #default>slot_default</template>
      <template #other>slot_other</template>
    </Comps.UseContext>
  </div>
</template>

<script>
  export default defineComponent({
    name: 'Namespaced Component tags in ScriptSetup',
  });
</script>
<script setup>
  import * as Comps from './components';

  const handleClick = (e) => {
    isRef(e) && e.value++;
  };
  let comp = $ref(123);
  watch(
    () => comp?.count2,
    (val) => {
      console.log(val, 'comp expose count2');
    },
  );
</script>
