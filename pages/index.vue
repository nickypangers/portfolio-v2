<template>
  <div>
    <section id="hero" ref="hero">
      <div class="p-4 pb-16 grid gap-6">
        <div>
          <div
            class="animation hero-animation rounded-full h-16 w-16 overflow-hidden"
          >
            <NuxtImg
              src="/images/portrait.webp"
              alt="Portrait"
              width="96"
              height="96"
              fill="cover"
            />
          </div>
          <h1 class="animation hero-animation text-4xl mt-4">
            Hi! I'm Nixon Pang
          </h1>
        </div>
        <div class="pt-4 pb-12 flex items-center">
          <a
            class="animation hero-animation social-link"
            href="https://linkedin.com/in/nixon-pang"
          >
            <Icon name="jam:linkedin" />
          </a>
          <a
            class="animation hero-animation ml-4 social-link"
            href="https://github.com/nickypangers"
          >
            <Icon name="jam:github" />
          </a>
          <a
            class="animation hero-animation ml-4 social-link"
            href="mailto:nixon@nickypangers.com"
          >
            <Icon name="jam:envelope-f" />
          </a>
        </div>
        <h2 class="animation hero-animation text-lg">
          A Full Stack Developer based in Hong Kong.
        </h2>
        <p class="animation hero-animation text-sub-accent">
          Creating amazing things on the internet, turning ideas into reality
        </p>
        <div class="flex items-center">
          <button class="animation hero-animation bg-accent text-white">
            Talk with me
          </button>
          <button class="animation hero-animation ml-4 border">
            See my work
          </button>
        </div>
      </div>
    </section>
    <section ref="workExperienceList" id="work-experience">
      <div class="bg-secondary py-16 px-4">
        <h1 class="work-experience-animation inline-block opacity-0 text-2xl">
          Work Experience
        </h1>
        <div class="mt-4 [&>*:nth-child(n)]:border-b">
          <WorkExperience
            v-for="item in workExperienceData"
            :key="`work-experience-` + item.company.split(' ').join('-')"
            :data="item"
            class="work-experience-animation inline-block opacity-0"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { $gsap } = useNuxtApp();

useHead({
  title: 'Nixon Pang',
  meta: [
    {
      name: 'description',
      content: 'Nixon Pang - Full Stack Developer based in Hong Kong',
    },
  ],
});

const hero = ref(null);

const workExperienceList = ref(null);

const workExperienceData = [
  {
    company: 'Cathay Pacific',
    position: 'Pilot',
    period: 'February 2023 - Present',
    imageUrl:
      'https://media.licdn.com/dms/image/D560BAQFyGCq3eHFt5w/company-logo_100_100/0/1719757759908?e=1731542400&v=beta&t=ypFGpMDRMgoBq9x4z836JBsVBfabYWgYx4XdXOAFozQ',
  },
  {
    company: 'Chaos Theory',
    position: 'Full Stack Developer',
    period: 'May 2022 - February 2023',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D560BAQEP1gQqxxe3wA/company-logo_100_100/company-logo_100_100/0/1701777680652/chaostheoryhk_logo?e=1731542400&v=beta&t=e-Hk7v3RcxQt9AbGjyT4hImacM08vpAGQl14uGHwyFk',
  },
  {
    company: 'AQUMON',
    position: 'Software Engineer',
    period: 'January 2022 - May 2022',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/C560BAQEZHcrNYrrC0A/company-logo_100_100/company-logo_100_100/0/1630656251887/aqumon_logo?e=1731542400&v=beta&t=MZ0y-AldrVXmqAvPlZdb--EIMWKTos_Utx26LcDhRNE',
  },
  {
    company: 'Mosaic Digital Group',
    position: 'Web/Mobile App Developer',
    period: 'November 2020 - January 2022',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/C560BAQE-vitBvlbLDw/company-logo_100_100/company-logo_100_100/0/1630648658003/mosaic_digital_group_logo?e=1731542400&v=beta&t=vnZjl6aTps34geahA_WkPSm-hqoebMCope2JpfNP6aw',
  },
  {
    company: 'SG Wireless',
    position: 'Hardware Engineer',
    period: 'February 2020 - October 2020',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D560BAQEOlNCe9Zyqow/company-logo_100_100/company-logo_100_100/0/1719969196826/sgwireless_logo?e=1731542400&v=beta&t=fVR7I2RwcIe94wIfMgLhE8YhIZ5N5JinR_B_UARRCG0',
  },
];

function heroAnimation() {
  let ctx = $gsap.context(() => {
    const t1 = $gsap.timeline({
      scrollTrigger: hero.value,
      start: 'top top',
      markers: true,
    });
    t1.fromTo(
      '.hero-animation',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: {
          each: 0.25,
        },
      }
    );
  }, hero.value);
}

function workExperienceAnimation() {
  let ctx = $gsap.context(() => {
    const t1 = $gsap.timeline({
      scrollTrigger: workExperienceList.value,
      start: 'top top',
      markers: true,
    });
    t1.fromTo(
      '.work-experience-animation',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: {
          each: 0.2,
        },
      }
    );
  }, workExperienceList.value);
}

onMounted(() => {
  heroAnimation();
  workExperienceAnimation();
});
</script>
<style scoped>
.animation {
  @apply opacity-0;
}

section {
  @apply min-h-screen;
}

button {
  @apply text-sm px-5 py-3 rounded-xl min-w-min;
}

.social-link {
  @apply border-2 border-secondary hover:border-accent hover:bg-secondary rounded-full w-12 h-12 flex items-center justify-center overflow-hidden;
}

.social-link > * {
  @apply w-6 h-6;
}
</style>
