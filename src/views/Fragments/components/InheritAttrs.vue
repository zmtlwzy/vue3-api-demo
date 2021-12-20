<script lang="tsx">
const name = 'inheritAttrs';
export default defineComponent({
  name,
  inheritAttrs: false,
  setup(_, { attrs }) {
    onMounted(() => {
      console.log('attrs', attrs);
    });
    return () => (
      <n-card title={name}>
        <n-space vertical align="center">
          <span>Can not automatically inherit attributes</span>
        </n-space>
      </n-card>
    );
  }
});
</script>
