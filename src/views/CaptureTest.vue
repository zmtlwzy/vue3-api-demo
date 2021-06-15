<template>
  <div>
    <div class="border" @click.capture="handleClick('1')">
      1
      <div class="border" @click="handleClick('2')">
        2
        <div class="border" @click="handleClick('3')"> 3 </div>
      </div>
    </div>
    {{ msg }}
    {{ typeof msg }}
    <input v-model.number="msg" />
    <!-- <vModelCom1 v-model:customName="msg" /> -->
    <vModelCom2 v-model="msg" />
    <input type="range" min="0" max="500" v-model="pinPadding" />
    <p v-pin:[direction].a.b="pinPadding"> Stick me 200px from the {{ direction }} of the page </p>
  </div>
</template>

<script>
  import { vModelCom1, vModelCom2 } from './TsxTest';
  export default {
    name: 'CaptureTest',
    data() {
      return {
        msg: '555',
        direction: 'right',
        pinPadding: 350,
      };
    },
    components: {
      vModelCom1,
      vModelCom2,
    },
    methods: {
      handleClick(text) {
        alert(text);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border {
    padding: 20px;
    border: 1px dashed grey;
  }
</style>
