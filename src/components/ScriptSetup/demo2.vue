<template>
  <div>
    <div class="btn" @click="handleClick">{{ msg }}</div>
    <div>{{ count }}</div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ScriptSetup_demo2',
  });
</script>

<script setup lang="ts">
  import { defineProps, defineEmit, useContext } from 'vue';
  const { emit, attrs, slots } = useContext();
  const props = defineProps({
    msg: {
      type: String,
      default: 'msg',
    },
  });

  const Emit = defineEmit(['inc']);
  
  ref: count = 1;

  const handleClick = () => {
    emit('inc', $count);
    Emit('inc', count);
  };

  console.log(props?.msg);
  console.log(Emit,emit);
  console.log(attrs, 'attrs');
  console.log(slots, 'slots');
</script>

<style></style>
