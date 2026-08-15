<script setup lang="ts">
import faixadaprincipal from "./images/faixadaprincipal.webp";
import faixadasecundaria from "./images/faixadasecundaria.webp";

const items = [
  { src: faixadaprincipal, class: "basis-2/3" },
  { src: faixadasecundaria, class: "basis-2/3" },
  { src: faixadaprincipal, class: "basis-2/3" },
  { src: faixadasecundaria, class: "basis-2/3" },
  { src: faixadaprincipal, class: "basis-2/3" },
  { src: faixadasecundaria, class: "basis-2/3" },
];
</script>

<template>
  <UPageCTA
    :ui="{
      description: 'text-secondary-600 mb-10',
      root: 'ring-0',
      wrapper: 'mr-0 sm:mr-20',
      container: 'px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32',
    }"
    description="A trajetória da MGIV teve início em 28 de agosto de 2018, com a missão clara de oferecer mais segurança e conformidade técnica para os motoristas e transportadores que cruzam as estradas mineiras."
    orientation="horizontal"
    variant="naked"
  >
    <template #title>
      <span
        class="text-primary-500 mb-5 block text-xs font-medium tracking-[0.2em] uppercase sm:text-sm"
      >
        Quem somos
      </span>
      <span class="text-primary-700 text-3xl sm:text-5xl">Conheça a nossa</span>
      <span class="text-primary-500 text-3xl sm:text-5xl"> história </span>
    </template>

    <!-- O slot #body do UPageCTA fica logo abaixo da descrição. -->
    <template #body>
      <AppSectionNumbers />
    </template>
    <UCarousel
      v-slot="{ item }"
      loop
      auto-scroll
      :watch-drag="false"
      :items="items"
      :ui="{ item: 'basis-1/3' }"
    >
      <!-- width/height com a proporção real do arquivo: atributos fora de
           proporção são apontados pelo Lighthouse e causam reflow. -->
      <img
        :src="item.src"
        alt="Instalações e serviços da MGIV"
        width="700"
        height="490"
        class="h-full w-full rounded-lg object-cover"
        loading="lazy"
        decoding="async"
      />
    </UCarousel>
  </UPageCTA>
</template>
