<template>
  <section class="mb-32 flex justify-center gap-20">
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
  "images/sponsores/1.png",
  "images/sponsores/2.png",
  "images/sponsores/3.png",
  "images/sponsores/4.png",
  "images/sponsores/5.png",
  "images/sponsores/6.png",
  "images/sponsores/7.png",
  "images/sponsores/8.png",
];

onMounted(() => {
  const gsap = useGsap();

  const sponsor = gsap.timeline({
    scrollTrigger: {
      trigger: ".sponsor",
      start: "top bottom",
      end: "bottom top",
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
