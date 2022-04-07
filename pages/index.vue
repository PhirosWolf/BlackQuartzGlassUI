<script lang="ts" setup>
function toggleDarkMode () {
  const html = document.querySelector('html');
  html?.classList?.toggle('dark');
}
</script>

<template>
  <header>
    <h1 class="text-5xl text-center">BlackQuartzGlass UI</h1>
  </header>
  <div class="components flex flex-col align-center px-20">
    <button
      @click="toggleDarkMode"
    >Toggle dark mode</button>
    <section
      id="bases"
    >
      <h2 class="text-4xl">Bases</h2>
      <div class="flex flex-row flex-wrap space-x-2 space-y-2">
        <BaseButton>BaseButton</BaseButton>
        <BaseButtonPrimary>BaseButtonPrimary</BaseButtonPrimary>
      </div>
    </section>
    <section
      id="buttons"
    >
      <h2 class="text-4xl">Buttons</h2>
      <div class="flex flex-row flex-wrap space-x-2 space-y-2">
        <ButtonPrimaryLarge class="max-w-sm">ButtonPrimaryLarge</ButtonPrimaryLarge>
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.components {
  section {
    @apply pl-4 my-4 space-y-2 flex flex-col;

    h2, h3, h4, h5, h6 {
      @apply w-full border-b border-black dark:border-white transition-all duration-300;
    }
  }
}
</style>
