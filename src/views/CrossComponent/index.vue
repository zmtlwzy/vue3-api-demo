<template>
    <div class="column-layout">
      <span>shared width provide and inject:{{ count }}</span>
      <span>shared width reactive:{{ num }}--{{ num2 }}--{{ num3 }}</span>
      <span>shared width vuex:{{ x }}--{{ y }}</span>
     <n-button type="primary" @click="add">injectAdd</n-button>
      <br />
      <A />
      <B />
      <C />
    </div>
  </template>
  
  <script>
    import { ref, provide, toRefs, computed } from 'vue';
    import { useAppStore } from '@/store/modules/app';
  
    import { A, B, C } from './components';
    import { common, sharedState } from '@/hooks/Common';
    import { CountSymbol_2 } from './components/sharedKey';
  
    export default {
      name: 'CrossComponentsShared',
      components: {
        A,
        B,
        C,
      },
      setup() {
        const { count, add } = common();
        const appStore = useAppStore();
  
        provide(CountSymbol_2, count);
  
        const reactiveAdd = () => {
          sharedState.num += 2;
        };
  
        return {
          ...toRefs(sharedState),
          count,
          add,
          reactiveAdd,
          x: computed(() => appStore.getX),
          y: computed(() => appStore.getY),
          vuexAdd: (...val) => {
            appStore.setValue(val);
          },
        };
      },
    };
  </script>
  
  <style></style>
  