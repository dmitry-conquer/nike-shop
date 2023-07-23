<template>
  <div class="container flex flex-col lg:flex-row items-center gap-x-10 gap-y-16 py-16 md:py-32">
    <div class="lg:w-1/2 max-lg:space-y-4">
      <h2 class="text-2xl sm:text-3xl lg:text-left text-center leading-tight">BEST SHOES FOR THE BEST PEOPLE</h2>
      <p class="text-md font-light lg:text-left text-center leading-tight">
        Design for the way you live your life. Atoms are beautiful in their simplicity, supporting your feet with
        absolute comfort.
      </p>
    </div>
    <div class="relative grid lg:w-1/2 auto-rows-[10rem] grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
      <div
        id="image-big"
        class="relative z-20 row-span-3 overflow-hidden rounded-2xl sm:pb-16 will-change-transform">
        <img
          src="~/assets/images/converted/best1.webp"
          alt="image"
          class="h-full w-full overflow-hidden rounded-2xl object-cover" />
      </div>
      <div
        id="image-small"
        class="will-change-transform relative z-20 overflow-hidden rounded-2xl">
        <img
          src="~/assets/images/converted/best2.webp"
          alt="image"
          class=" col-end-3 h-full w-full object-cover" />
      </div>
      <div
        id="image-medium"
        class="relative z-20 row-span-2 overflow-hidden rounded-2xl sm:pl-12 sm:pr-4 will-change-transform">
        <img
          src="~/assets/images/converted/best3.webp"
          alt="image"
          class="h-full w-full rounded-2xl object-cover" />
      </div>
      <div class="circle-gradient-lg absolute-center h-[36rem] w-[36rem]"></div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const {gsap} = useGsap();

  const imageBig = gsap.timeline({
    scrollTrigger: {
      trigger: "#image-big",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  imageBig.fromTo(
    "#image-big",
    {
      x: -100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1
    },
  );

  const imageMedium = gsap.timeline({
    scrollTrigger: {
      trigger: "#image-medium",
      start: "top bottom",
      end: "bottom center",
      scrub: true,
    },
  });
  imageMedium.fromTo(
    "#image-medium",
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1
    },
  );

  const imageSmall = gsap.timeline({
    scrollTrigger: {
      trigger: "#image-small",
      start: "top bottom",
      end: "bottom center",
      scrub: true,
    },
  });
  imageSmall.fromTo(
    "#image-small",
    {
      x: 100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1
    },
  );
});
</script>
