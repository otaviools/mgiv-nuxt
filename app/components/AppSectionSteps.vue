<script setup lang="ts">
import type { StepperItem } from "@nuxt/ui";

const steps = ref<StepperItem[]>([
  {
    title: "Fundação",
    description: "Agosto de 2018, início das inspeções.",
    icon: "i-lucide-flag",
  },
  {
    title: "Crescimento",
    description: "Ampliação da estrutura e da equipe técnica.",
    icon: "i-lucide-trending-up",
  },
  {
    title: "Hoje",
    description: "Acreditada pelo Inmetro e referência na região.",
    icon: "i-lucide-award",
  },
]);
</script>

<template>
  <UContainer class="mb-0 sm:mb-16 hidden sm:block">
    <UStepper
      :items="steps"
      :model-value="steps.length - 1"
      size="xl"
      :ui="{
        trigger: 'size-10 text-base sm:size-14 sm:text-xl',
        icon: 'size-5 sm:size-7 text-primary-700',
        wrapper: 'mt-2.5 sm:mt-3.5',
        separator:
          'start-[calc(50%+28px)] end-[calc(-50%+28px)] sm:start-[calc(50%+36px)] sm:end-[calc(-50%+36px)]',
        title: 'text-secondary-700 text-sm sm:text-lg',
        description: 'text-secondary-600 text-sm sm:text-base',
      }"
    >
      <!-- O indicador é só um ícone; o texto oculto dá nome acessível ao
           botão de cada etapa (o título fica fora dele, no wrapper). -->
      <template #indicator="{ item }">
        <UIcon :name="item.icon!" class="size-5 sm:size-7" />
        <span class="sr-only">{{ item.title }}</span>
      </template>
    </UStepper>
  </UContainer>
</template>
