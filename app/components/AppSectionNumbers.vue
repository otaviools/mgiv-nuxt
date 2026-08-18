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
  <div>
    <UPageGrid
      class="grid-cols-3 gap-2 divide-gray-300 sm:grid-cols-3 sm:gap-8"
    >
      <UPageCard
        :ui="{
          wrapper:
            'w-full items-center lg:items-start bg-none md:py-4 rounded-lg',
          /* Sem padding horizontal para o primeiro número encostar na mesma
             borda esquerda do container (título e descrição). */
          container: 'items-start text-center px-0 py-2 sm:px-0 sm:py-6',
          title: 'text-primary-700 font-bold text-3xl sm:text-5xl',
          description: 'text-secondary-700 text-xs sm:text-sm',
        }"
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        variant="ghost"
      />
    </UPageGrid>
  </div>
</template>
