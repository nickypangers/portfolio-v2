<script setup lang="ts">
const isSidebarShowed = ref(false);

const pathList = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Resume', path: '/' }, {
    name: 'Portfolio', path:
        '/'
}, { name: 'Contact', path: '/' }];

onMounted(() => {
    window.addEventListener('resize', (e) => {
        const w = e.target as Window;
        if (isSidebarShowed.value && w.innerWidth >= 768) {
            isSidebarShowed.value = false;
        }
    });
    const links = document.querySelectorAll('.screen-nav-link');
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            isSidebarShowed.value = false;
        });
    })
});

const toggleSidebar = () => isSidebarShowed.value = !isSidebarShowed.value;;

</script>

<template>
    <header class="block md:hidden w-full bg-[--bg-primary]">
        <nav class="w-full h-full flex justify-between items-center px-4 py-2">
            <div class="logo-name hover-underline">
                <h1>nickypangers.</h1>
            </div>
            <button @click.prevent="toggleSidebar()">
                <Icon name="pajamas:hamburger"
                    :class="{ 'hamburger-hidden': isSidebarShowed, 'hamburger-show': !isSidebarShowed }" />
                <Icon name="lets-icons:close-round"
                    :class="{ 'cross-hidden': !isSidebarShowed, 'cross-show': isSidebarShowed }" />
            </button>
        </nav>
        <div class="sidebar" :class="{ hide: !isSidebarShowed, show: isSidebarShowed }">
            <div class="sidebar-nav-button" v-for="(path, i) in pathList" :key="`mobile-path-${i}`">
                <nuxt-link :to="path.path" class="hover-underline screen-nav-link">{{ path.name }}</nuxt-link>
            </div>
        </div>
    </header>
    <header class="hidden md:block w-full">
        <nav class="w-full h-full flex justify-between items-center px-4 font-bold">
            <div class="logo-name hover-underline">
                <h1>nickypangers.</h1>
            </div>
            <div class="w-5/12">
                <ul class="w-full flex justify-around">
                    <li v-for="(path, i) in pathList" :key="`path-${i}`">
                        <NuxtLink :to="path.path" class="hover-underline">{{ path.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.icon {
    transition: all 250ms ease-in-out;
}

.hamburger-hidden {
    transform: rotate(-90deg) scale(0);
    opacity: 0;
    display: none;
}

.hamburger-show {
    transform: scale(1);
    opacity: 1;
    display: block;
}

.cross-hidden {
    transform: rotate(90deg) scale(0);
    opacity: 0;
    display: none;
}

.cross-show {
    transform: scale(1);
    opacity: 1;
    display: block;
}

.logo-name {
    @apply cursor-pointer;
}

.logo-name h1 {
    @apply font-bold lowercase;
}

.sidebar {
    position: fixed;
    top: 10vh;
    right: 0;
    height: 100%;
    width: 100%;
    background: var(--bg-primary);
    transition: transform 200ms ease-out;
    transform-origin: top right;
}

.hide {
    transform: scaleX(0);
}

.show {
    transform: scaleX(1);
}

.hover-underline {
    @apply relative;
}

.hover-underline::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
    transform: scaleX(0);
    transition: transform 350ms ease-out;
    transform-origin: bottom right;
}

.hover-underline:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.sidebar-nav-button {
    @apply text-center py-4;
}
</style>