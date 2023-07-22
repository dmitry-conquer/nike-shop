<template>
  <section class="mb-32 flex justify-center flex-wrap gap-x-16 gap-y-12 px-4">
    <img
      v-for="s in sponsors"
      :key="s"
      :src="s"
      :alt="s"
      class="aspect-video object-contain sponsor" />
  </section>
</template>

<script setup>
const sponsors = [
  "/_nuxt/assets/images/sponsores/1.png",
  "/_nuxt/assets/images/sponsores/2.png",
  "/_nuxt/assets/images/sponsores/3.png",
  "/_nuxt/assets/images/sponsores/4.png",
  "/_nuxt/assets/images/sponsores/5.png",
  "/_nuxt/assets/images/sponsores/6.png",
  "/_nuxt/assets/images/sponsores/7.png",
  "/_nuxt/assets/images/sponsores/8.png",
];

onMounted(() => {
  const {gsap} = useGsap();

  const sponsor = gsap.timeline({
    scrollTrigger: {
      trigger: ".sponsor",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  sponsor.fromTo(
    ".sponsor",
    {
      y: 100,
    },
    {
      y: 0,
      stagger: 0.2
    },
  );
});
</script>

<style lang="scss"></style>
