<template>
  <section
    class="relative mx-auto flex max-w-[2000px] items-center justify-center gap-24 overflow-hidden py-40 pl-16 pr-12">
    <h1 class="sr-only">Nike Shop</h1>
    <img
      src="images/vector1.png"
      alt="vector"
      class="pointer-events-none absolute left-0 top-0 h-full w-full" />
    <p
      id="hero-bg-text"
      class="pointer-events-none absolute left-0 top-1/4 bg-gradient-to-b from-white/10 to-white/0 bg-clip-text text-6xl font-[950] uppercase leading-none text-transparent">
      AIR JORDAN 1 RETRO HIGH OG DUNK HIGH
    </p>
    <div class="absolute -left-[55%] top-1/2 z-30 -translate-y-1/2 translate-x-full">
      <div
        ref="colorscircle"
        class="h-[40rem] w-[40rem] rounded-full border transition duration-500">
        <button
          v-for="(s, i) in sneakers"
          :key="s.name"
          @click="choose(s.name, i)"
          type="button"
          :class="[s.position, s.color, { 'border-2': s.name === currentColor }]"
          class="absolute block h-4 w-4 -translate-y-1/2 translate-x-1/2 rounded-full"></button>
      </div>
    </div>
    <div
      id="cross-selector"
      ref="cross"
      class="relative z-20 h-[20rem] w-[40rem]">
      <Transition
        v-for="(url, i) in sliderImagesUrl"
        :key="i">
        <img
          v-show="currentCross == i"
          :src="url"
          alt="nike cross"
          class="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 -rotate-[15.537deg] object-contain" />
      </Transition>
      <ToolTips
        text="Purposeful Design"
        position="top-left"
        class="left-1/2 top-1/2" />
      <ToolTips
        text="Relentless Innovation"
        position="top-left"
        class="left-[85%] top-[15%]" />
    </div>
    <div class="w-3/7">
      <h2 class="sr-only">New collection</h2>
      <div class="flex flex-col items-start gap-y-4">
        <h3 class="text-3xl italic leading-none">AIR JORDAN 1 RETRO HIGH OG</h3>
        <div class="flex w-full">
          <span class="mr-auto text-2xl">$275</span>
          <div class="mr-16 flex items-center gap-2">
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
        <a
          href="#"
          class="inline-flex items-center gap-3 rounded-3xl border px-4 py-1.5 font-light leading-none">
          <span>More Details</span>
          <IconArrowSimple class="h-4 w-4 fill-white" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const sliderImagesUrl = [
  "images/cross6.png",
  "images/cross2.png",
  "images/cross1.png",
  "images/cross5.png",
  "images/cross7.png",
];

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
    position: "right-[22%] bottom-[6%]",
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
  const gsap = useGsap();

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
