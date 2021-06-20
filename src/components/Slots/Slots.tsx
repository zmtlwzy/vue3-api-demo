import { defineComponent } from 'vue';
import Child from './SlotsChild';
import { theNum } from './interface';
import DesTable from '@/components/VarDescriptions';

export default defineComponent({
  components: {
    Child,
    DesTable,
  },
  setup() {
    const slots = {
      default: () => <div>default slot</div>,
      test: ({ a, b }: theNum) => {
        return <DesTable varObj={{ a, b }}></DesTable>;
      },
    };
    return () => <Child v-slots={slots} />;
  },
});
