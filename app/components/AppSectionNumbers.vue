<script setup lang="ts">
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
  <!-- Mesmo ritmo vertical do UPageSection (py-16 sm:py-24 lg:py-32) -->
  <UContainer class="mb-16 sm:mb-24 lg:mb-40">
    <UPageGrid class="grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-8">
      <UPageCard
        :ui="{
          wrapper: 'w-full items-center bg-none md:bg-white md:py-6 rounded-lg',
          container: 'items-center text-center p-2 sm:p-6',
          title: 'text-primary-500 text-3xl sm:text-4xl',
          description: 'text-secondary-700 text-xs sm:text-base',
        }"
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        variant="ghost"
      />
    </UPageGrid>
  </UContainer>
</template>
