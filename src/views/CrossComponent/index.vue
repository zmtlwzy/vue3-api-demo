<template>
  <GridLayout :cols="3">
    <n-grid-item :span="3">
      <n-card>
        <div class="flex justify-evenly w-full">
          <des-table :var-obj="{ count, count2, count3 }"
            >shared width provide and inject</des-table
          >
          <des-table :var-obj="{ num, num2, num3 }">shared width reactive</des-table>
          <des-table :var-obj="{ x, y }">shared width vuex</des-table>
        </div>
        <template #footer>
          <p>total:{{ count + count2 + count3 + num + num2 + num3 + x + y }}</p>
        </template>
        <template #action>
          <n-button type="primary" @click="add">add</n-button>
        </template>
      </n-card>
    </n-grid-item>
    <UseVuex />
    <PAndI />
    <UseReactive />
  </GridLayout>
</template>

<script>
  import { ref, provide, toRefs, computed } from 'vue';
  import { useDemoStore } from '@/store/modules/demo';

  import { UseVuex, PAndI, UseReactive } from './components';
  import { common, sharedState } from '@/hooks/Common';
  import { CountSymbol_2 } from './components/sharedKey';

  export default {
    name: 'CrossComponentsShared',
    components: {
      UseVuex,
      PAndI,
      UseReactive,
    },
    setup() {
      const { add, ...countArr } = common();
      const demoStore = useDemoStore();

      provide(CountSymbol_2, countArr.count);

      const reactiveAdd = () => {
        sharedState.num += 2;
      };

      return {
        ...toRefs(sharedState),
        ...countArr,
        add,
        reactiveAdd,
        x: computed(() => demoStore.getX),
        y: computed(() => demoStore.getY),
        vuexAdd: (...val) => {
          demoStore.setValue(val);
        },
      };
    },
  };
</script>

<style></style>
