<template>
  <div class="grid-layout-2">
    <n-card title="UseAttrs">
      <n-space vertical align="center">
        <UseAttrs
          class="parent-class"
          id="parent-id"
          :style="{ padding: '10px', backgroundColor: '#dfc59f' }"
        />
      </n-space>
    </n-card>
    <UseAttrsTsx
      class="parent-tsx-class"
      id="parent-tsx-id"
      :style="{ padding: '15px', backgroundColor: 'red' }"
    />
    <FInherit class="parent-inherit-class" id="parent-inherit-id" :style="{ color: 'yellow' }" />
    <MergeProps class="hover:bg-red-400">MergeProps</MergeProps>
  </div>
</template>

<script lang="ts">
  import UseAttrsTsx from './components/UseAttrsTsx.vue';
  import FInherit from './components/InheritAttrs.vue';
  import UseAttrs from './components/UseAttrs.vue';
  import MergeProps from './components/MergeProps.vue';

  export default defineComponent({
    name: 'Fragments',
    components: {
      UseAttrs,
      UseAttrsTsx,
      FInherit,
      MergeProps,
    },
  });
</script>
