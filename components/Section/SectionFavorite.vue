<template>
  <section class="container  mb-32 md:mb-[14rem]">
    <h2 class="mb-16 sm:mb-32 text-center text-2xl uppercase leading-tight sm:text-3xl lg:text-left lg:text-4xl">
      Our Favorite <span class="font-light text-brand-500">Nike</span> styles<span class="font-light text-brand-500"
        >.</span
      >
    </h2>
    <div>
      <div
        class="flex flex-col items-center gap-20 will-change-transform md:flex-row md:pl-64"
        id="cross-row">
        <div
          v-for="item in items"
          :key="item.name"
          class="relative w-[250px] shrink-0 lg:w-[350px]">
          <div
            class="circle-gradient absolute left-1/2 top-1/2 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2"></div>
          <h3 class="mb-4 truncate text-md italic">{{ item.name }}</h3>
          <div class="flex items-start gap-8">
            <img
              :src="item.image"
              :alt="item.name"
              class="grow-1 h-[7rem] w-[11rem] -rotate-[24deg] object-contain lg:h-[9rem] lg:w-[15rem]" />
            <span class="text-md italic text-brand-500">{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import cross11 from "~/assets/images/converted/cross11.webp";
import cross9 from "~/assets/images/converted/cross9.webp";
import cross8 from "~/assets/images/converted/cross8.webp";
import cross7 from "~/assets/images/converted/cross7.webp";


const items = [
  {
    name: "NIKE Mercurial Superfly",
    price: "$271",
    image: cross11
  },
  {
    name: "NIKE Dunk High",
    price: "$187",
    image: cross9
  },
  {
    name: "Vans Old Skool Suede Honey Gold",
    price: "$219",
    image: cross8
  },
  {
    name: "Air Jordan 13 Retro Court Purple (Reflective)",
    price: "$178",
    image: cross7
  },
];

onMounted(() => {
  const { gsap, ScrollTrigger } = useGsap();
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      const crossRow = gsap.timeline({
        scrollTrigger: {
          trigger: "#cross-row",
          start: "top 60%",
          end: "bottom top",
          scrub: 4,
        },
      });
      crossRow.to("#cross-row", {
        xPercent: -100,
      });
    },
  });
});
</script>
