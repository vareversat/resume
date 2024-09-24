<template>
  <ul class="flex flex-col mx-[3vw] pb-16 pt-0 sm:flex-row-reverse sm:mx-[10vw] sm:h-auto sm:pt-[15vh] sm:pb-0">
    <li class="py-10 mx-[5vw] sm:mx-0" v-for="(education, index) of educations">
      <div class="flex items-center">
        <section :id="education.id">
          <div class="flex flex-col">
            <div class="flex space-x-3 pb-3 items-center">
              <UTooltip text="Go to institutional website" :popper="{ placement: 'top', offsetDistance: 5 }">
                <NuxtLink :to="education.website" target="_blank">
                  <UAvatar v-if="education.logo" size="md"
                    class="transition-all ease-in-out rounded-full hover:scale-110 shadow-md cursor-pointer"
                    :src="education.logo" alt="Avatar" />
                </NuxtLink>
              </UTooltip>
              <UTooltip :popper="{ placement: 'top', arrow: true }">
                <template #text>
                  <span>#{{ education.id }}</span>
                </template>
                <a :href="`#${education.id}`">
                  <p class="text-2xl font-bold underline underline-offset-6 font-mono pb-2 cursor-pointer">
                    {{ education.diploma }}
                  </p>
                </a>
              </UTooltip>
            </div>
            <div class="flex items-center space-x-1 py-2">
              <Icon class="flex-none" name="i-material-symbols-location-on" size="2em" />
              <p class="font-bold text-sm font-mono">{{ education.place_city }},
                {{ education.place_region }}, {{ education.place_country }}</p>
            </div>
          </div>
          <p class="text-base text-justify font-mono">
            {{ education.description }}
          </p>
          <div class="flex items-start space-x-4 py-4">
            <div class="flex-auto">
              <p class="text-4xl font-mono">
                {{ education.to }}
              </p>
              <Icon class="basis-1/2 md:flex-none" name="i-system-uicons-arrow-up-circle" size="2em" />
              <p class="text-4xl font-mono">
                {{ education.from }}
              </p>
            </div>
          </div>
        </section>
        <div class="hidden md:flex px-4" v-if="index !== 0">
          <Icon name="i-solar-map-arrow-right-bold-duotone" size="2em" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>

const educations = [
  {
    "id": "agh",
    "place": "Akademia Górniczo-Hutnicza (AGH)",
    "place_city": "Krakow",
    "place_region": "Lesser Poland Province",
    "place_country": "Poland",
    "country_icon": "i-circle-flags-pl",
    "diploma": "IT Engineer - ERASMUS Student",
    "from": "oct. 2020",
    "to": "feb. 2021",
    "website": "https://www.agh.edu.pl/",
    "logo": "https://pbs.twimg.com/profile_images/1272488485702811648/HpwLcUTL_400x400.jpg",
    "description": "\n" +
      "During my final six months as a student at UTBM, I had the enriching opportunity to participate in the ERASMUS program, " +
      "venturing to the AGH University in Krakow, Poland. This experience was a true learning adventure, " +
      "where I not only discovered new academic areas I hadn't explored before but also delved deeper into subjects that fascinate me. " +
      "Immersed in a new cultural and academic environment, I broadened my horizons, gained an international perspective," +
      " and enhanced my adaptability in the face of new challenges. I'm grateful for this opportunity, which has enriched " +
      "my education and prepared me to tackle new professional endeavors with confidence and determination."
  },
  {
    "id": "utbm",
    "place": "Université de Technologie de Belfort-Montbéliard (UTBM)",
    "place_city": "Belfort",
    "place_region": "Bourgogne-Franche-Comté",
    "place_country": "France",
    "country_icon": "i-circle-flags-fr",
    "diploma": "IT Engineer",
    "logo": "https://i0.wp.com/bibliotheque.utbm.fr/wp-content/uploads/2015/04/logo_utbm_seul.png?ssl=1",
    "from": "2018",
    "to": "2021",
    "website": "https://www.utbm.fr/",
    "description": "I completed a three-year apprenticeship program in computer engineering, split between the " +
      "University of Technology of Belfort-Montbéliard (UTBM) and Skinsoft, a company specializing in museum management software. " +
      "During this program, I gained expertise in software development, database management, cybersecurity, and project management. " +
      "Through hands-on projects with industry partners, I developed essential technical and professional skills, ready to contribute to innovative teams."
  },
  {
    "id": "uca",
    "place": "UCA Institute of Technology",
    "place_city": "Clermont-Ferrand",
    "place_region": "Auvergne-Rhône-Alpes",
    "place_country": "France",
    "country_icon": "i-circle-flags-fr",
    "diploma": "Two-year University diploma in computer Science",
    "logo": "https://pbs.twimg.com/profile_images/1461276394114228232/ui3Mp9Tp_400x400.jpg",
    "from": "2016",
    "to": "2018",
    "website": "https://www.iut-clermont.fr/formations/dut-informatique/",
    "description": "During my university years, I held the position of Clerk in the student association. Additionally, I collaborated on various projects, including:\n" +
      "\n" +
      "A badge reader implementation for an enterprise restaurant management system, developed with four students. Technologies employed included C# (utilizing the WPF application with the MVVM architecture pattern and the MVVMLight framework), MySQL (PHPMyAdmin and APACHE for server hosting), and integration of a smart card reader API.\n" +
      "Projects completed in pairs over two years, showcased on my GitHub repository, encompassing:\n" +
      "\"Master Detail\" application (C#, XAML (WPF), MVVM architecture pattern).\n" +
      "Library Manager (C, Shell).\n" +
      "\"TODO List\" website (HTML/CSS, PHP7, MySQL, MVC architecture pattern).\n" +
      "Memory Game (Java 8, JavaFX).\n" +
      "Space Invader game (Android, JAVA).\n" +
      "Basketball game (C#, LeapMotion)."
  }
]
</script>