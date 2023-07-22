<template>
  <section
    class="relative mx-auto flex max-w-[2000px] flex-col items-center justify-center gap-32 overflow-hidden px-4 py-40 max-md:py-20 md:flex-row md:pr-12 lg:pl-8 xl:pl-16">
    <h1 class="sr-only">Nike Shop</h1>
    <img
      src="~/assets/images/vector1.png"
      alt="vector"
      class="pointer-events-none absolute left-0 top-0 h-full w-full max-sm:hidden" />
    <p
      id="hero-bg-text"
      class="pointer-events-none absolute left-0 top-1/4 bg-gradient-to-b from-white/10 to-white/0 bg-clip-text text-center text-4xl font-[950] uppercase leading-none text-transparent md:text-5xl xl:text-6xl">
      AIR JORDAN 1 RETRO HIGH OG DUNK HIGH
    </p>
    <div
      class="absolute -left-[49rem] top-[20%] z-50 -translate-y-1/2 translate-x-full max-sm:-left-[32rem] md:top-1/2 lg:-left-[65rem]">
      <div
        ref="colorscircle"
        class="h-[20rem] w-[20rem] rounded-full border transition duration-500 sm:h-[30rem] sm:w-[30rem] lg:h-[40rem] lg:w-[40rem]">
        <button
          v-for="(s, i) in sneakers"
          :key="s.name"
          @click="choose(s.name, i)"
          type="button"
          :class="[s.position, s.color, { 'border-2': s.name === currentColor }]"
          class="absolute h-4 w-4 -translate-y-1/2 translate-x-1/2 rounded-full"></button>
      </div>
    </div>
    <div
      id="cross-selector"
      ref="cross"
      class="relative -left-8 top-1/2 z-20 w-[18rem] shrink-0 sm:left-0 sm:h-[60%] sm:w-[60%] md:h-[8rem] md:w-[24rem] md:-translate-y-1/2 lg:h-[12rem] lg:w-[32rem] xl:h-[20rem] xl:w-[40rem]">
      <Transition
        v-for="(url, i) in sliderImagesUrl"
        :key="i">
        <img
          v-show="currentCross == i"
          :src="url"
          alt="nike cross"
          class="absolute w-full -rotate-[15.537deg] object-contain" />
      </Transition>
      <ToolTips
        text="Purposeful Design"
        position="top-left"
        class="left-1/4 top-12 z-10 max-sm:left-[55%] sm:top-24 md:top-16 lg:top-48" />
      <ToolTips
        text="Relentless Innovation"
        position="top-left"
        class="left-[85%] z-10" />
    </div>
    <div class="md:w-3/7 mt-24">
      <h2 class="sr-only">New collection</h2>
      <div class="flex flex-col items-start gap-y-4 px-4 max-md:max-w-md">
        <h3 class="text-2xl italic leading-none md:text-3xl">AIR JORDAN 1 RETRO HIGH OG</h3>
        <div class="flex w-full max-sm:justify-between">
          <span class="mr-auto text-2xl">$275</span>
          <div class="flex items-center gap-2 sm:mr-16">
            <label class="font-light">Size</label>
            <select class="bg-transparent text-2xl">
              <option
                class="bg-black"
                value="36">
                36
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import cross1 from "~/assets/images/cross1.png";
import cross2 from "~/assets/images/cross2.png";
import cross5 from "~/assets/images/cross5.png";
import cross6 from "~/assets/images/cross6.png";
import cross7 from "~/assets/images/cross7.png";
const sliderImagesUrl = [cross1, cross2, cross5, cross6, cross7];

const sneakers = [
  {
    name: "yellow",
    color: "bg-[#e7e134]",
    position: "right-[23%] top-[8%]",
  },
  {
    name: "orange",
    color: "bg-[#d74f00]",
    position: "right-[6.5%] top-1/4",
  },
  {
    name: "black",
    color: "bg-[#000]",
    position: "right-0 top-1/2",
  },
  {
    name: "blue",
    color: "bg-[#002951]",
    position: "right-[5%] bottom-1/4",
  },
  {
    name: "purple",
    color: "bg-[#492e8e]",
    position: "right-[22%] bottom-[5.5%]",
  },
];

const currentCross = ref(2);
const currentColor = ref("black");
const colorscircle = ref(null);
const choose = (color, i) => {
  currentColor.value = color;
  currentCross.value = i;
  switch (i + 1) {
    case 1:
      colorscircle.value.style.transform = "rotate(60deg)";
      break;
    case 2:
      colorscircle.value.style.transform = "rotate(30deg)";
      break;
    case 3:
      colorscircle.value.style.transform = "rotate(0)";
      break;
    case 4:
      colorscircle.value.style.transform = "rotate(-30deg)";
      break;
    case 5:
      colorscircle.value.style.transform = "rotate(-60deg)";
  }
};

/*
   GSAP
 */

onMounted(() => {
  const { gsap, ScrollTrigger } = useGsap();

  const heroBgText = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-bg-text",
      start: "top 25%",
      end: "bottom top",
      scrub: true,
    },
  });
  heroBgText.to("#hero-bg-text", {
    yPercent: -100,
    opacity: 1,
  });

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      const crossSelector = gsap.timeline({
        scrollTrigger: {
          trigger: "#cross-selector",
          start: "top 25%",
          end: "bottom top",
          scrub: true,
        },
      });
      crossSelector.fromTo(
        "#cross-selector",
        {
          x: "100",
        },
        {
          x: "0",
        },
      );
    },
  });
});
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
