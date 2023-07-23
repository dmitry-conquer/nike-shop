<template>
  <section class="container relative mb-32 py-24">
    <div class="flex items-center gap-10 rounded-xl border px-6 sm:px-10 py-8 sm:py-16">
      <div class="leading-none">
        <h2 class="mb-4  text-xl sm:text-2xl  md:text-3xl">JOIN OUR NIKECLUB & GET 15% OFF</h2>
        <p class="text-md sm:text-xl font-light">Sign up for free. Join the community, Never pay for shipping.</p>
      </div>
      <img
        src="~/assets/images/logo.svg"
        alt="nike logo"
        class="md:h-[5rem] md:w-[12rem] h-[3rem] w-[8rem] max-sm:hidden object-contain" />
    </div>
    <img
      id="black-cross"
      src="~/assets/images/converted/cross-black.webp"
      alt="cross-black"
      class="will-change-transform absolute lg:w-[70%] sm:w-[35rem] sm:-right-[35%] -right-[15%]  top-[80%] sm:top-1/2 lg:top-[25%]" />
  </section>
</template>

<script setup>
onMounted(() => {
  const {gsap} = useGsap();

  const blackCross = gsap.timeline({
    scrollTrigger: {
      trigger: "#black-cross",
      start: "top 120%",
      end: "bottom top",
      scrub: true,
    },
  });
  blackCross.fromTo(
    "#black-cross",
    {
      x: 300,
      rotate: -15,
    },
    {
      x: 0,
      rotate: 0,
    },
  );
});
</script>
