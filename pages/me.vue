<template>
  <div
      class="flex flex-col h-svh justify-center items-start space-y-8 w-auto px-5 pb-32 md:pb-0 md:w-1/3 md:px-[7vw]">
    <p class="text-5xl">
      Hi!
    </p>
    <div class="relative">
      <div class="float-right m-2">
        <UTooltip text="Yep, that's me" :content="{ placement: 'top', offsetDistance: 16 }">
          <NuxtImg class="transition-all ease-in-out rounded-full border-2 hover:scale-110" height="150" width="150"
                   src="https://www.gravatar.com/avatar/352b5764b29495b7d52eb633a38deb913f4ef9fdb6c61ae442ec08c4d48ce34d?s=512"/>
        </UTooltip>
      </div>
      <p class="clear-none">
        {{ profile.bio }}
      </p>
    </div>
    <div class="shrink pt-3">
      <UFieldGroup orientation="horizontal">
        <UButton :color="link.color" v-for="link of profile.links" variant="subtle" target="_blank" :to="link.link">{{
            link.text
          }}
        </UButton>
      </UFieldGroup>
    </div>
  </div>
</template>

<script setup>
const profile = {
  "year_of_birth": "1997-04-22",
  "bio": "I'm Valentin REVERSAT, a SRE engineer living in Amsterdam 🌷, " +
      "Netherlands. I'm currently working at IMC, a high-frequency trading (HFT) firm. Welcome to my online resume ! You'll find plenty of " +
      "information about me like my previous missions, my (forever) unfinished projects and my education background. Have a nice tour 📷",
  "languages": [
    {"lang": "🇫🇷", "level": "Mother tongue"},
    {"lang": "🇬🇧", "level": "C1, fluent"}
  ],
  "links": [
    {
      "link": "https://www.linkedin.com/in/vareversat/",
      "color": "secondary",
      "text": "LinkedIn"
    },
    {
      "link": "https://github.com/vareversat",
      "color": "primary",
      "text": "Github"
    }
  ]
}
</script>