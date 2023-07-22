<template>
  <section class="container mb-40">
    <div class="relative mx-auto mb-20 max-w-[38rem] text-center text-4xl font-bold uppercase leading-normal">
      <h2
        data-text="BEST SELLERS"
        class="text-clip-sm text-clip text-white">
        BEST SELLERS
      </h2>
    </div>
    <div class="grid grid-cols-1 justify-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div class="relative overflow-hidden">
        <img
          src="images/women.jpg"
          alt="women"
          class="relative -z-0" />
        <h3 class="text-stroke absolute bottom-2 right-2 text-4xl uppercase italic leading-none">women</h3>
      </div>
      <div class="relative overflow-hidden">
        <img
          src="images/kids.jpg"
          alt="kids"
          class="relative -z-0" />
        <h3 class="text-stroke absolute bottom-2 right-2 text-4xl uppercase italic leading-none">kids</h3>
      </div>
      <div class="relative overflow-hidden">
        <img
          src="images/men.jpg"
          alt="men"
          class="relative -z-0" />
        <h3 class="text-stroke absolute bottom-2 right-2 text-4xl uppercase italic leading-none">men</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const gsap = useGsap();

  const textStroke = gsap.timeline({
    scrollTrigger: {
      trigger: ".text-stroke",
      start: "top bottom",
      end: "bottom 40%",
      scrub: true,
    },
  });
  textStroke.fromTo(
    ".text-stroke",
    {
      x: 100,
    },
    {
      x: 0,
    },
  );
});
</script>
