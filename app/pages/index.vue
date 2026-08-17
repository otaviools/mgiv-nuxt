<template>
  <AppHeader />

  <!-- `scroll-mt-(--header-h)` compensa a altura exata do header fixo,
       para a âncora encaixar o topo da seção logo abaixo dele.
       A variável está definida em app/assets/css/main.css. -->
  <AppHero id="inicio" class="scroll-mt-(--header-h)" />
  <AppCTAHistory id="historia" class="scroll-mt-(--header-h)" />
  <AppCards id="servicos" class="scroll-mt-(--header-h)" />
  <AppSectionAbout id="sobre" class="scroll-mt-(--header-h)" />
  <AppSectionLocal id="local" class="scroll-mt-(--header-h)" />
  <AppContact id="contato" class="scroll-mt-(--header-h)" />
  <AppFooter />
</template>
