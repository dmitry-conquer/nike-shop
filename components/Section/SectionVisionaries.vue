<template>
  <section class="container flex items-center justify-between gap-[15rem] py-32">
    <div class="perspective h-[26rem] w-[26rem] shrink-0">
      <img
        :style="parallaxStyles"
        ref="targetParallax"
        src="images/circle-picture.png"
        alt="circle-picture"
        class="block object-cover transition-all ease-linear" />
    </div>
    <div>
      <h2 class="mb-8 whitespace-nowrap text-3xl uppercase">WE ARE <span class="text-brand-500">VISIONARIES</span></h2>
      <div class="space-y-8">
        <p class="text-md font-light leading-none">
          Exploring the boundaries of footwear with expert design knowledge and manufacture in mind.
        </p>
        <p class="text-md font-light leading-none">
          <b>INSIGHTFUL CREATIVE DIRECTION</b> : Uniting Consumer Insights with progressive manufacturing methods, we
          create comprehensive plans to outpace your competition.
        </p>
        <p class="text-md font-light leading-none">
          <b>PURPOSEFUL DESIGN</b> : We create products that captivate consumers and elevate brands. applying a refined
          sense of beauty and style, our designs are alluring.
        </p>
        <p class="text-md font-light leading-none">
          <b>RELENTLESS INNOVATION</b> : We live to challenge the boundaries of convention and take advantage of every
          breakthrough opportunity big or small. we’ll help you define the cutting-edge of your business.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useParallax } from "@vueuse/core";
const targetParallax = ref(null);
const speed = 25;

const { tilt, roll, source } = useParallax(targetParallax);

const parallaxStyles = computed(() => {
  return {
    transform: `rotateY(${tilt.value * speed}deg) rotateX(${roll.value * speed}deg)`,
  };
});
</script>
