<template>
  <section class="container flex gap-4 py-[3.5rem]">
    <h2 class="sr-only">Delivery</h2>
    <div
      v-for="item in items"
      :key="item.title"
      class="grid flex-1 grid-cols-[1.5rem_1fr] gap-x-4 gap-y-2 items-center grid-rows-2">
      <component
        :is="item.icon"
        class="row-span-2" />
      <h3>{{ item.title }}</h3>
      <p class="font-light">{{ item.description }}</p>
    </div>
  </section>
</template>

<script setup>
import IconCar from "~/components/Icon/IconCar.vue";
import IconClock from "~/components/Icon/IconClock.vue";
import IconShield from "~/components/Icon/IconShield.vue";
import IconPackage from "~/components/Icon/IconPackage.vue";
const items = [
  {
    title: "Free Delivery",
    description: "From $29.99",
    icon: IconCar,
  },
  {
    title: "Free Withdrawal 1h",
    description: "In store",
    icon: IconClock,
  },
  {
    title: "100% Secure Payment",
    description: "At your service",
    icon: IconShield,
  },
  {
    title: "Returns & Exchanges",
    description: "Offered 365 days",
    icon: IconPackage,
  },
];
</script>
