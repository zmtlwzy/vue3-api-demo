<script lang="tsx">
  import {
    h,
    onBeforeMount,
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
    resolveComponent,
    KeepAlive,
  } from 'vue';

  import { common } from '@/hooks/Common';

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

  export default defineComponent({
    name: 'LifeCycle',
    components: {
      A,
      B,
      C,
      KeepAlive,
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

      return () => {
        return (
          <div class="column-layout">
            {count.value}
            <button class="btn" onClick={add}>
              +
            </button>
            <div class="container">
              {state.tabs.map((item, index) => (
                <button
                  class="btn"
                  key={index}
                  class={state.currentTab === item ? 'active' : ''}
                  onClick={() => {
                    state.currentTab = item;
                  }}
                >
                  {item}
                </button>
              ))}
              <keep-alive>{h(resolveComponent(state.currentTab))}</keep-alive>
            </div>
            open console
          </div>
        );
      };
    },
  });
</script>

<style></style>
