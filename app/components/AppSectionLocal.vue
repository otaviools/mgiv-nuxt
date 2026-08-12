<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from "@nuxt/ui";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/components/ui/map";

// Coordenadas aproximadas de Córrego Danta - MG (BR-262).
// Ajuste para o ponto exato da unidade.
const center: [number, number] = [-45.9036, -19.8347];

const features = ref<PageFeatureProps[]>([
  {
    title: "Horário de funcionamento",
    description: "Segunda à Sexta - 08:00 - 17:45",
    icon: "lucide-badge-check",
    ui: {
      title: "text-secondary-900",
      description: "text-secondary-600",
    },
  },
  {
    title: "Localização",
    description: "Rodovia BR 262, Km 577 Zona Rural, Córrego Danta -MG",
    icon: "lucide-cog",
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
  },
]);
</script>

<template>
  <UPageSection
    title="BR-262"
    description="Localizada ao lado da BR-262, facilitando o fluxo de transportadoras de produtos perigosos, ônibus e veículos modificados."
    orientation="horizontal"
    :features="features"
    :ui="{
      title: 'text-primary-500',
      description: 'text-secondary-600',
      features: 'gap-8',
      container: 'lg:items-start',
      wrapper: 'lg:order-last',
    }"
    :links="links"
  >
    <ClientOnly>
      <Map
        :center="center"
        :zoom="13.2"
        class="h-96 w-full rounded-lg"
        :scroll-zoom="false"
        theme="light"
      >
        <MapControls />

        <MapMarker :longitude="center[0]" :latitude="center[1]">
          <MarkerContent>
            <UIcon name="i-lucide-map-pin" class="text-primary-500 size-8" />
          </MarkerContent>

          <MarkerPopup>
            <div class="text-secondary-800 text-sm">
              <p class="text-primary-700 font-bold">MGIV</p>
              <p class="text-secondary-600">Rodovia BR 262, Km 577</p>
              <p class="text-secondary-600">Córrego Danta - MG</p>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>

      <template #fallback>
        <div class="bg-secondary-100 h-96 w-full animate-pulse rounded-lg" />
      </template>
    </ClientOnly>
  </UPageSection>
</template>
