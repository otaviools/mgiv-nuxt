<script setup lang="ts">
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/components/ui/map";

defineProps<{ center: [number, number] }>();
</script>

<template>
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
</template>
