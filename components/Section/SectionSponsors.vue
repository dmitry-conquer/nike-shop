<template>
  <section class="mb-32 flex flex-wrap justify-center gap-x-16 gap-y-12 px-4">
    <img
      v-for="s in sponsors"
      :key="s"
      :src="s"
      :alt="s"
      class="sponsor aspect-video object-contain" />
  </section>
</template>

<script setup>
import spon1 from "~/assets/images/sponsores/spon1.png";
import spon2 from "~/assets/images/sponsores/spon2.png";
import spon3 from "~/assets/images/sponsores/spon3.png";
import spon4 from "~/assets/images/sponsores/spon4.png";
import spon5 from "~/assets/images/sponsores/spon5.png";
import spon6 from "~/assets/images/sponsores/spon6.png";
import spon7 from "~/assets/images/sponsores/spon7.png";
import spon8 from "~/assets/images/sponsores/spon8.png";

const sponsors = [spon1, spon2, spon3, spon4, spon5, spon6, spon7, spon8];

onMounted(() => {
  const { gsap } = useGsap();

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
      stagger: 0.2,
    },
  );
});
</script>

<style lang="scss"></style>
