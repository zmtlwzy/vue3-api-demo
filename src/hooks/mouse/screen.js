import { ref, onMounted, onUnmounted } from 'vue'

export default function() {
  const X = ref(0)
  const Y = ref(0)

  function update(e) {
    X.value = e.screenX
    Y.value = e.screenY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { X,Y }
}