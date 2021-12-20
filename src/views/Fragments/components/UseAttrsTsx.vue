<script lang="tsx">
const name = 'UseAttrsTsx';

export default defineComponent({
  name,
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () => (
      <n-card title="Non-Prop Attributes">
        <n-space vertical align="center">
          <div {...attrs}>Attribute Inheritance on Multiple Root Nodes</div>
        </n-space>
      </n-card>
    );
  }
});
</script>
