<script setup lang="ts">
import faixadaprincipal from "./images/faixadaprincipal.png";
import faixadasecundaria from "./images/faixadasecundaria.png";

const items = [
  { src: faixadaprincipal, class: "basis-2/3" },
  { src: faixadasecundaria, class: "basis-2/3" },
  { src: faixadaprincipal, class: "basis-2/3" },
  { src: faixadasecundaria, class: "basis-2/3" },
  { src: faixadaprincipal, class: "basis-2/3" },
  { src: faixadasecundaria, class: "basis-2/3" },
];

const cards = ref([
  {
    title: "99%",
    description: "Satisfação",
  },
  {
    title: "+100",
    description: "Serviços feitos",
  },
  {
    title: "+8",
    description: "Anos de exp",
  },
]);
</script>

<template>
  <UPageCTA
    :ui="{
      description: 'text-secondary-600',
      root: 'ring-0',
      wrapper: 'mr-0 sm:mr-20',
      container: 'py-16 sm:py-24 lg:py-32',
    }"
    title="Conheça a nossa história"
    description="A trajetória da MGIV teve início em 28 de agosto de 2018, com a missão clara de oferecer mais segurança e conformidade técnica para os motoristas e transportadores que cruzam as estradas mineiras."
    orientation="horizontal"
    variant="naked"
  >
    <template #title>
      <span class="text-primary-700 text-3xl sm:text-5xl">Conheça a nossa</span>
      <span class="text-primary-500 text-3xl sm:text-5xl"> história </span>
    </template>
    <UCarousel
      v-slot="{ item }"
      loop
      auto-scroll
      :watch-drag="false"
      :items="items"
      :ui="{ item: 'basis-1/3' }"
    >
      <img
        :src="item.src"
        width="234"
        height="234"
        class="h-full w-full rounded-lg object-cover"
        loading="lazy"
      />
    </UCarousel>
  </UPageCTA>
</template>
