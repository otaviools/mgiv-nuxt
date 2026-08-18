<script setup lang="ts">
const menulinks = [
  { label: "Início", to: "#inicio" },
  { label: "Quem somos", to: "#historia" },
  { label: "Serviços", to: "#servicos" },
  { label: "Local", to: "#local" },
  { label: "Contato", to: "#contato" },
];

const isMenuOpen = ref(false);
</script>

<template>
  <header
    class="bg-default sticky top-0 z-50 w-full border-b border-gray-200/60"
    style="font-family: var(--font-sans)"
  >
    <UContainer class="flex h-20 items-center justify-between">
      <NuxtLink to="#inicio">
        <img src="./images/logo-4.svg" alt="Logo" class="h-12 w-auto" />
      </NuxtLink>
      <USlideover
        v-model:open="isMenuOpen"
        side="right"
        :ui="{
          /* `duration`/`ease` alongam a animação de slide padrão (200ms). */
          content:
            /* `divide-y-0` remove a linha padrão entre o header (X) e o corpo. */
            'w-72 max-w-[80vw] divide-y-0 data-[state=open]:animate-[slide-in-from-right_400ms_ease-out] data-[state=closed]:animate-[slide-out-to-right_300ms_ease-in]',
          overlay:
            'backdrop-blur-sm data-[state=open]:animate-[fade-in_400ms_ease-out] data-[state=closed]:animate-[fade-out_300ms_ease-in]',
        }"
        class="md:hidden"
      >
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="ghost"
          size="xl"
          aria-label="Abrir menu"
          class="text-primary-700 transition-colors duration-200"
        />

        <template #body>
          <nav class="flex flex-col gap-1" @click="isMenuOpen = false">
            <ULink
              v-for="link in menulinks"
              :key="link.to"
              :to="link.to"
              inactive-class="text-secondary-700"
              class="rounded-lg px-3 py-3 text-base transition-colors duration-200"
            >
              {{ link.label }}
            </ULink>
          </nav>
        </template>
      </USlideover>

      <nav class="hidden md:flex items-center gap-8">
        <ULink
          v-for="link in menulinks"
          :key="link.to"
          :to="link.to"
          inactive-class="text-secondary-700 transition-colors duration-200"
          class="inline-flex items-center text-sm"
          :class="
            link.to === '#contato'
              ? 'rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-700'
              : ''
          "
        >
          {{ link.label }}
        </ULink>
      </nav>
    </UContainer>
  </header>
</template>
