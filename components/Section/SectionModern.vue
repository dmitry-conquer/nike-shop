<template>
  <section
    class="container flex flex-col items-center justify-between gap-x-24 gap-y-12 py-32 text-center lg:flex-row lg:text-left">
    <div class="relative h-[15rem] w-[15rem] sm:h-[18.75rem] sm:w-[18.75rem]">
      <div class="red-sqr absolute left-0 top-0 h-full w-full"></div>
      <div class="red-sqr-inner absolute left-0 top-0 h-full w-full"></div>
      <img
        id="on-red-cross"
        src="~/assets/images/cross14.png"
        alt="cross14"
        class="absolute left-4 top-[40%] sm:top-1/2 w-[300px] -translate-y-1/2 rotate-[10deg] will-change-transform" />
    </div>
    <div class="md:w-2/3">
      <h2 class="mb-6 text-xl uppercase leading-snug sm:text-2xl lg:text-4xl">WE PROVIDE MODERN SHOES</h2>
      <p class="text-md font-light leading-tight sm:text-xl">
        Design for the way you live your life. Atoms are beautiful in their simplicity, supporting your feet with
        absolute comfort.
      </p>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const { gsap } = useGsap();

  const onRedCross = gsap.timeline({
    scrollTrigger: {
      trigger: "#on-red-cross",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  onRedCross.fromTo(
    "#on-red-cross",
    {
      x: -100,
      rotate: -30,
    },
    {
      x: 0,
      rotate: 0,
    },
  );
});
</script>
