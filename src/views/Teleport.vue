<template>
  <div>
    <button @click="changeTarget">change</button>
    <teleport :to="target">
      <span>teleport</span>
    </teleport>
  </div>
</template>

<script>
function* toggleTarget() {
  while (true) {
    yield "#footer";
    yield "#app";
    yield document.querySelector("#footer");
    yield document.querySelector("#app");
  }
}
const toggle = toggleTarget()
export default {
  data() {
    return {
      target: "#app",
    };
  },
  methods: {
    changeTarget() {
      this.target = toggle.next().value;
    },
  },
};
</script>

<style></style>
