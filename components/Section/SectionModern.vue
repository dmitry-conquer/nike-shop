<template>
  <section class="container flex items-center justify-between gap-24 py-32">
    <div class="relative h-[18.75rem] w-[18.75rem]">
      <div class="red-sqr absolute left-0 top-0 h-full w-full"></div>
      <div class="red-sqr-inner absolute left-0 top-0 h-full w-full"></div>
      <img
        id="on-red-cross"
        src="images/cross14.png"
        alt="cross14"
        class="absolute will-change-transform left-4 top-1/2 w-[300px] -translate-y-1/2 rotate-[10deg]" />
    </div>
    <div class="w-2/3">
      <h2 class="mb-6 text-4xl uppercase leading-snug">WE PROVIDE MODERN SHOES</h2>
      <p class="text-xl font-light leading-tight">
        Design for the way you live your life. Atoms are beautiful in their simplicity, supporting your feet with
        absolute comfort.
      </p>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const gsap = useGsap()

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
