<script setup lang="ts">
const menulinks = [
  { label: "Início", to: "#inicio" },
  { label: "Sobre", to: "#sobre" },
  { label: "Serviços", to: "#servicos" },
  { label: "Local", to: "#local" },
  { label: "Contato", to: "#contato" },
];
</script>

<template>
  <header
    class="bg-(--ui-bg)/90 sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-md"
    style="font-family: var(--font-sans)"
  >
    <UContainer class="flex h-20 items-center justify-between">
      <NuxtLink to="#inicio">
        <img src="./images/logo-4.svg" alt="Logo" class="h-12 w-auto" />
      </NuxtLink>

      <nav class="hidden md:flex gap-8">
        <ULink
          v-for="link in menulinks"
          :key="link.to"
          :to="link.to"
          active-class="text-primary-400"
          inactive-class="text-secondary-500 hover:text-primary-400 transition-colors duration-200"
          class="text-sm"
        >
          {{ link.label }}
        </ULink>
      </nav>
    </UContainer>
  </header>
</template>
