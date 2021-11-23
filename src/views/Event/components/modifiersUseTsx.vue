<script lang="tsx">
  import { withModifiers, withDirectives, CSSProperties, PropType } from 'vue';

  import { useMessage } from 'naive-ui';

  export const vModelCom1 = defineComponent({
    name: 'VModelCom1',
    props: ['customName', 'customNameModifiers', 'label'],
    setup(props, { emit }) {
      const handleChange = (num: number | string) => {
        emit('update:customName', Number(num));
      };
      onMounted(() => {
        console.log(props.customNameModifiers);
      });
      return (): JSX.Element => (
        <>
          <div class="column-layout">
            <label>
              <span>{props.label}</span>
              <input
                type="text"
                value={props.customName}
                onInput={(e: ChangeEvent) => handleChange(e.target.value)}
              />
            </label>
          </div>
        </>
      );
    },
  });

  export const vModelCom2 = defineComponent({
    name: 'VModelCom2',
    props: {
      modelValue: {
        type: [String, Number] as PropType<string | number>,
      }, // v-model不带参数必须使用modelValue
    },
    setup(props, { emit }) {
      const handleChange = (num: string | number) => {
        emit('update:modelValue', Number(num));
      };
      return (): JSX.Element => (
        <div>
          <input
            type="number"
            value={props.modelValue}
            onInput={(e: ChangeEvent) => handleChange(e.target.value)}
          />
        </div>
      );
    },
  });

  const compName = 'modifiersUseTsx';
  export default defineComponent({
    name: compName,
    setup(_, { attrs }) {
      const state = reactive({
        a: 600,
      });

      const message = useMessage();
      const direction = computed(() => (state.a > 600 ? 'left' : 'right'));
      const style: CSSProperties = {
        padding: '20px',
        margin: '1.5rem 0',
        border: '1px dashed',
        display: 'flex',
        flexDirection: 'column',
      };
      const alertEvent = (text: string): void => {
        message.success(text);
      };

      return () => (
        <n-card title={compName}>
          <div {...attrs}>
            <n-space vertical align="center">
              <span>{state.a}</span>
              <span>{typeof state.a}</span>
              <n-button
                type="primary"
                onClick={() => {
                  state.a++;
                }}
              >
                ++
              </n-button>
            </n-space>
            <div style={style} onClick={withModifiers(() => alertEvent('container'), ['capture'])}>
              container-capture
              <div style={style} onClick={() => alertEvent('child-0')}>
                child-0
              </div>
              <div style={style} onClick={withModifiers(() => alertEvent('child-1'), ['stop'])}>
                child-stop
                <a
                  href="https://www.baidu.com"
                  onClick={withModifiers(() => alertEvent('stopJump'), ['stop', 'prevent'])}
                >
                  a link to baidu
                </a>
              </div>
              <div style={style} onClick={withModifiers(() => alertEvent('child-2'), ['self'])}>
                child-self
                <div style={style} onClick={() => alertEvent('child-child')}>
                  child-child
                </div>
              </div>
            </div>
          </div>
          <vModelCom1 v-model={[state.a, 'customName', ['capitalize', 'other']]} label="label : " />
          <vModelCom2 v-model={state.a} />
          <n-input-number
            v-pin={[state.a, direction.value, ['c', 'd']]}
            v-model={[state.a, 'value']}
            onFocus={console.log('focus')}
          />
        </n-card>
      );
    },
  });
</script>
