<template>
  <div class="grid-layout-2">
    <div class="col-span-2">
      <n-card>
        <div class="flex justify-evenly w-full">
          <des-table :var-obj="{ count, count2, count3 }">
            provide and inject
          </des-table>
          <des-table :var-obj="{ num, num2, num3 }">
            reactive
          </des-table>
          <des-table :var-obj="{ x, y }">
            vuex(pinia)
          </des-table>
          <des-table :var-obj="{ vueuseCount }">
            vueuse
          </des-table>
        </div>
        <template #footer>
          <p>total:{{ count + count2 + count3 + num + num2 + num3 + x + y + vueuseCount }}</p>
        </template>
        <template #action>
          <n-button type="primary" @click="add">
            add
          </n-button>
        </template>
      </n-card>
    </div>
    <UseVuex />
    <PAndI />
    <UseReactive />
    <UseVueUse />
  </div>
</template>

<script lang="ts">

import { PAndI, UseReactive, UseVueUse, UseVuex } from './components'
import { CountSymbol_2 } from './components/sharedKey'
import { useSharedCounter } from './components/UseVueUse.vue'
import { common, sharedState } from '~/composables'
import { useDemoStore } from '~/stores/demo'

export default defineComponent({
  name: 'CrossComponentsShared',
  components: {
    UseVuex,
    PAndI,
    UseReactive,
    UseVueUse,
  },
  setup() {
    const { add, ...countArr } = common()
    const demoStore = useDemoStore()
    const { count: vueuseCount } = useSharedCounter()

    provide(CountSymbol_2, countArr.count)

    const reactiveAdd = () => {
      sharedState.num += 2
    }

    return {
      ...toRefs(sharedState),
      ...countArr,
      add,
      reactiveAdd,
      x: computed(() => demoStore.getX),
      y: computed(() => demoStore.getY),
      vuexAdd: (...val: [number, number]) => {
        demoStore.setValue(val)
      },
      vueuseCount,
    }
  },
})
</script>
