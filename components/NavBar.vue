<template>
  <div
      class="flex items-center fixed bottom-11 sm:top-10 sm:bottom-auto z-50 px-2 rounded-lg backdrop-blur-xs bg-gray-300/30">
    <UNavigationMenu @click="vibrateOnClick" :items="tabs"/>

  </div>
</template>

<script setup lang="ts">
const tabs = [
  {
    label: 'Me',
    to: '/me',
    avatar: {
      src: 'https://www.gravatar.com/avatar/352b5764b29495b7d52eb633a38deb913f4ef9fdb6c61ae442ec08c4d48ce34d'
    },
  },
  {
    label: 'Missions',
    to: '/missions',
    icon: 'i-heroicons-briefcase-solid',
  },
  {
    label: 'Education',
    to: '/education',
    icon: 'i-heroicons-academic-cap-16-solid',
  }
]
const vibrateOnClick = () => {
  if ('vibrate' in navigator) {
    // Vibrate for 100ms
    navigator.vibrate(100);
  } else {
    console.log("Vibration API not supported");
  }
};

</script>