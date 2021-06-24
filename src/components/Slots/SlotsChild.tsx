import { reactive, defineComponent, ref } from 'vue';
import { NButton, NCard, NSpace } from 'naive-ui';
import { theNum } from './interface';

export default defineComponent({
  setup(_, { slots }) {
    const state = reactive<theNum>({
      a: 1,
      b: 1,
    });

    const el = ref<HTMLElement>();
    const tsx_default = () => <span style={{ margin: '0 5px' }}>default</span>;
    const handleClick = () => {
      state.a *= 2;
      state.b += 2;
    };
    return () => (
      <NCard ref={el}>
        <NSpace vertical align="center">
          <div>state.a:-{state.a}</div>
          {slots.default?.() || tsx_default()}
          {slots.test?.({
            a: state.a,
            b: state.b,
          })}
          {el.value instanceof HTMLElement ? `offsetHeight:${el.value?.offsetHeight}px` : ''}
          <NButton type="primary" onClick={handleClick}>
            click
          </NButton>
        </NSpace>
      </NCard>
    );
  },
});
