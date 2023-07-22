<template>
  <section class="">
    <div class="mx-auto flex max-w-[1440px]">
      <h2 class="sr-only">Flash collection</h2>
      <div class="flex w-1/3 items-center justify-center gap-12">
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
        <div class="-mt-8 w-2/3 overflow-hidden px-4 pt-8">
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
              <article class="flex h-full flex-col border-2 pb-7 pl-4 pr-8">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="-translate-y-[15%]" />
                <h3>{{ item.name }}</h3>
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
const slider = ref(null);
const onSwiper = swiper => {
  slider.value = swiper;
};

const breakpointsOptions = {
  575: {},
  768: {
    slidesPerView: 2.3
  },
  1024: {
   
  },
  1280: {
    slidesPerView: 3
  },
};

const items = [
  {
    name: "Nike Cosmic Unity 2",
    image: "images/cross1.png",
  },
  {
    name: "NIKE SB Dunk High",
    image: "images/cross2.png",
  },
  {
    name: "NIKE UNO Dunk low",
    image: "images/cross3.png",
  },
  {
    name: "NIKE VULKANO Inf",
    image: "images/cross4.png",
  },
  {
    name: "NIKE Lorex Extra",
    image: "images/cross5.png",
  },
  {
    name: "NIKE SB Dino",
    image: "images/cross6.png",
  },
];
</script>

<style lang="scss"></style>
