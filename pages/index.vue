<script lang="ts" setup>
function toggleDarkMode () {
  const html = document.querySelector('html');
  const hasClassBeenAdded = html?.classList?.toggle('dark');
  if (hasClassBeenAdded !== null) {
    console.log(hasClassBeenAdded ? 1 : 0);
    localStorage.setItem('isInDarkTheme', hasClassBeenAdded ? 1 : 0);
  }
}

onMounted(() => {
  if (parseInt(localStorage.getItem('isInDarkTheme')) === 1) {
    const html = document.querySelector('html');
    const classList = html?.classList;
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
