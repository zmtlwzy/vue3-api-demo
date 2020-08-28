<template>
  <div>
    <F
      class="parent-class"
      id="parent-id"
      :style="{ padding: '10px', backgroundColor: '#dfc59f' }"
    />
    <Ftsx
      class="parent-tsx-class"
      id="parent-tsx-id"
      :style="{ padding: '15px', backgroundColor: 'red' }"
    />
    <FInherit
      class="parent-inherit-class"
      id="parent-inherit-id"
      :style="{ color:'yellow' }"
    />
  </div>
</template>

<script>
import Ftsx from "@/components/Fragments/UseAttrs";
import FInherit from "@/components/Fragments/InheritAttrs";
import F from "@/components/Fragments/UseAttrs.vue";
export default {
  name: "Fragments",
  components: {
    F,
    Ftsx,
    FInherit
  },
};
</script>

<style></style>
