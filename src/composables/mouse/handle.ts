import { computed, Ref } from 'vue';

export default function (x: Ref<number>) {
  const halfX = computed(() => `${(x.value / 2).toFixed(0)}px`);
  const halfY = computed(() => `${x.value}px`);
  return { halfX, halfY };
}
