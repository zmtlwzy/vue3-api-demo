import { reactive, defineComponent, watchEffect } from 'vue';
import { all } from './interface';

export default defineComponent({
  setup(props, { slots }) {
    const state: all = reactive({
      a: 1,
      b: 1,
      el: null,
    });

    const tsx_default = () => <span style={{ margin: '0 5px' }}>default</span>;
    const handleClick = () => {
      state.a *= 2;
      state.b += 2;
    };
    return () => (
      <>
        <div
          class="content"
          ref={(el) => {
            state.el = el;
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          state.a:-{state.a}
          {slots.default?.() || tsx_default()}
          {slots.test?.({
            a: state.a,
            b: state.b,
          })}
          {state.el instanceof HTMLElement ? `offsetHeight:${state.el?.offsetHeight}px` : ''}
          <button class="btn" onClick={handleClick}>
            click
          </button>
        </div>
      </>
    );
  },
});
