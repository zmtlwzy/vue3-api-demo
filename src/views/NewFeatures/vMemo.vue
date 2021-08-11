<template>
  <n-button @click="update(['key'])" class="mb-5"> cannot update </n-button>
  <n-button @click="update(['name'])" class="mb-5"> update </n-button>
  <n-list bordered class="w-100">
    <n-list-item v-for="item in listRef" v-memo="getMemoValue(item, getMemoKey)">
      <template #prefix>
        {{ item.key }}
      </template>
      <div class="flex">
        <div class="w-120px">{{ item.name }}</div>
        <div class="px-5">{{ item.age }}</div>
      </div>
      <template #suffix>
        <n-checkbox v-model:checked="item.isCheck" />
      </template>
    </n-list-item>
  </n-list>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { genRandomNumber, genRandomString } from '@/utils/genRandomData';
  import { useMessage } from 'naive-ui';

  type List = {
    key: number;
    name: string;
    age: number;
    isCheck: boolean;
  };

  type ListKey = keyof List;

  const genfakeList = (num: number): List[] => {
    const list = [] as List[];
    for (let i = 0; i < num; i++) {
      list.push({
        key: i,
        name: `John ${genRandomString(genRandomNumber([3, 7]))}`,
        age: genRandomNumber([18, 100]),
        isCheck: false,
      });
    }
    return list;
  };

  export default defineComponent({
    name: 'v-memo',
    setup() {
      const message = useMessage();
      const listRef = ref(genfakeList(100));
      const getMemoKey = ref<ListKey[]>(['key']);
      const update = (arr: ListKey[]) => {
        message.success(`v-memo=[item.${arr}]`);
        getMemoKey.value = arr;
        listRef.value = genfakeList(100);
      };
      const getMemoValue = (item: List, keys: ListKey[]) => {
        return keys.map((key) => item[key]);
      };

      return {
        update,
        listRef,
        getMemoValue,
        getMemoKey,
      };
    },
  });
</script>
