<template>
  <div class="flex flex-col justify-center items-center">
    <n-space class="!mb-5" align="center">
      <n-radio :checked="isUpdate" @change="setVMemoValue(['key'])">Cannot update</n-radio>
      <n-radio :checked="!isUpdate" @change="setVMemoValue(['key', 'isCheck'])">
        Can update
      </n-radio>
      <n-button @click="updateListData"> updateListData </n-button>
    </n-space>
    <n-list bordered class="w-99 mb-15">
      <n-list-item v-for="item in listRef" :key="item.key" v-memo="getMemoValue(item, getMemoKey)">
        <template #prefix>
          {{ item.key }}
        </template>
        <div class="flex">
          <div class="w-29">{{ item.name }}</div>
          <div class="px-5">{{ item.age }}</div>
        </div>
        <template #suffix>
          <n-checkbox v-model:checked="item.isCheck" />
        </template>
      </n-list-item>
    </n-list>
  </div>
</template>

<script lang="ts">
  import { genRandomNumber, genRandomString } from '@/utils/genRandomData';
  import { useMessage } from 'naive-ui';

  import { isEqual } from 'lodash-es';

  type List = {
    key: number;
    name: string;
    age: number;
    isCheck: boolean;
  };

  type ListKey = keyof List;

  const genfakeList = (num = 25): List[] => {
    const list = [] as List[];
    for (let i = 0; i < num; i++) {
      list.push({
        key: i,
        name: `John ${genRandomString(genRandomNumber([3, 7]))}`,
        age: genRandomNumber([18, 100]),
        isCheck: Math.round(Math.random()) ? false : true,
      });
    }
    return list;
  };

  export default defineComponent({
    name: 'VMemo',
    setup() {
      const message = useMessage();
      const listRef = ref(genfakeList());
      const getMemoKey = ref<ListKey[]>(['key']);

      const isUpdate = computed(() => isEqual(unref(getMemoKey), ['key']));

      const setVMemoValue = (arr: ListKey[]) => {
        console.log(arr);
        message.success(`v-memo=[${arr.map((key) => `item.${key}`)}]`);
        getMemoKey.value = arr;
      };

      const updateListData = () => {
        listRef.value = genfakeList();
      };
      const getMemoValue = (item: List, keys: ListKey[]) => {
        return keys.map((key) => item[key]);
      };

      return {
        setVMemoValue,
        listRef,
        isUpdate,
        getMemoValue,
        getMemoKey,
        updateListData,
      };
    },
  });
</script>
