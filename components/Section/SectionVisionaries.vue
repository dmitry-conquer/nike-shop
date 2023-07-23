<template>
  <section class="container flex flex-col-reverse lg:flex-row items-center justify-between gap-x-[15rem] gap-y-8 py-16 sm:py-32 px-4">
    <div class="perspective  w-[88%] h-[88%] sm:h-[26rem] sm:w-[26rem] shrink-0">
      <img
        :style="parallaxStyles"
        ref="targetParallax"
        src="~/assets/images/converted/circle-picture.webp"
        alt="circle-picture"
        class="block object-cover w-full h-full transition-all ease-linear" />
    </div>
    <div>
      <h2 class="mb-8 lg:whitespace-nowrap text-2xl leading-tight sm:text-3xl text-center lg:text-left uppercase">WE ARE <span class="text-brand-500">VISIONARIES</span></h2>
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
