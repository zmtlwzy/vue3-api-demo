import {
  defineComponent,
  reactive,
  withModifiers,
  withDirectives,
  CSSProperties,
  onMounted,
} from "vue";

export const vModelCom1 = {
  name: "vModelCom1",
  props: ["customName", "customNameModifiers", "label"],
  setup(props: any, { emit }: any) {
    const handleChange = (num: number | string) => {
      emit("update:customName", Number(num));
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
              onInput={(e: any) => handleChange(e?.target.value)}
            />
          </label>
        </div>
      </>
    );
  },
};

export const vModelCom2 = {
  name: "vModelCom2",
  props: {
    modelValue: [Number, String], // v-model不带参数必须使用modelValue
  },
  setup(props: any, { emit }: any) {
    const handleChange = (num: string | number) => {
      emit("update:modelValue", Number(num));
    };
    return (): JSX.Element => (
      <>
        <div class="column-layout">
          <input
            type="number"
            value={props.modelValue}
            onInput={(e: any) => handleChange(e?.target.value)}
          />
        </div>
      </>
    );
  },
};

export default defineComponent({
  name: "TsxTest",
  setup() {
    const state = reactive({
      a: 600,
      flag: false,
    });
    const style: CSSProperties = {
      padding: "20px",
      border: "1px dashed",
      display: "flex",
      flexDirection: "column",
    };
    const alertEvent = (text: string): void => {
      alert(text);
    };

    return () => (
      <>
        <div class="column-layout">
          <span>{state.a}</span>
          <span>{typeof state.a}</span>
          <button
            onClick={() => {
              state.a++;
              state.flag || (state.flag = true);
            }}
          >
            ++
          </button>
          <div
            v-show={state.flag}
            style={style}
            onClick={withModifiers(() => alertEvent("container"), ["capture"])}
          >
            container-capture
            <div style={style} onClick={() => alertEvent("child-0")}>
              child-0
            </div>
            <div
              style={style}
              onClick={withModifiers(() => alertEvent("child-1"), ["stop"])}
            >
              child-stop
              <a
                href="https://www.baidu.com"
                onClick={withModifiers(() => alertEvent("stopJump"), [
                  "stop",
                  "prevent",
                ])}
              >
                a link to baidu
              </a>
            </div>
            <div
              style={style}
              onClick={withModifiers(() => alertEvent("child-2"), ["self"])}
            >
              child-self
              <div style={style} onClick={() => alertEvent("child-child")}>
                child-child
              </div>
            </div>
          </div>
        </div>
        <vModelCom1
          v-model={[state.a, "customName", ["capitalize", "other"]]}
          label="label : "
        />
        <vModelCom2 v-pin={500} v-model={state.a} />
      </>
    );
  },
});
