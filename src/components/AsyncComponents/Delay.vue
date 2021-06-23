<script lang="tsx">
  import { defineAsyncComponent } from 'vue';
  export default defineAsyncComponent(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            setup() {
              return () => <div>Set the network speed to slow3G in devtools</div>;
            },
          } as any);
        }, 4000);
      })
  );
</script>
