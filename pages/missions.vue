<template>
  <ul class="mx-[3vw] md:mx-[18vw] md:h-auto pt-0 md:pt-10 pb-16 md:pb-0 divide-y">
    <li class="py-10 mx-[5vw]" v-for="(mission, mission_index) of missions">
      <section :id="mission.mission_id">
        <div class="flex space-x-3 pb-3 items-center">
          <UTooltip text="Go to institutional website" :popper="{ placement: 'top', offsetDistance: 5 }">
            <NuxtLink :to="mission.link" target="_blank">
              <UAvatar v-if="mission.company_logo" size="md"
                class="transition-all ease-in-out rounded-full hover:scale-110 shadow-md cursor-pointer"
                :src="mission.company_logo" alt="Avatar" />
            </NuxtLink>
          </UTooltip>
          <UTooltip :popper="{ placement: 'top', arrow: true }">
            <template #text>
              <span>#{{ mission.mission_id }}</span>
            </template>
            <div class="flex justify-between">
              <a :href="`#${mission.mission_id}`">
                <p class="text-5xl font-bold underline underline-offset-6 font-mono pb-2 cursor-pointer">
                  {{ mission.company_name }}
                </p>
              </a>
              <Icon :name="mission.country_icon" />
            </div>
          </UTooltip>
        </div>
        <div class="flex flex-col">
          <p class="text-sm font-mono italic">
            {{ mission.company_description }}
          </p>
          <div v-if="mission.sub_missions.length > 1" class="flex items-center space-x-2">
            <p class="text-2xl font-mono">
              {{ mission.sub_missions[0].periods[0].from }}
            </p>
            <Icon class="flex-none" name="i-system-uicons-arrow-right-circle" size="1.5em" />
            <p class="text-2xl font-mono">
              {{ mission.sub_missions[mission.sub_missions.length - 1].periods[0].to }}
            </p>
          </div>
        </div>
    <li class="space-x-5 pt-10" v-for="sub_missions of mission.sub_missions">
      <div class="flex flex-row items-stretch space-x-4">
        <div class="md:basis-5/6">
          <div class="flex items-center">
            <UChip color="red" :show="mission_index === 0">
              <UBadge class="flex-none text-sm shadow-md mb-2" :label="sub_missions.name" />
            </UChip>
            <div class="grid md:hidden" v-for="period of sub_missions.periods">
              <p v-if="period.to" class="text-xs font-mono italic p-2">from {{ period.from }} to {{ period.to }}</p>
              <p v-else class="text-xs font-mono italic p-2">{{ period.from }}</p>
            </div>
          </div>
          <p class="text-md text-justify font-mono">
            {{ sub_missions.description }}
          </p>
          <div class="items-center">
            <UBadge color="gray" variant="outline" size="sm" v-for="skill of sub_missions.skills_involved">{{
      skill
    }}
            </UBadge>
          </div>
        </div>
        <div class="basis-1/6 border-l border-gray-500 hidden md:grid">
          <div class="h-full" v-for="period of sub_missions.periods">
            <p v-if="period.to" class="text-sm font-bold font-mono italic p-2">from {{ period.from }}<br /> to
              {{ period.to }}</p>
            <p v-else class="text-sm font-bold font-mono italic p-2">{{ period.from }}</p>
          </div>
        </div>
      </div>
    </li>
    </section>
    </li>
  </ul>
</template>

<script setup>
const missions = [
  {
    "mission_id": "floa",
    "place": "Bordeaux",
    "country_icon": "i-circle-flags-fr",
    "map_link": "https://www.google.com/maps/place/Bordeaux/data=!4m2!3m1!1s0xd5527e8f751ca81:0x796386037b397a89?sa=X&ved=2ahUKEwi7wpul5sL7AhXOWqQEHUwCCLsQ8gF6BAh6EAE",
    "company_name": "FLOA",
    "company_logo": "https://media.licdn.com/dms/image/D4E0BAQHsMSnCg7MlbA/company-logo_200_200/0/1692798460961/floabank_logo?e=1717632000&v=beta&t=-gHdfVQ7VVFVIFlEUNQBrqK9lsDT3i92IeZq71x_Kfg",
    "link": "https://floabank.fr",
    "company_description": "FLOA offers several financing and payment services for individuals (under the FloaBank brand) and e-commerce professionals (with FloaPay).",
    "sub_missions": [
      {
        "name": "Production engineer",
        "periods": [{ "from": "oct. 2021", "to": "today" }],
        "description": "\n" +
          "Responsible for overseeing, monitoring, and providing live system support for the production of our computer " +
          "system. This also include various debugging tasks on various application stacks scattered across our information system. Additionally, " +
          "tasked with maintaining multiple Kubernetes clusters and virtual machines deployed through Terraform. " +
          "Monitoring is conducted through ELK, Grafana, and Dynatrace platforms.",
        "skills_involved": ["ELK stack", "Grafana/Prometheus stack", "Dynatrace", "Various programming languages", "Various SGBD technologies"]
      },
      {
        "name": "Cloud engineer",
        "periods": [{ "from": "aug. 2022", "to": "today" }],
        "description": "Building and installing the infrastructure components needed for the overhaul reworks of the bank following its acquisition by BNP Paribas",
        "skills_involved": ["Azure Cloud", "Kubernetes", "Terraform/Terragrunt", "Ansible"]
      },
      {
        "name": "Platform engineer",
        "periods": [{ "from": "sept. 2023", "to": "today" }],
        "description": "Creating and managing tools for the developer team with the objective of enhancing both the quantity and quality of their code.",
        "skills_involved": ["ArgoCD", "Thanos", "Python scripting", "CI/CD"]
      }
    ]
  },
  {
    "mission_id": "skinsoft",
    "place": "Besançon",
    "country_icon": "i-circle-flags-fr",
    "map_link": "https://www.google.com/maps/place/25000+Besan%C3%A7on/@47.2463512,5.8814638,8.13z/data=!4m5!3m4!1s0x478d62faf0ee130b:0x409ce34b313ed30!8m2!3d47.237829!4d6.0240539",
    "company_name": "SKINsoft",
    "company_logo": "https://media.licdn.com/dms/image/C560BAQH2U5O7lZVAVg/company-logo_200_200/0/1641395568268/skinsoft_skinmuseum_logo?e=1717632000&v=beta&t=oN8bcYvKA9n1IZsLcZTQ07gKfLAQSBmO0gRnjZh5awU",
    "link": "https://skinsoft.fr",
    "company_description": "Company that specializes in creating comprehensive web-based solutions tailored for managing collections effectively.",
    "sub_missions": [
      {
        "name": "Fullstack developer",
        "periods": [{ "from": "sept. 2018", "to": "aug. 2021" }],
        "description": "Project : Implementation in the current application of a history procedure of the users changes in items records using a REST API",
        "skills_involved": ["Java (Spring)", "MongoDB", "ElasticSearch", "Docker", "VueJS", "TypeScript", "HTML/CSS"]
      },
      {
        "name": "System administrator",
        "periods": [{ "from": "apr. 2018", "to": "aug. 2021" }],
        "description": "In charge of the management, the monitoring and installation of the servers and the virtual machines for our clients",
        "skills_involved": ["Linux (mostly Debian)", "Bash scripting", "Python scripting", "MooseFS", "Operating system"]
      },
    ]
  },
  {
    "mission_id": "anfang",
    "place": "Guangzhou City",
    "country_icon": "i-circle-flags-cn",
    "map_link": "https://www.google.com/maps?q=canton&rlz=1C1CHBF_frFR832FR832&sxsrf=ALiCzsYP6l0G-zIeXX3sAQ9E5Vt5rNRQFQ:1669154840943&uact=5&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgwEQsQMQgAQyCgguEIMBELEDEEMyCAgAELEDEIMBMgoIABCxAxCDARBDMgoILhDHARCvARBDMgUIABCABDIICC4QgAQQ1AIyBAgAEEMyCwgAEIAEELEDEIMBMggIABCABBCxAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoMCC4QyAMQsAMQQxgBOgQIIxAnOgQILhBDOgYIIxAnEBM6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARDRAzoLCC4QsQMQgwEQ1AI6CwguEIAEELEDEIMBOgsILhCABBCxAxDUAjoICC4QgAQQsQNKBAhBGABKBAhGGAFQoQVYwwlgqgtoAXABeACAAXOIAfoDkgEDNS4xmAEAoAEByAETwAEB2gEGCAEQARgI&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj-0NOt5sL7AhX-UKQEHZsLDbwQ_AUoAXoECAEQAw",
    "company_name": "广州安方生物科技有限公司",
    "company_logo": "https://media.licdn.com/dms/image/C4D0BAQFKktG4k00mJw/company-logo_200_200/0/1630559296890?e=1717632000&v=beta&t=vLFB873oQnPmFcTIATvxoB7HPqsd1ynMkGKX5xZruoA",
    "link": "https://www.linkedin.com/company/%E5%B9%BF%E5%B7%9E%E5%AE%89%E6%96%B9%E7%94%9F%E7%89%A9%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/",
    "company_description": "(Guangzhou Anfang Biotechnology Co., Ltd.) Company located in the North East of Guangzhou specialized in the conception and development of 'nano filters' used to filter the cancer cells form the blood.",
    "sub_missions": [
      {
        "name": "Intern developer",
        "periods": [{ "from": "may 2018", "to": "jul. 2018" }],
        "description": "Development in C++ of an analysis application of captured images using a microscope. " +
          "Utilizing the OpenCV library for image processing tasks. Responsibilities include:\n" +
          "\n" +
          "Recreating an image from a sample found on a microscope slide, extracting relevant data for laboratory " +
          "technicians, generating documentation as needed",
        "skills_involved": ["C++", "OpenCV", "Foreign internship"]
      }
    ]
  },
  {
    "mission_id": "marinico",
    "place": "Meyrueis",
    "country_icon": "i-circle-flags-fr",
    "map_link": "https://www.google.com/maps/place/48150+Meyrueis/data=!4m2!3m1!1s0x12b3970be4c9bbf1:0x40788211669a280?sa=X&ved=2ahUKEwisv6PA5sL7AhW2TKQEHY12DlgQ8gF6BAhpEAE",
    "company_name": "SAS Marinico",
    "link": "https://www.societe.com/societe/marinico-828830901.html",
    "company_description": "Little restaurant located in the south of France.",
    "sub_missions": [
      {
        "name": "Seasonal worker",
        "periods": [{
          "from": "june 2013, 2014, 2015, 2016, 2017, 2018, 2018",
          "to": "aug. 2013, 2014, 2015, 2016, 2017, 2018, 2018"
        }],
        "description": "Kitchen assistant from summers 2013 to 2018. Responsibilities included: Handling fresh products, plating dishes.\n" +
          "This experience enabled me to tackle tasks under tight deadlines without compromising quality. It fostered my independence and ability to make proactive suggestions, qualities I refined during my six seasons in the kitchen."
      }
    ]
  }
]
</script>