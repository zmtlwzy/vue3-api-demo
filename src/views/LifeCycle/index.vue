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
          <n-button type="primary" onClick={this.add}>
            +
          </n-button>
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
          <n-button type="primary" onClick={this.add}>
            +
          </n-button>
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
          <n-button type="primary" onClick={this.add}>
            +
          </n-button>
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
          <n-card>
            <n-space vertical align="center">
              {count.value}
              <n-button type="primary" onClick={add}>
                +
              </n-button>
              <n-space>
                {state.tabs.map((item, index) => (
                  <n-button
                    type="primary"
                    key={index}
                    class={state.currentTab === item ? 'active' : ''}
                    onClick={() => {
                      state.currentTab = item;
                    }}
                  >
                    {item}
                  </n-button>
                ))}
              </n-space>
              <keep-alive>{h(resolveComponent(state.currentTab))}</keep-alive>
              open console
            </n-space>
          </n-card>
        );
      };
    },
  });
</script>

<style></style>
