<template>
  <div>
    <div class="border" @click.capture="handleClick('1')">
      1
      <div class="border" @click="handleClick('2')">
        2
        <div class="border" @click="handleClick('3')"> click 3 first alert is 1 </div>
      </div>
    </div>
    {{ msg }}
    {{ typeof msg }}
    <!-- <vModelCom1 v-model:customName="msg" /> -->
    <vModelCom2 v-model:value="msg" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { vModelCom1, vModelCom2 } from './TsxTest.vue';
  export default defineComponent({
    name: 'CaptureTest',
    data() {
      return {
        msg: '555',
      };
    },
    components: {
      vModelCom1,
      vModelCom2,
    },
    methods: {
      handleClick(text: Object) {
        alert(text.toString());
      },
    },
  });
</script>

<style scoped>
  .border {
    padding: 20px;
    border: 1px dashed grey;
  }
</style>
