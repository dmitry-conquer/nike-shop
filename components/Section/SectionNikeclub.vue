<template>
  <section class="container relative mb-32 py-24">
    <div class="flex items-center gap-10 rounded-xl border px-10 py-16">
      <div class="leading-none">
        <h2 class="mb-4 text-3xl">JOIN OUR NIKECLUB & GET 15% OFF</h2>
        <p class="text-xl font-light">Sign up for free. Join the community, Never pay for shipping.</p>
      </div>
      <img
        src="images/logo.svg"
        alt="nike logo"
        class="h-[5rem] w-[12rem] object-contain" />
    </div>
    <img
      id="black-cross"
      src="images/cross-black.png"
      alt="cross-black"
      class="absolute -right-[35%] top-[25%]" />
  </section>
</template>

<script setup>
onMounted(() => {
  const gsap = useGsap();

  const blackCross = gsap.timeline({
    scrollTrigger: {
      trigger: "#black-cross",
      start: "top bottom",
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
