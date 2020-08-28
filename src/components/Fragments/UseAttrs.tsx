import { defineComponent } from "vue";

export default defineComponent({
  setup(props, { attrs }) {
    return () => (
      <>
        <h3>Non-Prop Attributes</h3>
        <div {...attrs}>main</div>
        <p>other</p>
      </>
    );
  },
});
