export default function () {
  const screenX = ref(0);
  const screenY = ref(0);

  function update(e: MouseEvent) {
    screenX.value = e.screenX;
    screenY.value = e.screenY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { screenX, screenY };
}
