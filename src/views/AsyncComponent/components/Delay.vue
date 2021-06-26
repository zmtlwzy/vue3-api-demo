<script lang="tsx">
  import { defineAsyncComponent } from 'vue';
  export default defineAsyncComponent(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            setup() {
              return () => <div>show on mounted after 4000ms</div>;
            },
          } as any);
        }, 4000);
      })
  );
</script>
