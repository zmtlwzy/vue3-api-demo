<template>
  <table>
    <tr v-for="item in arr">
      <td class="mr-1"> {{ `${item[0]}:` }}</td>
      <td class="pl-2">{{ item[1] }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
  function getVarNameStr(v: Record<string, any>) {
    return Object.entries(v);
  }

  const props = defineProps({
    varObj: {
      type: Object,
      default: {},
    },
  });

  const arr = computed(() => {
    return getVarNameStr(props.varObj);
  });
</script>
