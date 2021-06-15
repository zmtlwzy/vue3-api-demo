import { computed } from 'vue';

export default function (x, y) {
  const halfX = computed(() => (x.value / 2).toFixed(0));
  const px = computed(() => `${x.value}px`);
  return { halfX, px };
}
