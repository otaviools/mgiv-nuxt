<script setup lang="ts">
const title = "MGIV - Inspeção Veícular LTDA";

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  htmlAttrs: {
    lang: "pt-br",
  },
});

useSeoMeta({
  title,
  ogTitle: title,
  description: "Inspeção Veicular LTDA",
});
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
