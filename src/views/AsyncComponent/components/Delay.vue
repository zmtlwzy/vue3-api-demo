<script lang="tsx">
export default defineAsyncComponent(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(
          defineComponent({
            setup() {
              return () => <div>show on mounted after 4000ms</div>;
            }
          }) as any
        );
      }, 4000);
    })
);
</script>
