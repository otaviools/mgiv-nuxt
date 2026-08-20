<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const items: NavigationMenuItem[] = [
  { label: "Início", to: "#inicio" },
  { label: "Quem somos", to: "#sobre" },
  { label: "Serviços", to: "#servicos" },
  { label: "Local", to: "#local" },
  { label: "Contato", to: "#contato" },
  { label: "FAQ", to: "#faq" },
];
</script>

<template>
  <UContainer class="pt-16 sm:pt-24 lg:pt-32">
    <UFooter class="text-secondary-600">
      <template #left>
        <p class="text-muted text-sm">
          MGIV Inspeção Veícular LTDA © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu
        :items="items"
        variant="link"
        :ui="{
          root: 'flex-wrap justify-center',
          list: 'flex-wrap justify-center gap-x-1 gap-y-1',
          link: 'hover:text-primary',
        }"
      />

      <template #right>
        <UButton
          icon="i-simple-icons-google"
          color="neutral"
          variant="ghost"
          to="https://google.com"
          target="_blank"
          aria-label="Google"
        />
        <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          to="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        />
      </template>
    </UFooter>
    <USeparator
      class="text-secondary-600 mx-auto max-w-xl py-10"
      color="secondary"
    >
      <a
        href="https://devotaviosantos.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-primary text-sm transition-colors"
        >Design e Desenvolvimento por Otávio Santos</a
      >
    </USeparator>
  </UContainer>
</template>
