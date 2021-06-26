<template>
  <div class="column-layout">
    <n-h4>{{ $options.name }}</n-h4>
    <n-space vertical align="center">
      <div class="border" @click.capture="handleClick('1')">
        1
        <div class="border" @click="handleClick('2')">
          2
          <div class="border" @click="handleClick('3')"> click 3 first alert is 1 </div>
        </div>
      </div>
    </n-space>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'eventModifiers',
    methods: {
      handleClick(text: Object) {
        alert(text.toString());
      },
    },
  });
</script>

<style scoped>
  .border {
    padding: 20px;
    border: 1px dashed grey;
  }
</style>
