<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Contato",
    to: "/docs/getting-started",
    color: "primary",
    variant: "solid",
  },
  {
    label: "Serviços",
    to: "/docs/getting-started/theme/design-system",
    color: "neutral",
    variant: "subtle",
    class: "ring-secondary-400",
  },
]);
</script>

<template>
  <UPageHero
    class="mb-10"
    style="font-family: var(--font-sans)"
    :ui="{
      container: 'w-full md:justify-center md:text-center',
      title: 'text-primary-700  max-w-xl mx-auto md:text-8xl',
      description: 'text-secondary-800 max-w-lg mx-auto md:text-lg',
      links: 'text-secondary-900',
    }"
    :links="links"
  >
    <template #title>
      Seu veículo
      <span class="text-primary-500">Inspecionado</span>
    </template>
    <template #description>
      <span class="text-secondary-700"
        >Com equipe técnica qualificada, certificada e acreditada pelo</span
      >
      <span class="text-primary-500"> Inmetro</span>
    </template>
  </UPageHero>
</template>
