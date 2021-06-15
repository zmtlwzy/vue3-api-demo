<template>
  <div class="column-layout">
    {{ count }}
    <button class="btn" @click="add">+</button>
    <div class="container">
      <button
        class="btn"
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <keep-alive>
        <component :is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </div>
    open console
  </div>
</template>

<script>
  import {
    onBeforeMount,
    reactive,
    ref,
    toRefs,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onActivated,
    onDeactivated,
    onUnmounted,
    onRenderTracked,
    onRenderTriggered,
    computed,
    watchEffect,
    onErrorCaptured,
  } from 'vue';

  import { common } from '../components/Common';

  const A = {
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
          <button class="btn" onclick={this.add}>
            +
          </button>
        </div>
      );
    },
  };

  const B = {
    name: 'lifeCycleItemB',
    setup() {
      const { count2, add } = common();
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
          <button class="btn" onclick={this.add}>
            +
          </button>
        </div>
      );
    },
  };

  const C = {
    name: 'lifeCycleItemC',
    setup() {
      const { count3, add } = common();
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
          <button class="btn" onclick={this.add}>
            +
          </button>
        </div>
      );
    },
  };

  export default {
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
      const state = reactive({
        tabs: ['A', 'B', 'C'],
        currentTab: 'A',
        currentTabComponent: computed(() => state.currentTab.toLowerCase()),
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
        add,
      };
    },
  };
</script>

<style>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .demo-tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
