<script setup lang="ts">
import "remixicon/fonts/remixicon.css";

useHead({
  htmlAttrs: {
    class: "dark",
  },
});
</script>

<template>
  <main class="min-h-screen bg-zinc-900 py-16 text-zinc-100">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>
</template>
