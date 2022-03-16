import { useMouse } from '@vueuse/core'

export default function() {
  const { x, y } = useMouse()

  return { pageX: x, pageY: y }
}
