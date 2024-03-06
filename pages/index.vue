<script setup lang="ts">
useHead({
    title: 'Nixon Pang',
    meta: [
        { name: 'description', content: 'Nixon Pang - An ambitious and determined full stack developer based in Hong Kong.' }
    ]
})

</script>

<template>
    <main>
        <section class="home">
            <div class="h-full grid grid-cols-1 md:grid-cols-2 gap-0">
                <div class="order-1 md:order-0 px-4 flex flex-col justify-center">
                    <h1 class="font-bold text-3xl md:text-5xl md:tracking-wide">Hi, I'm Nixon Pang</h1>
                    <h3 class="mt-2 font-bold text-md md:text-2xl text-[--bg-accent]">Full Stack Developer</h3>
                    <p class="mt-4">An ambitious and determined <span class="highlight">full stack developer</span>
                        based in Hong Kong. I
                        have
                        developed many types of full stack projects from e-commerce websites to full fledged mobile
                        applications.
                        <br>
                        <br>
                        I'm passionate about <span class="highlight">cutting-edge</span>, <span
                            class="highlight">pixel-perfect</span>, <span class="highlight">beautiful interfaces</span>
                        and <span class="highlight">intuitively
                            implemented</span> UX.
                    </p>
                    <div class="flex w-full mt-4">
                        <Button theme="primary" class="button" role="none">
                            <strong>Learn More</strong>
                        </Button>
                        <Button theme="secondary" class="ml-6 button" role="none">
                            <strong>Let's Talk</strong>
                        </Button>
                    </div>
                </div>
                <div class="hidden md:flex order-0 md:order-1 mt-4 md:mt-0 px-4 items-center justify-center">
                    Image
                </div>
            </div>

        </section>

    </main>
</template>

<style scoped>
.button {
    @apply w-32 md:w-48 text-center text-sm md:text-base;
}

section.home {
    height: 90vh;
}

.highlight {
    display: inline-block;
    position: relative;
    /* color: var(--bg-primary); */
    /* font-family: 'Patrick Hand'; */
}

.highlight::before {
    content: "";
    display: block;
    height: 50%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    position: absolute;
    background: #ceac01;
    transform: rotate(2deg);
    bottom: 5px;
    left: 2px;
    border-radius: 20% 25% 20% 24%;
    padding: 10px 3px 3px 10px;
    z-index: -1;
}
</style>