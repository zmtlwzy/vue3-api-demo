<template>
  <n-card :title="$options.name">
    <des-table :var-obj="{ counter, doubled }" />
    <template #action>
      <n-space>
        <n-button @click="counter++">add</n-button>
        <n-button @click="handleScope('on')">on</n-button>
        <n-button @click="handleScope('off')">off</n-button>
        <n-button @click="handleScope('stop')">stop</n-button>
        <n-button @click="handleScope('all stop')">all stop</n-button>
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
      const scope = effectScope();
      const scope2 = effectScope();

      console.log(scope, 'scope');
      console.log(scope2, 'scope2');
      console.log(scope?.parent === scope2?.parent);

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

      scope2.on();
      scope2.cleanups.push(() => {
        console.log('scope2 cleanups push');
      });
      scope.cleanups.push(() => {
        console.log('scope cleanups push');
      });

      const handleScope = (keyName: 'on' | 'off' | 'stop' | 'all stop') => {
        const curScope = getCurrentScope();
        console.log(curScope);
        if (keyName === 'all stop') {
          return console.log(curScope?.stop());
        }
        scope[keyName]();
        console.log(curScope === scope, curScope === scope2);
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
