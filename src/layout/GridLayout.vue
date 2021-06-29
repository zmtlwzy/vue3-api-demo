<script lang="tsx">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GridLayout',
    props: ['cols'],
    setup(props, { slots }) {
      const _cols = Number(props.cols);
      const cols = Object.prototype.toString.call(_cols) === `[object Number]` ? _cols : 2;
      return (): JSX.Element => (
        <n-grid cols={cols} x-gap="16" y-gap="24">
          {slots.default?.()}
        </n-grid>
      );
    },
  });
</script>
