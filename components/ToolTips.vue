<template>
  <div class="absolute  -translate-x-1/2 -translate-y-1/2">
    <button
      type="button"
      :aria-label="text"
      :data-microtip-position="position"
      role="tooltip"
      class="grid h-14 w-14 place-content-center rounded-full bg-white text-xl text-black shadow-xl">
      +
    </button>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss"></style>
