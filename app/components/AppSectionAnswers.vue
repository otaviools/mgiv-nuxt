<script setup lang="ts">
const items = [
  {
    number: "1.",
    label: "Quais documentos preciso levar para a vistoria?",
    content:
      "É necessário apresentar o documento do veículo (CRV/CRLV), documento pessoal com foto do proprietário e, em casos de modificação, a nota fiscal das peças instaladas. Nossa equipe orienta sobre a documentação específica de cada tipo de laudo.",
  },
  {
    number: "2.",
    label: "Quanto tempo leva o processo de regularização?",
    content:
      "Na maioria dos casos, a inspeção é concluída no mesmo dia. O prazo para emissão do laudo e liberação junto aos órgãos competentes pode variar conforme o tipo de serviço e a análise técnica necessária.",
  },
  {
    number: "3.",
    label: "Vocês atendem veículos pesados e motocicletas?",
    content:
      "Sim! Contamos com estrutura para atender toda a frota, de motocicletas a caminhões e carretas, incluindo veículos de transporte de produtos perigosos e transporte escolar.",
  },
];
</script>

<template>
  <div class="bg-primary-100 relative">
    <AppSectionDivider class="h-16 text-(--ui-bg) sm:h-30" />

    <UContainer
      class="grid grid-cols-1 sm:grid-cols-2 sm:items-start relative isolate py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div class="text-left">
        <div class="flex flex-col items-left gap-4">
          <span
            class="text-secondary-500 text-center sm:text-left block text-xs font-bold uppercase sm:text-sm"
          >
            TIRE SUAS DÚVIDAS
          </span>
          <h2
            class="text-primary-700 text-2xl text-center sm:text-left text-pretty font-bold sm:text-4xl mb-4 sm:mb-8"
          >
            <span class="text-primary-800"> Perguntas </span>
            <span class="text-primary-500"> Frequentes </span>
          </h2>
          <UPageCard
            title="Contato"
            :ui="{
              root: 'w-full max-w-[480px] p-2 ring-1 ring-gray-300/60 mb-10 sm:mb-none',
              title: 'text-primary-800 mb-4',
              description: 'text-secondary-600',
            }"
          >
            <template #description>
              Ficou com alguma dúvida? Entre em contato com nossa equipe pelo
              Whatsapp
              <a
                href="https://wa.me/5534988248472"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-500 underline"
                >(34) 98824-8472</a
              >
              - Marcelo Administrador
            </template>
          </UPageCard>
        </div>
      </div>

      <UAccordion
        type="multiple"
        :items="items"
        :unmount-on-hide="false"
        :default-value="['0']"
        :ui="{
          root: 'flex flex-col gap-3 w-full self-center',
          item: 'rounded-lg ring-1 bg-white p-2  ring-gray-200/70  border-b-0',
          trigger: 'text-secondary-700 text-base font-semibold p-4',
          body: 'text-secondary-500 text-base px-4',
        }"
      >
        <template #default="{ item }">
          <span class="text-primary-500">{{ item.number }}</span>
          {{ item.label }}
        </template>
      </UAccordion>
    </UContainer>
  </div>
</template>
