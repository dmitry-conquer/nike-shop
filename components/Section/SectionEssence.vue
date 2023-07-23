<template>
  <section class="relative mb-[14.5rem] pt-32 sm:pt-[11.5rem]">
    <div class="mx-auto max-w-[66.5rem] px-4">
      <div class="relative mx-auto mb-10 max-w-[38rem] text-center text-4xl font-bold leading-normal lg:mb-20">
        <h2
          data-text="THE ESSENCE HANDCRAFTED OF FOOTWEAR."
          class="text-clip-lg text-clip text-2xl sm:text-3xl text-white lg:text-4xl">
          THE ESSENCE HANDCRAFTED OF FOOTWEAR
        </h2>
        <img
          id="thumb-1"
          src="~/assets/images/converted/title-thumb1.webp"
          alt="title-thumb1"
          class="absolute max-sm:hidden top-0 right-0 h-[4.5rem] w-[4.5rem]" />
        <img
          id="thumb-2"
          src="~/assets/images/converted/title-thumb2.webp"
          alt="title-thumb2"
          class="absolute max-sm:hidden bottom-0 left-0 h-[4.5rem] w-[4.5rem]" />
      </div>
      <p class="text-center text-md font-light leading-tight sm:leading-loose lg:text-xl">
        In terms of footwear, we are the first in Canada to have opened not simple "shops" but real company outlets that
        offer the same service as the artisan shops of yesteryear: this to make you go without fail every time you want
        to buy a pair of handmade genuine leather shoes. Without fear of making mistakes and with the certainty that you
        will be able to wear them comfortably from the beginning. Are you also curious to find out why hundreds of
        people choose us every day?
      </p>
    </div>
    <img
      id="red-cross"
      class="will-change-transform absolute sm:-bottom-[20%] -bottom-[13%] -left-[14%] -z-10 w-[60%] rotate-[35deg] object-contain xl:h-[20rem] xl:w-[42rem]"
      src="~/assets/images/converted/cross-red.webp"
      alt="cross-red" />
  </section>
</template>

<script setup>
onMounted(() => {
  const { gsap } = useGsap();

  const redCross = gsap.timeline({
    scrollTrigger: {
      trigger: "#red-cross",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  redCross.fromTo(
    "#red-cross",
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 70,
      opacity: 1,
    },
  );
});
</script>
