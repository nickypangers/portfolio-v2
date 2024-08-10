<template>
  <header>
    <nav>
      <div class="p-4 h-full flex justify-between items-center text-2xl">
        <div ref="header">
          <span
            v-for="(letter, index) in nameLetters"
            class="name-animation inline-block opacity-0"
            :key="`header-name-animation-${letter}-${index}`"
            >{{ letter }}</span
          >
        </div>
        <Icon name="jam:menu" class="h-8 w-8" />
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
const header = ref(null);
const { $gsap } = useNuxtApp();

const nameLetters = 'nickypangers'.split('');

onMounted(() => {
  let ctx = $gsap.context(() => {
    const t1 = $gsap.timeline();
    t1.fromTo(
      '.name-animation',
      {
        x: -100,
        opacity: 0,
        rotate: -10,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        rotate: 0,
        stagger: {
          each: 0.1,
          from: 'random',
        },
      }
    );
  }, header.value);
});
</script>
