<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import heroBackground from "./images/backgroundhero.png";

const links = ref<ButtonProps[]>([
  {
    label: "Contato",
    to: "#contato",
    color: "primary",
    variant: "solid",
    ui: {
      base: "py-3 px-4",
    },
  },
  {
    label: "Serviços",
    to: "#servicos",
    color: "neutral",
    variant: "subtle",
    class: "ring-secondary-400",
    ui: {
      base: "py-3 px-4",
    },
  },
]);
</script>

<template>
  <UPageHero
    class="mb-10"
    style="font-family: var(--font-sans)"
    :ui="{
      root: 'relative isolate overflow-hidden',
      container: 'w-full md:justify-center md:text-center',
      title: 'text-primary-800  max-w-xl mx-auto md:text-8xl',
      description: 'text-secondary-800 max-w-lg mx-auto md:text-lg',
      links: 'text-secondary-900',
    }"
    :links="links"
  >
    <template #top>
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <img
          :src="heroBackground"
          alt=""
          class="h-full w-full scale-100 object-cover blur-sm"
        />
        <div class="absolute inset-0 bg-white/60" />
        <div
          class="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-[#f7f7f7]"
        />
      </div>
    </template>
    <template #title>
      Seu veículo
      <span class="text-primary-600">Inspecionado</span>
    </template>
    <template #description>
      <span class="text-secondary-700"
        >Com equipe técnica qualificada, certificada e acreditada pelo</span
      >
      <span class="text-primary-600"> Inmetro</span>
    </template>
  </UPageHero>
</template>
