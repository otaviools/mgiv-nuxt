<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from "@nuxt/ui";

const center: [number, number] = [-45.9036, -19.8347];

const mapSlot = useTemplateRef<HTMLElement>("mapSlot");
const isMapVisible = ref(false);

onMounted(() => {
  if (!mapSlot.value) return;
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
      leading:
        "flex size-12 items-center justify-center rounded-xl bg-primary-100 p-4",
      leadingIcon: "size-7, text-primary-700",
    },
  },
  {
    title: "Localização",
    description: "Rodovia BR 262, Km 577 Zona Rural, Córrego Danta -MG",
    icon: "lucide-map-pin",
    ui: {
      title: "text-secondary-900",
      description: "text-secondary-600",
      leading:
        "flex size-12 items-center justify-center rounded-xl bg-primary-100 p-4",
      leadingIcon: "size-7, text-primary-700",
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
    description="Localizada ao lado da BR-262, facilitando o fluxo de transportadoras de produtos perigosos, ônibus e veículos modificados."
    orientation="horizontal"
    :features="features"
    :ui="{
      title: 'text-primary-500 hidden lg:block',
      description: 'text-secondary-600',
      features: 'gap-8',
      container: 'lg:items-center',
      wrapper: 'order-last',
    }"
    :links="links"
  >
    <template #title>
      <span class="text-primary-800">Fácil acesso, </span>
      <span class="text-primary-500"> perto de você !</span>
    </template>
    <div class="w-full">
      <h2
        aria-hidden="true"
        class="mb-6 block text-3xl font-bold tracking-tight text-pretty sm:text-4xl lg:hidden"
      >
        <span class="text-primary-800">Fácil acesso, </span>
        <span class="text-primary-500"> perto de você !</span>
      </h2>
      <div ref="mapSlot" class="w-full">
        <ClientOnly>
          <LazyAppLocalMap v-if="isMapVisible" :center="center" />
          <div
            v-else
            class="bg-secondary-100 h-96 w-full animate-pulse rounded-lg"
          />

          <template #fallback>
            <div
              class="bg-secondary-100 h-96 w-full animate-pulse rounded-lg"
            />
          </template>
        </ClientOnly>
      </div>
    </div>
  </UPageSection>
</template>
