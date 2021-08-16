<template>
  <n-card :title="$options.name">
    <des-table :var-obj="{ counter, doubled }" />
    <template #action>
      <n-space>
        <n-button @click="counter++">add</n-button>
        <n-button @click="handleScope('on')">on</n-button>
        <n-button @click="handleScope('off')">off</n-button>
        <n-button @click="handleScope('stop')">stop</n-button>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts">
  import {
    ref,
    computed,
    defineComponent,
    effectScope,
    getCurrentScope,
    onScopeDispose,
    watch,
    watchEffect,
  } from 'vue';

  export default defineComponent({
    name: 'effectScope',
    setup() {
      const counter = ref(1);
      const scope = effectScope(true);
      console.log(scope, 'scope');
      const state = scope.run(() => {
        const doubled = computed(() => counter.value * 2);

        watch(doubled, () => console.log(doubled.value));

        watchEffect(() => console.log('Count: ', doubled.value));
        onScopeDispose(() => {
          console.log('cleaned!');
        });
        return {
          doubled,
        };
      });

      console.log(getCurrentScope(), getCurrentScope() === scope.parent);
      console.log(state, 'state');
      const handleScope = (keyName: 'on' | 'off' | 'stop') => {
        scope[keyName]();
      };

      return {
        ...state,
        counter,
        scope,
        handleScope,
      };
    },
  });
</script>
