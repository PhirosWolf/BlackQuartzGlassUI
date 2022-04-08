<script lang="ts" setup>
const isInDarkMode = ref(false);

function toggleDarkMode () {
  const html = document.querySelector('html');
  const hasClassBeenAdded = html?.classList?.toggle('dark');
  if (hasClassBeenAdded !== null) {
    isInDarkMode.value = hasClassBeenAdded;
    localStorage.setItem('isInDarkMode', hasClassBeenAdded ? 1 : 0);
  }
}

onMounted(() => {
  if (parseInt(localStorage.getItem('isInDarkMode')) === 1) {
    const html = document.querySelector('html');
    const classList = html?.classList;
    isInDarkMode.value = true;

    if (classList !== null && !classList.contains('dark')) {
      classList.add('dark');
    }
  }
});
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
      <div class="space-x-4 space-y-4">
        <BaseButton>BaseButton</BaseButton>
        <BaseButtonPrimary>BaseButtonPrimary</BaseButtonPrimary>
        <BaseButtonSecondary>BaseButtonSecondary</BaseButtonSecondary>
      </div>
    </section>
    <section
      id="buttons"
    >
      <h2 class="text-4xl">Buttons</h2>
      <div class="space-x-4 space-y-4">
        <ButtonPrimaryVeryLarge>ButtonPrimaryVeryLarge</ButtonPrimaryVeryLarge>
        <ButtonPrimaryLarge>ButtonPrimaryLarge</ButtonPrimaryLarge>
        <ButtonPrimaryMedium>ButtonPrimaryMedium</ButtonPrimaryMedium>
        <ButtonPrimarySmall>ButtonPrimarySmall</ButtonPrimarySmall>
        <ButtonSecondaryVeryLarge>ButtonSecondaryVeryLarge</ButtonSecondaryVeryLarge>
        <ButtonSecondaryLarge>ButtonSecondaryLarge</ButtonSecondaryLarge>
        <ButtonSecondaryMedium>ButtonSecondaryMedium</ButtonSecondaryMedium>
        <ButtonSecondarySmall>ButtonSecondarySmall</ButtonSecondarySmall>
        <ButtonPrimaryIcon>
          <!-- https://tablericons.com/ -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
            <line x1="12" y1="12" x2="20" y2="7.5" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <line x1="12" y1="12" x2="4" y2="7.5" />
          </svg>
        </ButtonPrimaryIcon>
        <ButtonSecondaryIcon>
          <!-- https://tablericons.com/ -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
            <line x1="12" y1="12" x2="20" y2="7.5" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <line x1="12" y1="12" x2="4" y2="7.5" />
          </svg>
        </ButtonSecondaryIcon>
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
