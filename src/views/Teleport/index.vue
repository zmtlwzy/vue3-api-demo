<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <n-button type="primary" @click="changeTarget">change</n-button>
      <div id="teleport-container"></div>
    </n-space>
  </n-card>

  <teleport :to="target" v-if="isShow">
    <n-tag size="large">teleport tag</n-tag>
  </teleport>
</template>

<script lang="ts">
function* toggleTarget() {
  while (true) {
    yield document.querySelector('footer .teleport-footer-container');
    yield '#teleport-container';
    yield '.teleport-header-container';
  }
}
const toggle = toggleTarget();
export default defineComponent({
  name: 'Teleport',
  setup() {
    const target = ref<any>('#teleport-container');
    const isShow = ref<boolean>(false);
    const changeTarget = () => {
      target.value = toggle.next().value;
    };
    nextTick(() => {
      isShow.value = true;
    });
    return {
      isShow,
      target,
      changeTarget
    };
  }
});
</script>

<style scoped>
span {
  padding: 5px;
  margin: 5px;
  background-color: rgba(70, 117, 148, 0.63);
  border-radius: 0.3rem;
}
</style>
