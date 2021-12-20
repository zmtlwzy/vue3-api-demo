<template>
  <table>
    <tr v-for="(item, i) in arr" :key="i">
      <td class="mr-1">{{ `${item[0]}:` }}</td>
      <td class="pl-2">{{ item[1] }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
function getVarNameStr(v: Record<string, any>) {
  return Object.entries(v);
}

const props = defineProps<{
  varObj: Record<string, any>;
}>();

const arr = computed(() => {
  return getVarNameStr(props.varObj);
});
</script>
