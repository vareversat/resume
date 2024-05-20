<template>
  <div
    class="flex flex-col h-svh justify-center items-start space-y-8 w-auto px-5 pb-32 md:pb-0 md:w-1/3 md:px-[7vw]">
    <p class="text-5xl font-mono">
      Hi!
    </p>
    <div class="relative">
      <div class="float-right m-2">
        <UTooltip text="Yep, that's me" :popper="{ placement: 'top', offsetDistance: 16 }">
          <NuxtImg class="transition-all ease-in-out rounded-full border-2 hover:scale-110" height="150" width="150"
            src="https://www.gravatar.com/avatar/352b5764b29495b7d52eb633a38deb913f4ef9fdb6c61ae442ec08c4d48ce34d?s=512" />
        </UTooltip>
      </div>
      <p class="clear-none font-mono">
        {{ profile.bio }}
      </p>
    </div>
    <div class="flex-shrink pt-3">
      <UButtonGroup orientation="horizontal">
        <UButton :color="link.color" v-for="link of profile.links" target="_blank" :to="link.link">{{
          link.text
        }}
        </UButton>
      </UButtonGroup>
    </div>
  </div>
</template>

<script setup>
const profile = {
  "year_of_birth": "1997-04-22",
  "bio": "I'm Valentin REVERSAT, a DevOps engineer living in Bordeaux 🍷, " +
    "France. I'm currently working at Floa, a French neo-bank. Welcome to my online resume ! You'll find plenty of " +
    "information about me like my previous missions, my (forever) unfinished projects and my eduction background. Have a nice tour 📷",
  "languages": [
    { "lang": "🇫🇷", "level": "Mother tongue" },
    { "lang": "🇬🇧", "level": "C1, fluent" }
  ],
  "links": [
    {
      "link": "https://www.linkedin.com/in/vareversat/",
      "color": "lochmara",
      "text": "LinkedIn"
    },
    {
      "link": "https://github.com/vareversat",
      "color": "shark",
      "text": "Github"
    }
  ],
  "download_links": [
    {
      "link": "https://atlas.vareversat.fr/drive/d/f/619264513400681822",
      "color": "#F2711C",
      "text": "CV - 🇫🇷"
    },
    {
      "link": "https://atlas.vareversat.fr/drive/d/f/482593461889933358",
      "color": "#F2711C",
      "text": "Resume - 🇬🇧"
    }
  ]
}

function getAge() {
  if (this.profile !== null) {
    let today = new Date();
    let yearOfBirth = new Date(this.profile.year_of_birth)
    let age = today.valueOf() - yearOfBirth.valueOf()
    let ageDate = new Date(age)
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
</script>