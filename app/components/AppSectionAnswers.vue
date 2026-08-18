<script setup lang="ts">
const items = [
  {
    label: "Quais documentos preciso levar para a vistoria?",
    content:
      "É necessário apresentar o documento do veículo (CRV/CRLV), documento pessoal com foto do proprietário e, em casos de modificação, a nota fiscal das peças instaladas. Nossa equipe orienta sobre a documentação específica de cada tipo de laudo.",
  },
  {
    label: "Quanto tempo leva o processo de regularização?",
    content:
      "Na maioria dos casos, a inspeção é concluída no mesmo dia. O prazo para emissão do laudo e liberação junto aos órgãos competentes pode variar conforme o tipo de serviço e a análise técnica necessária.",
  },
  {
    label: "Vocês atendem veículos pesados e motocicletas?",
    content:
      "Sim! Contamos com estrutura para atender toda a frota, de motocicletas a caminhões e carretas, incluindo veículos de transporte de produtos perigosos e transporte escolar.",
  },
];
</script>

<template>
  <div class="bg-white py-10">
    <UContainer class="mb-16">
      <div class="relative py-8 text-left sm:text-center">
        <div class="flex flex-col items-left gap-4 sm:items-center">
          <h2
            class="text-primary-700 text-3xl text-pretty font-bold sm:text-4xl"
          >
            <span class="text-primary-800"> Perguntas </span>
            <span class="text-primary-500"> Frequentes </span>
          </h2>
        </div>
      </div>

      <UAccordion
        type="multiple"
        :items="items"
        :unmount-on-hide="false"
        :default-value="['0']"
        :ui="{
          root: 'mx-auto flex flex-col gap-3 w-full sm:w-1/2',
          item: 'rounded-lg  ring-gray-200/70  border-b-0',
          trigger: 'text-secondary-700 text-base font-semibold p-4',
          body: 'text-secondary-500 text-base px-4',
        }"
      />
    </UContainer>
  </div>
</template>
