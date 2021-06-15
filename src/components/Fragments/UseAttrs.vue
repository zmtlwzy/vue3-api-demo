<template>
  <header>header</header>
  <main v-bind="$attrs">main</main>
  <footer>footer</footer>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$attrs);
    },
  };
</script>

<style></style>
