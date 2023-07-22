<template>
  <div>
    <div class="relative z-20 translate-y-16 sm:translate-y-10 rotate-[3deg] bg-black">
      <div
        id="black-line"
        class="flex gap-24 lg:gap-48">
        <span
          v-for="span in 10"
          :key="span"
          class="block py-3 text-xl lg:text-2xl uppercase italic tracking-[2rem]"
          >flash</span
        >
      </div>
    </div>
    <div class="relative z-10 -translate-y-10 -rotate-[3deg] bg-brand-400">
      <div
        id="red-line"
        class="relative right-[600px] lg:right-[100px] flex gap-24 lg:gap-48">
        <span
          v-for="span in 10"
          :key="span"
          class="block py-3 text-xl lg:text-2xl uppercase italic tracking-[2rem]"
          >flash</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const {gsap} = useGsap();

  const redLine = gsap.timeline({
    scrollTrigger: {
      trigger: "#red-line",
      start: "top bottom",
      end: "bottom top",
      scrub: 4,
    },
  });
  redLine.to("#red-line", {
    x: "400",
  });

  const blackLine = gsap.timeline({
    scrollTrigger: {
      trigger: "#black-line",
      start: "top bottom",
      end: "bottom top",
      scrub: 4,
    },
  });
  blackLine.to("#black-line", {
    x: "-400",
  });
});
</script>

<style lang="scss"></style>
