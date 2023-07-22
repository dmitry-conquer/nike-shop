<template>
  <section class="container mb-[15rem]">
    <h2 class="relative mx-auto min-h-[3rem] max-w-[16rem] text-center">
      <span
        id="sport-title"
        class="absolute left-0 top-0 -rotate-[10deg] font-[950] uppercase italic text-4xl md:text-5xl"
        >Sports</span
      >
      <span
        id="time-title"
        class="text-stroke absolute -right-[2rem] md:-right-[7rem] top-[2.5rem] -rotate-[10deg] md:text-5xl font-[950] uppercase italic text-4xl"
        >Time</span
      >
    </h2>
    <div class="mt-64 space-y-48">
      <div class="flex gap-48 max-md:flex-col md:justify-start md:gap-12">
        <div class="flex h-[10rem] flex-col items-center">
          <img
            src="images/cross12.png"
            alt="Nike Air Max Plus 3"
            class="block h-full w-full translate-y-[1.4rem] object-contain transition duration-300 hover:rotate-6 hover:scale-110" />
          <img
            src="images/desk.png"
            alt="desk" />
          <h3 class="mt-6 text-center text-md font-light uppercase">Nike Air Max Plus 3</h3>
        </div>
        <div class="flex h-[10rem] flex-col items-center">
          <img
            src="images/cross5.png"
            alt="Air Jordan 4 Retro Lightning (Premium Batch)"
            class="block h-full w-full translate-y-[1.4rem] object-contain transition duration-300 hover:rotate-6 hover:scale-110" />
          <img
            src="images/desk.png"
            alt="desk" />
          <h3 class="mt-6 text-center text-md font-light uppercase">Air Jordan 4 Retro Lightning (Premium Batch)</h3>
        </div>
      </div>
      <div class="flex gap-48 max-md:flex-col md:justify-end md:gap-12">
        <div class="flex h-[10rem] flex-col items-center">
          <img
            src="images/cross6.png"
            alt="Air Jordan 13 Retro Court Purple (Reflective)"
            class="block h-full w-full translate-y-[1.4rem] object-contain transition duration-300 hover:rotate-6 hover:scale-110" />
          <img
            src="images/desk.png"
            alt="desk" />
          <h3 class="mt-6 text-center text-md font-light uppercase">Air Jordan 13 Retro Court Purple (Reflective)</h3>
        </div>
        <div class="flex h-[10rem] flex-col items-center">
          <img
            src="images/cross9.png"
            alt="Air Jordan 1 AJKO Blue Red"
            class="block h-full w-full translate-y-[1.4rem] object-contain transition duration-300 hover:rotate-6 hover:scale-110" />
          <img
            src="images/desk.png"
            alt="desk" />
          <h3 class="mt-6 text-center text-md font-light uppercase">Air Jordan 1 AJKO Blue Red</h3>
        </div>
      </div>
      <div class="flex gap-48 max-md:flex-col md:justify-start md:gap-12">
        <div class="flex h-[10rem] flex-col items-center">
          <img
            src="images/cross8.png"
            alt="Yeezy Boost 350 V2 MX Rock (Real Boost)"
            class="block h-full w-full translate-y-[1.4rem] object-contain transition duration-300 hover:rotate-6 hover:scale-110" />
          <img
            src="images/desk.png"
            alt="desk" />
          <h3 class="mt-6 text-center text-md font-light uppercase">Yeezy Boost 350 V2 MX Rock (Real Boost)</h3>
        </div>
        <div class="flex h-[10rem] flex-col items-center">
          <img
            src="images/cross7.png"
            alt="Vans Old Skool Suede Honey Gold"
            class="block h-full w-full translate-y-[1.4rem] object-contain transition duration-300 hover:rotate-6 hover:scale-110" />
          <img
            src="images/desk.png"
            alt="desk" />
          <h3 class="mt-6 text-center text-md font-light uppercase">Vans Old Skool Suede Honey Gold</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const { gsap } = useGsap();

  const timeTitle = gsap.timeline({
    scrollTrigger: {
      trigger: "#time-title",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  timeTitle.fromTo(
    "#time-title",
    {
      x: 100,
    },
    {
      x: 0,
    },
  );

  const sportTitle = gsap.timeline({
    scrollTrigger: {
      trigger: "#sport-title",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      // markers: true
    },
  });
  sportTitle.fromTo(
    "#sport-title",
    {
      x: -100,
    },
    {
      x: 0,
    },
  );
});
</script>
