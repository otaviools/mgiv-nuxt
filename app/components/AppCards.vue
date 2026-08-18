<script setup lang="ts">
const services = [
  {
    icon: "i-lucide-wrench",
    title: "Modificações",
    description:
      "Regularização técnica completa para veículos rebaixados e motocicletas modificadas com inspeção necessária para alteração.",
  },
  {
    icon: "i-lucide-car",
    title: "Veículos",
    description:
      "Soluções completas para toda a frota: de veículos leves e motocicletas a caminhões, carretas e ônibus.",
  },
  {
    icon: "i-lucide-truck",
    title: "Pesados",
    description:
      "Soluções em engenharia veicular para caminhões, incluindo troca de carroceria, alongamento ou encurtamento de chassi.",
  },
  {
    icon: "i-lucide-file-text",
    title: "Documentos",
    description:
      "Vistorias rigorosas para a emissão de Laudo Escolar e Laudo Rural, suporte completo para regularizações junto à ANTT e DERR.",
  },
  {
    icon: "i-lucide-shield-check",
    title: "Segurança",
    description:
      "Inspeção detalhada para veículos leves, pesados e motocicletas que passaram por sinistro.",
  },
  {
    icon: "i-lucide-award",
    title: "Certificados",
    description:
      "Certificados CIV (Certificado de Inspeção Veicular) e CIPP (Certificado de Inspeção para o Transporte de Produtos Perigosos).",
  },
];
</script>

<template>
  <UContainer class="mb-16 sm:mb-32">
    <div class="relative py-8">
      <div
        class="text-secondary-500 mb-5 block text-xs font-bold uppercase sm:text-sm"
      >
        QUALIDADE
      </div>
      <div
        class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <h2 class="text-primary-700 text-3xl text-pretty font-bold sm:text-4xl">
          Serviços
        </h2>
      </div>
    </div>

    <UPageGrid class="lg:grid-cols-3">
      <UPageCard
        :ui="{
          root: 'rounded-2xl ring-1 ring-gray-200/70 shadow-sm',
          title: 'text-secondary-700',
          description: 'text-secondary-500',
          leading:
            'flex size-12 items-center justify-center rounded-xl bg-primary-100',
          leadingIcon: 'size-7 text-primary-700',
        }"
        v-for="service in services"
        :key="service.title"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
        variant="solid"
      />
    </UPageGrid>
  </UContainer>
</template>
