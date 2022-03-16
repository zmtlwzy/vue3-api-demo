<script lang="ts">
import { mergeProps } from 'vue'
import { NCard, NSpace } from 'naive-ui'
const name = 'MergeProps'

export default defineComponent({
  name,
  inheritAttrs: false,
  setup(props) {
    return {
      obj: {
        'data-merge': 'img',
        'class': ['bg-gray-400', 'p-2'],
        'style': 'color:rgb(80,70,255)',
      },
    }
  },
  render() {
    return h(
      NCard,
      { title: name },
      {
        default: () =>
          h(
            NSpace,
            { vertical: true, align: 'center' },
            { default: () => h('div', mergeProps(this.$attrs, this.obj), this.$slots) },
          ),
      },
    )
  },
})
</script>
