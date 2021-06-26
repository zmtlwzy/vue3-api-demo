<template>
  <div class="column-layout">
    <n-h4>{{ $options.name }}</n-h4>
    <n-input type="input" v-model:value="refValue" placeholder="停止输入500ms后,输入值将在下方更新"/>
    <n-tag class="mt-5">{{ customRefValue }}</n-tag>
  </div>
</template>

<script lang="ts">
  import { customRef, defineComponent, ref, watch } from 'vue';
  function useDebouncedRef(value: any, delay: number = 500) {
    let timeout: TimeoutHandle;
    return customRef((track, trigger) => {
      return {
        get() {
          track();
          return value;
        },
        set(newValue) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            value = newValue;
            trigger();
          }, delay);
        },
      };
    });
  }

  export default defineComponent({
    name: 'CustomRef_debounced',
    setup() {
      const refValue = ref<string>('hello');
      const customRefValue = useDebouncedRef('hello');

      watch(refValue, (item) => {
        customRefValue.value = item;
      });
      return {
        refValue,
        customRefValue,
      };
    },
  });
</script>
