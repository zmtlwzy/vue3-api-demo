<template>
  <n-layout has-sider w:h="full">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="0"
      :width="240"
      show-trigger
      :inverted="inverted"
    >
      <n-menu
        :inverted="inverted"
        :collapsed-width="0"
        :collapsed-icon-size="0"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <span>内容</span>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
  import { h, defineComponent, ref } from 'vue';
  import { NIcon, NSpace, NSwitch, NLayout, NLayoutSider, NMenu,MenuOption } from 'naive-ui';
  //   import {
  //     BookOutline as BookIcon,
  //     PersonOutline as PersonIcon,
  //     WineOutline as WineIcon,
  //   } from '@vicons/ionicons5';
  import { RouterLink } from 'vue-router';
  import { List as routerList } from '@/router/routerList';

  function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
  }

  function rederRouter(obj) {
    return () =>
      h(
        RouterLink,
        {
          to: obj.path,
        },
        [obj.component]
      );
  }


  const list = routerList.filter((item) => {
    return !Object.keys(item).includes('redirect');
  });
  const menuOptions = list.map((item) => {
    return {
      label: rederRouter(item),
      key: item.component,
    };
  }) as MenuOption[];

  export default defineComponent({
    components: { NSpace, NSwitch, NLayout, NLayoutSider, NMenu },
    setup() {
      const inverted = ref<boolean>(false);
      return {
        inverted,
        menuOptions,
      };
    },
  });
</script>
