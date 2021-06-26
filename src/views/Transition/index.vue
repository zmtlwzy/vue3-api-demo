<template>
  <n-card :title="$options.name">
    <n-button type="primary" @click="flag = !flag">start</n-button>
  </n-card>
  <transition :css="false" @before-enter="bfEnter" @enter="enter" @after-enter="afEnter">
      <div class="ball" v-if="flag"></div>
    </transition>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    useTransitionState,
    BaseTransitionProps,
    onBeforeMount,
    onUnmounted,
    onMounted,
  } from 'vue';

  const moveTime = 1;
  const fallTime = 0.6;
  export default defineComponent({
    name:'transitionHook',
    setup() {
      const flag = ref<boolean>(false);
      const state = useTransitionState();

      onBeforeMount(() => {
        console.log('onBeforeMount')
        console.log(state);
      });
      onMounted(() => {
        console.log('onMounted')
        console.log(state);
      });
      onUnmounted(() => {
        console.log('onUnmounted')
        console.log(state);
      });

      const bfEnter: BaseTransitionProps['onBeforeEnter'] = (el) => {
        gsap.set(el, {
          x: 150,
          y: 50,
        });
      };

      const enter: BaseTransitionProps['onEnter'] = (el, done) => {
        gsap.to(el, {
          duration: moveTime,
          x: 'random([450,500,600])',
          ease: 'expo.inOut',
        });
        gsap.to(el, {
          scaleX: 1.5,
          scaleY: 0.7,
          duration: moveTime * 0.5,
          ease: 'expo.in',
        });
        gsap.to(el, {
          delay: moveTime * 0.5,
          scaleX: 1,
          scaleY: 1,
          duration: moveTime * 0.5,
          ease: 'expo.out',
        });
        gsap.to(el, {
          delay: moveTime * 0.7,
          duration: fallTime,
          scaleX: 0.6,
          scaleY: 1.7,
          y: 'random(300, 700, 5)',
          opacity: 0,
          ease: 'expo.in',
          onComplete: done,
        });
      };

      const afEnter: BaseTransitionProps['onAfterEnter'] = () => {
        flag.value = !flag.value;
      };

      return {
        flag,
        bfEnter,
        enter,
        afEnter,
      };
    },
  });
</script>

<style>
  .ball {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
  }
</style>
