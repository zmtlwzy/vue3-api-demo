<script lang="tsx">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GridLayout',
    setup(_, { slots }) {
      return (): JSX.Element => (
        <n-grid cols={2} x-gap="16" y-gap="24">
          {slots.default?.()}
        </n-grid>
      );
    },
  });
</script>
