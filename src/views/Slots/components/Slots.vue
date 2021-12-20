<script lang="tsx">
import Child from './SlotsChild.vue';
import { theNum } from './interface';

export default defineComponent({
  components: {
    Child
  },
  setup() {
    const slots = {
      // default: () => <div>default slot</div>,
      test: ({ a, b }: theNum) => {
        return <des-table varObj={{ a, b }}>666</des-table>;
      }
    };
    return (): JSX.Element => <Child v-slots={slots} />;
  }
});
</script>
