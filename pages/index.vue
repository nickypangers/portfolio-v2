<template>
  <div class="h-screen">
    <section
      class="relative overflow-hidden h-[320px] flex flex-col items-center justify-center"
    >
      <h1
        class="background-text absolute -mx-8 top-1/2 -translate-y-1/2 -left-1/3 -z-1 text-[320px]"
      >
        NIXON
      </h1>
      <div ref="headingText" class="mx-4">
        <div class="font-syne">
          <h1 class="name-animation text-3xl opacity-0 scale-0">
            Nixon Pang - <span class="font-bold">hkg</span>
          </h1>
          <p class="title-animation text-2xl inline-block opacity-0">
            a professional full stack developer
          </p>
        </div>
        <p
          class="bio-animation mt-2 text-sm text-[#8F8F8F] font-poppins inline-block opacity-0"
        >
          focused on creating memorable ditigal experiences, turning ideas to
          reality.
        </p>
      </div>
    </section>
    <section>
      <div class="p-4">
        <h2 class="text-semibold text-xl">
          - a curious full stack developer always willing to learn and strive
          for perfection.
        </h2>
      </div>
    </section>
  </div>
</template>
<script setup>
const { $gsap } = useNuxtApp();
const headingText = ref(null);

onMounted(() => {
  let ctx = $gsap.context(() => {
    const t1 = $gsap.timeline();

    t1.fromTo(
      '.name-animation',
      {
        scale: 0,
        opacity: 0,
      },
      { scale: 1, opacity: 1, duration: 2.2, ease: 'power3.out' }
    );

    t1.fromTo(
      '.title-animation',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.75, ease: 'power3.out' }
    );

    t1.fromTo(
      '.bio-animation',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.75, ease: 'power3.out' },
      '-=0.5'
    );
  }, headingText.value);
});
</script>
<style scoped>
.background-text {
  background: -webkit-linear-gradient(#ffffff2e, #ffffff00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
