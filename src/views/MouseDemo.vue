<template>
  <div class="mouse">
    x:{{ x }} y:{{ y }}
    <br />
    <hr />
    X:{{ X }} Y:{{ Y }}
    <br />
    <hr />
    x/2= {{ halfX }} ({{ px }})
  </div>
</template>

<script>
import {
  useMousePosition,
  useScreenPosition,
  useHalfPosition,
} from "../utils/mouse";
export default {
  setup() {
    const { x, y } = useMousePosition();
    const { halfX, px } = useHalfPosition(x, y);
    return {
      x,
      y,
      halfX,
      px,
      ...useScreenPosition(),
    };
  },
};
</script>

<style></style>
