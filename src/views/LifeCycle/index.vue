<template>
  <n-card :title="$options.name">
    <div class="grid-layout-2 mt-5">
      <n-card title="useVshow">
        <n-tabs type="line">
          <n-tab-pane
            v-for="item in componentArr"
            :name="item"
            :tab="item"
            display-directive="show"
          >
            <component :is="item" />
          </n-tab-pane>
        </n-tabs>
      </n-card>
      <n-card title="useKeepAlive">
        <n-space vertical>
          <n-space>
            <n-button-group>
              <n-button
                v-for="(item, index) in componentArr"
                :key="index"
                :ghost="currentTab === item ? false : true"
                @click="handleClick(item)"
                type="primary"
              >
                {{ item }}
              </n-button>
            </n-button-group>
          </n-space>
          <keep-alive>
            <component :is="currentTab" />
          </keep-alive>
        </n-space>
      </n-card>
    </div>
  </n-card>
</template>

<script lang="tsx">
  import {
    // h,
    onBeforeMount,
    ref,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onActivated,
    onDeactivated,
    onUnmounted,
    onRenderTracked,
    onRenderTriggered,
    onErrorCaptured,
    defineComponent,
    toRefs,
    ComponentPublicInstance,
    // resolveComponent,
    // KeepAlive,
  } from 'vue';

  import { common } from '@/composables/Common';

  const lifeCycleItemA = defineComponent({
    name: 'lifeCycleItemA',
    setup() {
      const { count, add } = common();

      onActivated(() => {
        console.log('onActivated in LifeCycleA');
        // make error
        throw new Error('some error');
      });
      onDeactivated(() => {
        console.log('onDeactivated in LifeCycleA');
      });
      return {
        count,
        add,
      };
    },
    render({ $options: { name } }) {
      return (
        <n-space vertical>
          {this.count}
          <n-button type="primary" onClick={this.add}>
            +
          </n-button>
        </n-space>
      );
    },
  });

  const lifeCycleItemB = defineComponent({
    name: 'lifeCycleItemB',
    setup() {
      const { count2, add } = common();

      onActivated(() => {
        console.log('onActivated in LifeCycleA');
        // make error
        throw new Error('some error');
      });
      onDeactivated(() => {
        console.log('onDeactivated in LifeCycleA');
      });
      return {
        count2,
        add,
      };
    },
    render({ $options: { name } }) {
      return (
        <n-space vertical>
          {this.count2}
          <n-button type="primary" onClick={this.add}>
            +
          </n-button>
        </n-space>
      );
    },
  });

  const lifeCycleItemC = defineComponent({
    name: 'lifeCycleItemC',
    setup() {
      const { count3, add } = common();

      onActivated(() => {
        console.log('onActivated in LifeCycleA');
        // make error
        throw new Error('some error');
      });
      onDeactivated(() => {
        console.log('onDeactivated in LifeCycleA');
      });
      return {
        count3,
        add,
      };
    },
    render({ $options: { name } }) {
      return (
        <n-space vertical>
          {this.count3}
          <n-button type="primary" onClick={this.add}>
            +
          </n-button>
        </n-space>
      );
    },
  });

  const componentArr = [lifeCycleItemA.name, lifeCycleItemB.name, lifeCycleItemC.name];
  export default defineComponent({
    name: 'LifeCycle',
    components: {
      lifeCycleItemA,
      lifeCycleItemB,
      lifeCycleItemC,
      // KeepAlive,
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');
    },
    setup() {
      // const state = reactive({
      //   tabs: [A, B, C],
      //   currentTab: A,
      // });

      const currentTab = ref<string>(lifeCycleItemA.name);

      // const { count, add } = common();

      // LifeCycle
      onBeforeMount(() => {
        console.log('onBeforeMount');
      });
      onMounted(() => {
        console.log('onMounted');
      });
      onBeforeUpdate(() => {
        console.log('onBeforeUpdate');
      });
      onUpdated(() => {
        console.log('onUpdated');
      });
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount');
      });
      onErrorCaptured((err, vm, info) => {
        console.log('onErrorCaptured', err, vm, info);
        return false;
      });
      onUnmounted(() => {
        console.log('onUnmounted');
      });
      onRenderTracked(({ key, target, type }) => {
        console.log('onRenderTracked', key, target, type);
      });
      onRenderTriggered(({ key, target, type }) => {
        console.log('onRenderTriggered', key, target, type);
      });

      const handleClick = (name: any) => {
        currentTab.value = name;
      };

      return {
        // count,
        // add,
        componentArr,
        handleClick,
        currentTab,
      };

      // const nBtnSlot = {
      //   icon: () => <span>+</span>,
      //   default: () => count.value,
      // };

      // return () => {
      //   return (
      //     <n-card title={componentName}>
      //       <n-space align="center">
      //         <n-button type="primary" onClick={add} v-slots={nBtnSlot}></n-button>
      //         open console
      //       </n-space>
      //       <grid-layout class="mt-5">
      //         <n-space vertical align="center">
      //           <n-space>
      //             {state.tabs.map((item, index) => (
      //               <n-button
      //                 type={state.currentTab === item ? 'primary' : ''}
      //                 key={index}
      //                 onClick={() => {
      //                   state.currentTab = item;
      //                 }}
      //               >
      //                 {item}
      //               </n-button>
      //             ))}
      //           </n-space>
      //           <keep-alive>{h(resolveComponent(state.currentTab))}</keep-alive>
      //         </n-space>
      //       </grid-layout>
      //     </n-card>
      //   );
      // };
    },
  });
</script>

<style></style>
