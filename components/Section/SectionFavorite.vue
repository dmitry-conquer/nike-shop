<template>
  <section class="container mb-[14rem]">
    <h2 class="mb-32 text-left text-4xl uppercase">
      Our Favorite <span class="font-light text-brand-500">Nike</span> styles<span class="font-light text-brand-500"
        >.</span
      >
    </h2>
    <div>
      <div
        class="flex gap-20 pl-64 will-change-transform"
        id="cross-row">
        <div
          v-for="item in items"
          :key="item.name"
          class="relative w-[350px] shrink-0">
          <div
            class="circle-gradient absolute left-1/2 top-1/2 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2"></div>
          <h3 class="mb-4 truncate text-md italic">{{ item.name }}</h3>
          <div class="flex items-start gap-8">
            <img
              :src="item.image"
              :alt="item.name"
              class="grow-1 h-[9rem] w-[15rem] -rotate-[24deg] object-contain" />
            <span class="text-md italic text-brand-500">{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    name: "NIKE Mercurial Superfly",
    price: "$271",
    image: "images/cross11.png",
  },
  {
    name: "NIKE Air Zoom Alphafly",
    price: "$216",
    image: "images/cross10.png",
  },
  {
    name: "NIKE Dunk High",
    price: "$187",
    image: "images/cross9.png",
  },
  {
    name: "Vans Old Skool Suede Honey Gold",
    price: "$219",
    image: "images/cross8.png",
  },
  {
    name: "Air Jordan 13 Retro Court Purple (Reflective)",
    price: "$178",
    image: "images/cross7.png",
  },
];

onMounted(() => {
  const gsap = useGsap();

  const crossRow = gsap.timeline({
    scrollTrigger: {
      trigger: "#cross-row",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  crossRow.to("#cross-row", {
    xPercent: -100,
  });
});
</script>
