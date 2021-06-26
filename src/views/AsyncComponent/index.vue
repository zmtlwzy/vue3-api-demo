<script lang="tsx">
  import { defineComponent } from 'vue';
  import { A, B } from './components';
  import { createAsyncComponent } from './components/createAsyncComponents';

  export default defineComponent({
    setup() {
      const AsyncCom = createAsyncComponent(
        () => import('./components/LargeImg.vue')
      );
      return () => (
        <>
          Set the network speed to slow3G in devtools
          <A />
          <B />
          <AsyncCom />
        </>
      );
    },
  });
</script>
