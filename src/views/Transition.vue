<template>
  <div>
    <input type="button" value="快到碗里来" @click="flag = !flag" />
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-if="flag"></div>
    </transition>
  </div>
</template>

<script>
  const moveTime = 1;
  const fallTime = 0.6;
  export default {
    data() {
      return {
        flag: false,
      };
    },
    watch: {
      flag: function () {
        console.log(this.flag);
      },
    },
    methods: {
      beforeEnter(el) {
        gsap.set(el, {
          x: 150,
          y: 50,
        });
      },
      enter(el, done) {
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
      },
      afterEnter() {
        this.flag = !this.flag;
      },
    },
  };
</script>

<style>
  .ball {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
  }
</style>
