<template>
  <div class="overflow-hidden relative flex flex-col min-h-screen">
    <TheHeader />
    <main class="grow-1">
       <slot />
    </main>
    <TheFooter />
  </div>
</template>
