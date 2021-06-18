<template>
  <div class="column-layout">
    {{ count }}
    <button class="btn" @click="add">+</button>
    <div class="container">
      <button
        class="btn"
        v-for="tab in tabs"
        :key="tab"
        :class="{ 'active': currentTab === tab }"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
    open console
  </div>
</template>

<script lang="tsx">
  import {
    onBeforeMount,
    toRefs,
    reactive,
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
  } from 'vue';

  import { common } from '../components/Common';

  const A = defineComponent({
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
        <div class="column-layout">
          <h3>{name}</h3>
          {this.count}
          <button class="btn" onClick={this.add}>
            +
          </button>
        </div>
      );
    },
  });

  const B = defineComponent({
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
        <div class="column-layout">
          <h3>{name}</h3>
          {this.count2}
          <button class="btn" onClick={this.add}>
            +
          </button>
        </div>
      );
    },
  });

  const C = defineComponent({
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
        <div class="column-layout">
          <h3>{name}</h3>
          {this.count3}
          <button class="btn" onClick={this.add}>
            +
          </button>
        </div>
      );
    },
  });

  interface State {
    tabs: string[];
    currentTab: string;
  }

  export default defineComponent({
    name: 'LifeCycle',
    components: {
      A,
      B,
      C,
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');
    },
    setup() {
      const state = reactive<State>({
        tabs: ['A', 'B', 'C'],
        currentTab: 'A',
      });

      const { count, add } = common();

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

      return {
        ...toRefs(state),
        count,
        add
      }

      // return () => (
      //   <div class="column-layout">
      //     {count}
      //     <button class="btn" onClick={add}>
      //       +
      //     </button>
      //     <div class="container">
      //       {state.tabs.map((item, index) => (
      //         <button
      //           class="btn"
      //           key={index}
      //           class={state.currentTab === item ? 'active' : ''}
      //           onClick={() => {
      //             state.currentTab = item;
      //           }}
      //         >
      //           {item}
      //         </button>
      //       ))}

      //       <keep-alive>
      //         <component is='a'>666</component>
      //       </keep-alive>
      //     </div>
      //     open console
      //   </div>
      // );
    },
  });
</script>

<style></style>
