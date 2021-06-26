<template>
  <table>
    <tr v-for="item in arr">
      <td
        ><span class="mr-1">{{ item[0] }}</span
        >:</td
      >
      <td
        ><span class="pl-2">{{ item[1] }}</span></td
      >
    </tr>
  </table>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  function getVarNameStr(v: Record<string, any>) {
    return Object.entries(v);
  }

  export default defineComponent({
    name: 'des-table',
    props: {
      varObj: {
        type: Object,
        default: {},
      },
    },
    setup(props) {
      const arr = computed(() => {
        return getVarNameStr(props.varObj);
      });
      return {
        arr,
      };
    },
  });
</script>
