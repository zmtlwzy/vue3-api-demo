<script>
import {
  h,
  reactive,
  withModifiers,
  withDirectives,
  resolveDirective,
} from "vue";

export default {
  name: "FunctionRender",
  setup(props, { slots, attrs, emit }) {
    const MyDirective = resolveDirective("pin");

    const state = reactive({
      count: 0,
    });

    function increment(str) {
      state.count++;
      // str && alert(str);
    }

    // return the render function
    return () =>
      h(
        "div",
        {
          class: "column-layout",
          onClick: withModifiers(() => increment(1), ["capture"]),
        },
        [
          state.count,
          h(
            "div",
            {
              class: "column-layout",
              onClick: withModifiers(() => increment(2), ["self"]),
            },
            [
              state.count,
              h(
                "div",
                {
                  class: "column-layout",
                  onClick: () => increment(3),
                },
                state.count
              ),
              h(
                "a",
                {
                  class: "column-layout",
                  href: "https://www.baidu.com",
                  onClick: withModifiers(() => increment(3), [
                    "prevent",
                    "stop",
                  ]),
                },
                state.count
              ),
            ]
          ),
          // [directive, value, arg, modifiers]
          withDirectives(h("div", { class: "column-layout" }, state.count), [
            [
              MyDirective,
              (state.count % 16) * 50,
              state.count % 16 > 8 ? "top" : "right",
              { prevent: true, other: "otherStr" },
            ],
          ]),
        ]
      );
  },
};
</script>
