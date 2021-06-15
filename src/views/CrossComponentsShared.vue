<template>
  <div class="column-layout">
    <span>shared width provide and inject:{{ count }}</span>
    <span>shared width reactive:{{ num }}--{{ num2 }}--{{ num3 }}</span>
    <span>shared width vuex:{{ x }}--{{ y }}</span>
    <button class="btn" @click="add">injectAdd</button>
    <button class="btn" @click="reactiveAdd">reactiveAdd</button>
    <button class="btn" @click="vuexAdd(count)">vuexAdd</button>
    <br />
    <A />
    <B />
    <C />
  </div>
</template>

<script>
  import { ref, provide, toRefs, computed } from 'vue';
  import { useAppStore } from '@/store/modules/app';

  import { A, B, C } from '@/components/CrossComponents';
  import { common, sharedState } from '@/components/Common';
  import { CountSymbol_2 } from '@/components/CrossComponents/sharedKey';

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
