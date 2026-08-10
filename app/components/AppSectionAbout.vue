<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from "@nuxt/ui";

const features = ref<PageFeatureProps[]>([
  {
    title: "Qualidade",
    description:
      "Combinamos uma equipe altamente qualificada com a agilidade que o seu transporte exige com facilidade de acesso.",
    icon: "lucide-badge-check",
    ui: {
      title: "text-secondary-900",
    },
  },
  {
    title: "Infraestrutura",
    description:
      "Oferecemos uma infraestrutra de ponta com amplo estacionamento e unidade descontaminadora anexada.",
    icon: "lucide-cog",
    ui: {
      title: "text-secondary-900",
    },
  },
  {
    title: "Conforto",
    description:
      "Priorizamos o bem-estar do motorista com vestiários 24H e sala de espera confortável, equipada com ar-condicionado e TV.",
    icon: "lucide-armchair",
    ui: {
      title: "text-secondary-900",
    },
  },
]);
</script>

<template>
  <UPageSection
    title="Você regulariza seu veículo com conforto"
    description="Nossa empresa é referência em inspeção e regularização veicular, oferecendo suporte técnico completo para quem busca segurança e conformidade legal."
    headline="QUEM SOMOS & DIFERENCIAL"
    orientation="horizontal"
    :features="features"
    :ui="{
      title: 'text-primary-800',
      description: 'text-secondary-600',
      headline: 'text-secondary-500',
      features: 'gap-8',
      container: 'lg:items-start',
    }"
  >
    <img
      src="https://mgiv.com.br/img/fotos/sobre2.webp"
      alt="Imagem de destaque"
      class="hidden md:block m-auto w-120 rounded-lg"
      loading="lazy"
    />
    <template #title>
      <span class="text-primary-700">Você regulariza seu</span>
      <span class="text-primary-500"> veículo </span>
      <span class="text-primary-700"> com conforto</span>
    </template>
  </UPageSection>
</template>
