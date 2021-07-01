<script lang="tsx">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GridLayout',
    props: {
      cols: {
        type: Number,
        default: 2,
      },
    },
    setup(props, { slots }) {
      return (): JSX.Element => (
        <n-grid cols={props.cols} x-gap="16" y-gap="24">
          {slots.default?.()}
        </n-grid>
      );
    },
  });
</script>
