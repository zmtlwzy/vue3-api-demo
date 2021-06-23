import { defineComponent } from 'vue';
import { A,B } from '../components/AsyncComponents';
import { createAsyncComponent } from '@/components/AsyncComponents/createAsyncComponents';

export default defineComponent({
  setup() {
    const AsyncCom = createAsyncComponent(() => import('@/components/AsyncComponents/LargeImg.vue'));
    return () => (
      <>
        <A />
        <B />
        <AsyncCom />
      </>
    );
  },
});
