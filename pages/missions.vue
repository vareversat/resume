<template>
  <ul class="mx-[3vw] md:mx-[18vw] md:h-auto pt-0 md:pt-10 pb-16 md:pb-0 divide-y">
    <li class="py-10 mx-[5vw]" v-for="(mission, mission_index) of missions">
      <section :id="mission.mission_id">
        <div class="flex space-x-3 pb-3 items-center">
          <UTooltip :content="{ placement: 'top', offsetDistance: 5 }" text="Go to institutional website">
            <a :href="mission.link" target="_blank">
              <UAvatar v-if="mission.company_logo" size="md"
                       :src="mission.company_logo"
                       alt="Avatar"
                       class="transition-all ease-in-out rounded-full hover:scale-110 shadow-md cursor-pointer"/>
            </a>
          </UTooltip>
          <UTooltip :content="{ placement: 'top', arrow: true }">
            <template #content>
              <span>#{{ mission.mission_id }}</span>
            </template>
            <div class="flex justify-between">
              <a :href="`#${mission.mission_id}`">
                <p class="text-5xl font-bold underline underline-offset-6  pb-2 cursor-pointer">
                  {{ mission.company_name }}
                </p>
              </a>
              <Icon :name="mission.country_icon"/>
            </div>
          </UTooltip>
        </div>
        <div class="flex flex-col">
          <p class="text-sm italic">
            {{ mission.company_description }}
          </p>
          <div v-if="mission.sub_missions.length > 1" class="flex items-center space-x-2">
            <p class="text-2xl ">
              {{ mission.sub_missions[0].periods[0].from }}
            </p>
            <Icon class="flex-none" name="i-system-uicons-arrow-right-circle" size="1.5em"/>
            <p class="text-2xl ">
              {{ mission.sub_missions[mission.sub_missions.length - 1].periods[0].to }}
            </p>
          </div>
        </div>
        <li v-for="sub_missions of mission.sub_missions" class="space-x-5 pt-10">
          <div class="flex flex-row items-stretch space-x-4">
            <div class="md:basis-5/6">
              <div class="flex items-center">
                <UChip :show="mission_index === 0" color="error">
                  <UBadge :label="sub_missions.name" class="flex-none text-sm shadow-md mb-2"/>
                </UChip>
                <div v-for="period of sub_missions.periods" class="grid md:hidden">
                  <p v-if="period.to" class="text-xs  italic p-2">from {{ period.from }} to {{ period.to }}</p>
                  <p v-else class="text-xs  italic p-2">{{ period.from }}</p>
                </div>
              </div>
              <p class="text-md text-justify  pb-4">
                {{ sub_missions.description }}
              </p>
              <div class="space-x-2">
                <UBadge v-for="skill of sub_missions.skills_involved" color="secondary" size="md" variant="soft">{{
                    skill
                  }}
                </UBadge>
              </div>
            </div>
            <div class="basis-1/6 border-l border-gray-500 hidden md:grid">
              <div v-for="period of sub_missions.periods" class="h-full">
                <p v-if="period.to" class="text-sm font-bold  italic p-2">from {{ period.from }}<br/> to
                  {{ period.to }}</p>
                <p v-else class="text-sm font-bold  italic p-2">{{ period.from }}</p>
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
    "mission_id": "imc",
    "place": "Amsterdam",
    "country_icon": "i-circle-flags-nl",
    "map_link": "https://www.google.com/maps/place/Amsterdam/@52.3546266,4.5743504,163310m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47c63fb5949a7755:0x6600fd4cb7c0af8d!8m2!3d52.3675734!4d4.9041389!16zL20vMGszcA?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    "company_name": "IMC",
    "company_logo": "/images/imc.jpg",
    "link": "https://imc.com",
    "company_description": "IMC (International Market maker's Combination) Trading is a high-frequency trading firm and a liquidity provider among multiple trading venues across the globe.",
    "sub_missions": [
      {
        "name": "Trading engineer",
        "periods": [{"from": "feb. 2025", "to": "today"}],
        "description": "\n" +
            "Responsible for overseeing, monitoring, and providing live system support for all our trading infrastructure." +
            " This also include various debugging tasks on multiple in-house trading software's developed in C++ and Java." +
            " This position also requires maintaining multiple Kubernetes clusters and virtual machines scattered around the globe. ",
        "skills_involved": ["Python scripting", "Linux servers", "Java", "GoCD", "Puppet", "FPGA"]
      }
    ]
  },
  {
    "mission_id": "floa",
    "place": "Bordeaux",
    "country_icon": "i-circle-flags-fr",
    "map_link": "https://www.google.com/maps/place/Bordeaux/data=!4m2!3m1!1s0xd5527e8f751ca81:0x796386037b397a89?sa=X&ved=2ahUKEwi7wpul5sL7AhXOWqQEHUwCCLsQ8gF6BAh6EAE",
    "company_name": "FLOA",
    "company_logo": "/images/floa.jpg",
    "link": "https://floabank.fr",
    "company_description": "FLOA offers several financing and payment services for individuals (under the FloaBank brand) and e-commerce professionals (with FloaPay).",
    "sub_missions": [
      {
        "name": "Production engineer",
        "periods": [{"from": "oct. 2021", "to": "jan. 2025"}],
        "description": "\n" +
            "Responsible for overseeing, monitoring, and providing live system support for the production of our computer " +
            "system. This also include various debugging tasks on various application stacks scattered across our information system. Additionally, " +
            "tasked with maintaining multiple Kubernetes clusters and virtual machines deployed through Terraform. " +
            "Monitoring is conducted through ELK, Grafana, and Dynatrace platforms.",
        "skills_involved": ["ELK stack", "Grafana/Prometheus stack", "Dynatrace", "Various programming languages", "Various SGBD technologies"]
      },
      {
        "name": "Cloud engineer",
        "periods": [{"from": "aug. 2022", "to": "jan. 2025"}],
        "description": "Building and installing the infrastructure components needed for the overhaul reworks of the bank following its acquisition by BNP Paribas",
        "skills_involved": ["Azure Cloud", "Kubernetes", "Terraform/Terragrunt", "Ansible"]
      },
      {
        "name": "Platform engineer",
        "periods": [{"from": "sept. 2023", "to": "jan. 2025"}],
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
    "company_logo": "/images/skinsoft.ico",
    "link": "https://skinsoft.fr",
    "company_description": "Company that specializes in creating comprehensive web-based solutions tailored for managing collections effectively.",
    "sub_missions": [
      {
        "name": "Fullstack developer",
        "periods": [{"from": "sept. 2018", "to": "aug. 2021"}],
        "description": "Project : Implementation in the current application of a history procedure of the users changes in items records using a REST API",
        "skills_involved": ["Java (Spring)", "MongoDB", "ElasticSearch", "Docker", "VueJS", "TypeScript", "HTML/CSS"]
      },
      {
        "name": "System administrator",
        "periods": [{"from": "apr. 2018", "to": "aug. 2021"}],
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
    "company_logo": "/images/anfang.jpg",
    "link": "https://www.linkedin.com/company/%E5%B9%BF%E5%B7%9E%E5%AE%89%E6%96%B9%E7%94%9F%E7%89%A9%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/",
    "company_description": "(Guangzhou Anfang Biotechnology Co., Ltd.) Company located in the North East of Guangzhou specialized in the conception and development of 'nano filters' used to filter the cancer cells form the blood.",
    "sub_missions": [
      {
        "name": "Intern developer",
        "periods": [{"from": "may 2018", "to": "jul. 2018"}],
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