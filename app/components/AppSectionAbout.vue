<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from "@nuxt/ui";
import caminhaoCutout from "./images/caminhao-cutout.png";

const highlights = [
  {
    icon: "i-lucide-shield-check",
    title: "Segurança",
    description: "Inspeções realizadas com rigor técnico e precisão.",
  },
  {
    icon: "i-lucide-check-circle-2",
    title: "Conformidade",
    description: "Atendemos todas as normas e exigências legais.",
  },
  {
    icon: "i-lucide-users",
    title: "Confiança",
    description: "Mais de 500 clientes atendidos com excelência.",
  },
];

const ctaLink: ButtonProps = {
  label: "Fale conosco",
  to: "#contato",
  color: "primary",
  trailingIcon: "i-lucide-arrow-right",
  ui: {
    base: "py-3 px-5 rounded-lg font-semibold shrink-0",
  },
};

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
      leadingIcon: 'size-7',
      wrapper: 'sm:mr-10',
    }"
  >
    <template #title>
      <span class="text-primary-700">Você regulariza seu</span>
      <span class="text-primary-500"> veículo </span>
      <span class="text-primary-700"> com conforto</span>
    </template>
    <div class="relative">
      <img
        src="./images/fundoabout.png"
        alt="Caminhão em inspeção veicular"
        class="rounded-lg -scale-x-100"
      />
      <img
        :src="caminhaoCutout"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute drop-shadow-2xl w-[85%] -bottom-2 -left-15"
      />
    </div>
  </UPageSection>
</template>
