<script lang="tsx">
  import { defineComponent } from 'vue';
  import Child from './SlotsChild.vue';
  import { theNum } from './interface';

  import DesTable from 'comps/DesTable';

  export default defineComponent({
    components: {
      Child,
      DesTable,
    },
    setup() {
      const slots = {
        // default: () => <div>default slot</div>,
        test: ({ a, b }: theNum) => {
          return <DesTable varObj={{ a, b }}>666</DesTable>;
        },
      };
      return (): JSX.Element => <Child v-slots={slots} />;
    },
  });
</script>
