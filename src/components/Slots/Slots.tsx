import { defineComponent } from 'vue';
import Child from './SlotsChild';
import { theNum } from './interface';

export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const slots = {
      default: () => <div>default slot</div>,
      test: ({ a, b }: theNum) => {
        return (
          <span>
            father space -- child-state:{a},{b}
          </span>
        );
      },
    };
    return () => <Child v-slots={slots} />;
  },
});
