<script setup lang="ts">
const menulinks = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Local", to: "/local" },
  { label: "Contato", to: "/contato" },
];
</script>

<template>
  <header
    class="w-full border-b border-gray-200"
    style="font-family: var(--font-sans)"
  >
    <UContainer class="flex items-center justify-between h-20">
      <NuxtLink to="/">
        <img src="./images/logo-4.svg" alt="Logo" class="h-12 w-auto" />
      </NuxtLink>

      <nav class="hidden md:flex gap-8">
        <ULink
          v-for="link in menulinks"
          :key="link.to"
          :to="link.to"
          active-class="text-primary-500"
          inactive-class="text-gray-500 hover:text-primary-400 transition-colors duration-200"
          class="text-sm"
        >
          {{ link.label }}
        </ULink>
      </nav>
    </UContainer>
  </header>
</template>
