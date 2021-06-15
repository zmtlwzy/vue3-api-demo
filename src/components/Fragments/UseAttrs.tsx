import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, { attrs }) {
    return () => (
      <>
        <h3>Non-Prop Attributes</h3>
        <div {...attrs}>Attribute Inheritance on Multiple Root Nodes</div>
        <p>other</p>
      </>
    );
  },
});
