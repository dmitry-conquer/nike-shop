<template>
  <section class="">
    <div class="mx-auto flex max-w-[1440px] flex-col sm:flex-row">
      <h2 class="sr-only">Flash collection</h2>
      <div class="mb-8 flex items-center justify-between gap-12 px-4 md:w-1/3 md:justify-center">
        <button
          @click="slider.slidePrev()"
          class="flex items-center gap-3 transition hover:text-brand-400"
          type="button">
          <IconArrowOnly class="h-4 w-4 fill-white" />
          <span class="text-md font-light">Previous</span>
        </button>
        <button
          @click="slider.slideNext()"
          class="flex flex-row-reverse items-center gap-3 transition hover:text-brand-400"
          type="button">
          <IconArrowOnly class="h-4 w-4 rotate-180 fill-white" />
          <span class="text-md font-light">Next</span>
        </button>
      </div>
      <ClientOnly>
        <div class="-mt-8 overflow-hidden px-4 pt-8 md:w-2/3">
          <Swiper
            @swiper="onSwiper"
            :modules="[SwiperNavigation, SwiperAutoplay]"
            :slides-per-view="3"
            :speed="800"
            :breakpoints="breakpointsOptions"
            :autoplay="{
              duration: 2000,
            }"
            :looped-slides="2"
            :space-between="40"
            :loop="true"
            class="!overflow-visible">
            <SwiperSlide
              v-for="item in items"
              :key="item.name"
              class="!h-auto">
              <article class="flex h-full flex-col border-2 pb-3 pl-4 pr-8 md:pb-7">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="h-24 -translate-y-[15%] object-contain" />
                <h3 class="md:text-medium truncate whitespace-nowrap text-sm">{{ item.name }}</h3>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </ClientOnly>
    </div>
    <SectionFlashLines />
  </section>
</template>

<script setup>
import cross1 from "~/assets/images/converted/cross1.webp";
import cross2 from "~/assets/images/converted/cross2.webp";
import cross3 from "~/assets/images/converted/cross3.webp";
import cross4 from "~/assets/images/converted/cross4.webp";
import cross5 from "~/assets/images/converted/cross5.webp";
import cross6 from "~/assets/images/converted/cross6.webp";

const slider = ref(null);
const onSwiper = swiper => {
  slider.value = swiper;
};

const breakpointsOptions = {
  320: {
    slidesPerView: 1.5,
    spaceBetween: 25,
  },
  575: {
    slidesPerView: 1.8,
  },
  768: {
    slidesPerView: 2.3,
  },
  1024: {},
  1280: {
    slidesPerView: 3,
  },
};

const items = [
  {
    name: "Nike Cosmic Unity 2",
    image: cross1,
  },
  {
    name: "NIKE SB Dunk High",
    image: cross2,
  },
  {
    name: "NIKE UNO Dunk low",
    image: cross3,
  },
  {
    name: "NIKE VULKANO Inf",
    image: cross4,
  },
  {
    name: "NIKE Lorex Extra",
    image: cross5,
  },
  {
    name: "NIKE SB Dino",
    image: cross6,
  },
];
</script>

<style lang="scss"></style>
