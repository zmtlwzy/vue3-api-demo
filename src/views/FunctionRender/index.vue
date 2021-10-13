<script lang="ts">
  import { withModifiers, withDirectives, resolveDirective } from 'vue';
  import { useMessage } from 'naive-ui';

  export default {
    name: 'FunctionRender',
    setup() {
      const MyDirective = resolveDirective('pin')!;
      const message = useMessage();

      const state = reactive({
        count: 0,
      });

      function increment(str: any) {
        state.count++;
        str && message.info(str);
      }

      // return the render function
      return () =>
        h(
          'div',
          {
            class: '*column-layout',
            onClickCapture: () => increment(1),
          },
          [
            'onClickCapture',
            state.count,
            h(
              'div',
              {
                onClickOnce: () => increment(2),
              },
              'onClickOnce'
            ),
            h(
              'div',
              {
                class: '*column-layout',
                onClick: withModifiers(() => increment(2), ['self']),
              },
              [
                'self',
                h(
                  'div',
                  {
                    class: '*column-layout',
                    onClick: () => increment(3),
                  },
                  state.count
                ),
                h(
                  'a',
                  {
                    class: '*column-layout',
                    href: 'https://www.baidu.com',
                    onClick: withModifiers(() => increment(3), ['prevent', 'stop']),
                  },
                  'prevent+stop'
                ),
              ]
            ),
            // [directive, value, arg, modifiers]
            withDirectives(h('div', { class: '*column-layout' }, state.count), [
              [
                MyDirective,
                (state.count % 16) * 50,
                state.count % 16 > 8 ? 'top' : 'right',
                { prevent: true, other: 'otherStr' as any },
              ],
            ]),
          ]
        );
    },
  };
</script>
