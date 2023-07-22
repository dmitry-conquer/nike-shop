<template>
  <section class="relative mb-[14.5rem] pt-[11.5rem]">
    <div class="mx-auto max-w-[66.5rem]">
      <div class="relative mx-auto mb-20 max-w-[38rem] text-center text-4xl font-bold leading-normal">
        <h2
          data-text="THE ESSENCE HANDCRAFTED OF FOOTWEAR."
          class="text-clip-lg text-clip text-white">
          THE ESSENCE HANDCRAFTED OF FOOTWEAR.
        </h2>
        <img
          id="thumb-1"
          src="images/title-thumb1.jpg"
          alt="title-thumb1"
          class="absolute bottom-0 left-0 block h-[4.5rem] w-[4.5rem]" />
        <img
          id="thumb-2"
          src="images/title-thumb2.jpg"
          alt="title-thumb2"
          class="absolute right-0 top-0 block h-[4.5rem] w-[4.5rem]" />
      </div>
      <p class="text-center text-xl font-light leading-loose">
        In terms of footwear, we are the first in Canada to have opened not simple "shops" but real company outlets that
        offer the same service as the artisan shops of yesteryear: this to make you go without fail every time you want
        to buy a pair of handmade genuine leather shoes. Without fear of making mistakes and with the certainty that you
        will be able to wear them comfortably from the beginning. Are you also curious to find out why hundreds of
        people choose us every day?
      </p>
    </div>
    <img
      id="red-cross"
      class="absolute -bottom-[20%] -left-[14%] rotate-[35deg]"
      src="images/cross-red.png"
      alt="cross-red" />
  </section>
</template>

<script setup>
onMounted(() => {
  const gsap = useGsap();

  const redCross = gsap.timeline({
    scrollTrigger: {
      trigger: "#red-cross",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  redCross.fromTo(
    "#red-cross",
    {
      x: -200,
      opacity: 0
    },
    {
      x: 70,
      opacity: 1
    },
  );
});
</script>
