<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
import heroBackground from "./images/backgroundhero.webp";

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: heroBackground,
      fetchpriority: "high",
    },
  ],
});

const links = ref<ButtonProps[]>([
  {
    label: "Solicitar inspeção",
    to: "#contato",
    color: "primary",
    variant: "solid",
    size: "xl",
    trailingIcon: "i-lucide-arrow-right",
    ui: {
      base: "py-4 px-8 rounded-lg font-semibold",
    },
  },
]);
</script>

<template>
  <div class="relative">
    <UPageHero
      style="font-family: var(--font-sans)"
      :ui="{
        root: 'relative isolate overflow-hidden bg-[#0a1b2e]',
        container: 'w-full py-24 sm:py-28 lg:py-32 text-left',
        wrapper: 'max-w-2xl',
        headline: 'mb-4',
        title:
          'text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-left',
        description: 'text-white/80 max-w-xl text-base sm:text-lg text-left',
        links: 'justify-start mt-8',
      }"
      :links="links"
    >
      <template #top>
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <img
            :src="heroBackground"
            alt=""
            width="1672"
            height="941"
            fetchpriority="high"
            decoding="async"
            class="h-full w-full object-cover object-right"
          />
          <div
            class="absolute inset-0 bg-linear-to-r from-[#0a1b2e] via-[#0a1b2e]/70 to-transparent"
          />
          <div class="absolute inset-0 bg-[#0a1b2e]/70" />
        </div>
      </template>

      <template #headline>
        <p
          class="text-xs font-medium tracking-[0.2em] text-white/70 uppercase sm:text-sm text-left"
        >
          Inspeção veicular profissional
        </p>
      </template>

      <template #title>
        Seu veículo,
        <span class="text-primary-500">inspecionado</span>
        <span class="text-primary-500"
          ><br />
          com confiança</span
        >
      </template>

      <template #description>
        <span class="block"
          >Segurança, qualidade e precisão em cada detalhe com equipe
          qualificada e acreditada pelo
        </span>
        <span class="block">
          <span class="text-primary-500">Inmetro</span>.
        </span>
      </template>
    </UPageHero>
  </div>
</template>
