<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * `top` recorta o topo da seção (transição vinda da seção de cima).
     * `bottom` recorta a base (gira o traçado em 180°).
     */
    position?: "top" | "bottom";
  }>(),
  { position: "top" },
);
</script>

<template>
  <!-- A cor vem de `currentColor`: aplique uma classe de texto no uso
       (ex. `text-white`) com a cor da seção ADJACENTE, não a desta.
       `preserveAspectRatio="none"` deixa o traçado esticar na altura definida. -->
  <svg
    class="pointer-events-none absolute inset-x-0 w-full"
    :class="position === 'top' ? 'top-0' : 'bottom-0 rotate-180'"
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M0 0v100S0 4 500 4s500 96 500 96V0H0Z"
      fill="currentColor"
    />
  </svg>
</template>
