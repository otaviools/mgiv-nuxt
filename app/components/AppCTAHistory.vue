<script setup lang="ts">
import faixadaprincipal from "./images/faixadaprincipal.webp";

const items = [{ src: faixadaprincipal, class: "basis-full" }];
</script>

<template>
  <div class="bg-white">
    <UPageCTA
      :ui="{
        description: 'text-secondary-600',
        title: 'sm:mb-10',
        root: 'ring-0',
        wrapper: 'mr-0 sm:mr-30',
        container: 'px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32',
      }"
      description="A trajetória da MGIV teve início em 28 de agosto de 2018, com a missão clara de oferecer mais segurança e conformidade técnica para os motoristas e transportadores que cruzam as estradas mineiras."
      orientation="horizontal"
      variant="naked"
    >
      <template #title>
        <span
          class="text-secondary-500 mb-5 block text-xs font-bold uppercase sm:text-sm"
        >
          Quem somos
        </span>
        <span class="text-primary-700 text-3xl sm:text-5xl"
          >Conheça a nossa</span
        >
        <span class="text-primary-500 text-3xl sm:text-5xl"> história </span>
      </template>

      <template #body>
        <AppSectionNumbers />
      </template>
      <UCarousel
        v-slot="{ item }"
        loop
        :watch-drag="false"
        :items="items"
        :ui="{ item: 'basis-full' }"
      >
        <img
          :src="item.src"
          alt="Instalações e serviços da MGIV"
          width="1200"
          height="600"
          class="h-full w-full rounded-lg object-cover"
          loading="lazy"
          decoding="async"
        />
      </UCarousel>
    </UPageCTA>
  </div>
</template>
