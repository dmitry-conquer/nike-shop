<template>
  <div class="absolute  ">
    <button
      type="button"
      :aria-label="text"
      :data-microtip-position="position"
      role="tooltip"
      class="grid w-10 h-10 sm:h-14 sm:w-14 place-content-center rounded-full bg-white text-base sm:text-xl text-black shadow-xl">
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
