import { h, defineComponent, reactive, withModifiers, onMounted } from "vue";

export const vModelCom1 = {
  name: "vModelCom1",
  props: ["customName", "customNameModifiers", "label"],
  setup(props, { emit }) {
    const handleChange = (num) => {
      emit("update:customName", Number(num));
    };
    onMounted(() => {
      console.log(props.customNameModifiers);
    });
    return () => (
      <>
        <div class="column-layout">
          <label>
            <span>{props.label}</span>
            <input
              type="text"
              value={props.customName}
              onInput={(e) => handleChange(e?.target.value)}
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
  setup(props, { emit }) {
    const handleChange = (num) => {
      emit("update:modelValue", Number(num));
    };
    return () => (
      <>
        <div class="column-layout">
          <input
            type="number"
            value={props.modelValue}
            onInput={(e) => handleChange(e?.target.value)}
          />
        </div>
      </>
    );
  },
};

const customDirective = {
  mounted(el, binding) {
    console.log(el);
    console.log(binding);
  },
};

export default defineComponent({
  name: "JsxTest",
  directives: { custom: customDirective },
  setup(props, { attrs }) {
    const state = reactive({
      a: 600,
      flag: false,
    });
    const style = {
      padding: "20px",
      border: "1px dashed",
      display: "flex",
      flexDirection: "column",
    };
    const alertEvent = (text) => {
      alert(text);
    };

    return () => (
      <>
        <div class="column-layout" {...attrs}>
          <span>{state.a}</span>
          <span>{typeof state.a}</span>
          <button class="btn"
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
            onClickCapture={() => alertEvent("container")}
          >
            container-capture
            <div style={style} onClickOnce={() => alertEvent("child-0")}>
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
        <vModelCom2
          //  v-custom={[state.a,'right',['a','b']]}
          v-model={state.a}
        />
      </>
    );
  },
});
