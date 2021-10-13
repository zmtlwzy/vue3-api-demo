<script lang="tsx">
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
      return (): JSX.Element => (
        <n-card ref={el}>
          <n-space vertical align="center">
            {slots.default?.() || tsx_default()}
            {slots.test?.({
              a: state.a,
              b: state.b,
            })}
            {el.value instanceof HTMLElement ? `offsetHeight:${el.value?.offsetHeight}px` : ''}
            <n-button type="primary" onClick={handleClick}>
              click
            </n-button>
          </n-space>
        </n-card>
      );
    },
  });
</script>
