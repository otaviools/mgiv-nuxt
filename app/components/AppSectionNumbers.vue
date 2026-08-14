<script setup lang="ts">
const cards = ref([
  {
    title: "99%",
    description: "Satisfação",
  },
  {
    title: "+500",
    description: "Serviços feitos",
  },
  {
    title: "+8",
    description: "Anos de exp",
  },
]);
</script>

<template>
  <UContainer class="mb-0 sm:mb-16">
    <UPageGrid
      class="grid-cols-3 gap-2 divide-x divide-gray-300 sm:grid-cols-3 sm:gap-8"
    >
      <UPageCard
        :ui="{
          wrapper: 'w-full items-center bg-none md:py-4 rounded-lg',
          container: 'items-center text-center p-2 sm:p-6',
          title: 'text-primary-500 text-3xl sm:text-6xl',
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
