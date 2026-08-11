<script setup lang="ts">
import type { formField } from "#build/ui";

const form = reactive({
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
});
</script>

<template>
  <UPageSection
    headline="SUPORTE TÉCNICO"
    orientation="horizontal"
    :ui="{
      headline: 'text-secondary-500',
      title: 'text-3xl sm:text-4xl',
      description: 'text-secondary-600',
    }"
  >
    <template #title>
      <span class="text-primary-800">Entre em </span>
      <span class="text-primary-500">contato</span>
      <span class="text-primary-800"> e</span>
      <br />
      <span class="text-primary-500">agende</span>
      <span class="text-primary-800"> sua inspeção</span>
    </template>

    <template #description>
      Nossa equipe está pronta para tirar suas dúvidas sobre regularização,
      laudos técnicos e inspeções. Preencha o formulário ou envie para
      <a
        href="mailto:gerencia.mgiv@hotmail.com"
        class="text-primary-500 font-medium"
        >gerencia.mgiv@hotmail.com</a
      >
    </template>

    <template #body>
      <UForm
        :state="form"
        class="text-secondary-700 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <UFormField label="Nome" name="nome" required>
          <UInput
            v-model="form.nome"
            icon="lucide-user"
            placeholder="Nome Sobrenome"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Email" name="email" required>
          <UInput
            v-model="form.email"
            type="email"
            icon="lucide-mail"
            placeholder="nome@email.com"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Telefone" name="telefone" required>
          <UInput
            v-model="form.telefone"
            icon="lucide-phone"
            placeholder="34999999999"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Mensagem" name="mensagem" required>
          <UInput
            v-model="form.mensagem"
            icon="lucide-message-circle"
            placeholder="O que você precisa ?"
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          label="Enviar"
          trailing-icon="lucide-send"
          class="w-fit sm:col-span-2"
        />
      </UForm>
    </template>
  </UPageSection>
</template>
