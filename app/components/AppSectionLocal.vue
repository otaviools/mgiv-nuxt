<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from "@nuxt/ui";

const center: [number, number] = [-45.9036, -19.8347];

// O maplibre-gl é o maior pedaço de JS do site. Carregamos o mapa só quando a
// seção entra na viewport, em vez de junto do bundle inicial.
const mapSlot = useTemplateRef<HTMLElement>("mapSlot");
const isMapVisible = ref(false);

onMounted(() => {
  if (!mapSlot.value) return;

  // Cobre quem entra direto em #local: a seção já está visível na montagem.
  const rect = mapSlot.value.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    isMapVisible.value = true;
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return;
      isMapVisible.value = true;
      observer.disconnect();
    },
    { rootMargin: "200px" },
  );

  observer.observe(mapSlot.value);
  onBeforeUnmount(() => observer.disconnect());
});

const features = ref<PageFeatureProps[]>([
  {
    title: "Horário de funcionamento",
    description: "Segunda à Sexta - 08:00 - 17:45",
    icon: "lucide-clock",
    ui: {
      title: "text-secondary-900",
      description: "text-secondary-600",
    },
  },
  {
    title: "Localização",
    description: "Rodovia BR 262, Km 577 Zona Rural, Córrego Danta -MG",
    icon: "lucide-map-pin",
    ui: {
      title: "text-secondary-900",
      description: "text-secondary-600",
    },
  },
]);
const links = ref<ButtonProps[]>([
  {
    label: "Ver no mapa",
    to: "/docs/getting-started",
    trailingIcon: "lucide-arrow-right",
    color: "primary",
    ui: {
      base: "py-3 px-4",
    },
  },
]);
</script>

<template>
  <UPageSection
    class="mb-16"
    description="Localizada ao lado da BR-262, facilitando o fluxo de transportadoras de produtos perigosos, ônibus e veículos modificados."
    orientation="horizontal"
    :features="features"
    :ui="{
      title: 'text-primary-500',
      description: 'text-secondary-600',
      features: 'gap-8',
      container: 'lg:items-center',
      wrapper: 'lg:order-last',
    }"
    :links="links"
  >
    <template #title>
      <span class="text-primary-800">Fácil de chegar, sempre</span>
      <span class="text-primary-500"> perto de você</span>
    </template>
    <div ref="mapSlot" class="w-full">
      <ClientOnly>
        <LazyAppLocalMap v-if="isMapVisible" :center="center" />
        <div v-else class="bg-secondary-100 h-96 w-full animate-pulse rounded-lg" />

        <template #fallback>
          <div class="bg-secondary-100 h-96 w-full animate-pulse rounded-lg" />
        </template>
      </ClientOnly>
    </div>
  </UPageSection>
</template>
