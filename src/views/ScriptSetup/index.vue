<template>
  <GridLayout>
    <NGridItem :span="2">
      <NH2>{{ $options.name }}</NH2>
    </NGridItem>
    <Comps.Base />
    <Comps.UseContext msg="demo2" @inc="handleClick" ref="comp">
      <template #default>slot_default</template>
      <template #other>slot_other</template>
    </Comps.UseContext>
  </GridLayout>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Namespaced Component tags in ScriptSetup',
  });
</script>
<script setup>
  import { Comps } from './components';
  import { isRef, watch } from 'vue';

  const handleClick = (e) => {
    isRef(e) && e.value++;
  };
  let comp = $ref(null);
  watch(
    () => comp?.count2,
    (val) => {
      console.log(val, 'comp expose count2');
    }
  );
</script>
