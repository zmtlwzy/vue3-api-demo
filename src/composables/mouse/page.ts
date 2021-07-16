import { ref, onMounted, onUnmounted } from 'vue';

export default function () {
  const pageX = ref(0);
  const pageY = ref(0);

  function update(e: MouseEvent) {
    pageX.value = e.pageX;
    pageY.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { pageX, pageY };
}
