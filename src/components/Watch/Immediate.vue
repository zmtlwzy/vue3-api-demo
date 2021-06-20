<template>
  <div class="column-layout">
    <h2>Immediate</h2>
    <span>{{ count }}</span>
    <span>{{ other }}</span>
    <br />
   <n-button type="primary" @click="add">add</n-button>
  </div>
</template>

<script>
  export default {
    name: 'watchOptionsImmediate',
    data() {
      return {
        count: 1,
        other: 2,
      };
    },
    watch: {
      count: {
        handler(val) {
          this.other = val * 2;
          alert(this.count, this.other);
        },
        immediate: true,
      },
    },
    methods: {
      add() {
        this.count++;
      },
      sub() {
        this.count--;
      },
    },
  };
</script>
