<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";
const items = [
  "https://picsum.photos/468/468?random=1",
  "https://picsum.photos/468/468?random=2",
  "https://picsum.photos/468/468?random=3",
  "https://picsum.photos/468/468?random=4",
  "https://picsum.photos/468/468?random=5",
  "https://picsum.photos/468/468?random=6",
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
  <UContainer>
    <UPageCTA
      :ui="{
        title: 'text-primary-700 ',
        description: 'text-secondary-600',
        root: 'ring-0',
        wrapper: 'mr-0 sm:mr-20',
      }"
      title="Conheça a nossa história"
      description="A trajetória da MGIV teve início em 28 de agosto de 2018, com a missão clara de oferecer mais segurança e conformidade técnica para os motoristas e transportadores que cruzam as estradas mineiras."
      orientation="horizontal"
      variant="naked"
    >
      <template #title>
        <span class="text-primary-700">Conheça a nossa</span>
        <span class="text-primary-500"> história </span>
      </template>
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :autoplay="{ delay: 2000 }"
        :items="items"
        :ui="{ item: 'basis-1/3' }"
      >
        <img
          :src="item"
          width="234"
          height="234"
          class="rounded-lg"
          loading="lazy"
        />
      </UCarousel>
    </UPageCTA>
  </UContainer>
</template>
