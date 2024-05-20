<template>
  <div class="flex flex-col items-center justify-center">
    <NavBar/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Hi !',
  ogTitle: "Valentin REVERSAT's resume",
  twitterCard: 'summary_large_image',
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>