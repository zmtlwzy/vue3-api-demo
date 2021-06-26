import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  setup(_, { attrs }) {
    onMounted(() => {
      console.log('attrs', attrs);
    });
    return () => <div>Can not automatically inherit attributes</div>;
  },
});
