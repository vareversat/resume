<template>
  <div
      class="flex items-center fixed bottom-11 sm:top-10 sm:bottom-auto z-50 px-2 rounded-lg backdrop-blur-sm bg-gray-300/30">
    <UHorizontalNavigation :links="tabs" @change="onChange">
      <template #default="{ link }">
        <span class="group-hover:text-primary relative">{{ link.label }}</span>
      </template>
    </UHorizontalNavigation>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDarkMode = (el: any) => {
  if (el) {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
  return !el
}

console.log(colorMode.preference)
const tabs = [{
  label: 'Me',
  to: '/me', avatar: {
    src: 'https://www.gravatar.com/avatar/352b5764b29495b7d52eb633a38deb913f4ef9fdb6c61ae442ec08c4d48ce34d'
  },
}, {
  label: 'Missions',
  to: '/missions',
  icon: 'i-heroicons-briefcase-solid',
}, {
  label: 'Education',
  to: '/education',
  icon: 'i-heroicons-academic-cap-16-solid',
}]

function onChange(index: number) {
  const tab = tabs[index]
  navigateTo(tab.label)
}

</script>