<template>
    <nav class="navbar">
        <div class="logo">
            <span class="logo-text">Nixon Pang</span>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item">
                <NuxtLink to="#">
                    <Icon name="mdi-light:home" />
                    <span>Home</span>
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="#">
                    <Icon name="mdi:github" />
                    <span>Github</span>
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="#">
                    <Icon name="mdi:contact" />
                    <span>Contact</span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.logo {
    @apply h-20 flex items-center justify-center capitalize;
}

.navbar {
    @apply w-20 h-screen fixed bg-[--bg-primary] hover:w-64 duration-200 ease-linear transition-all;
}

.navbar-nav {
    @apply list-none p-0 m-0 flex flex-col items-center h-full;
}


.nav-item {
    @apply w-full;
}

.nav-item:last-child {
    @apply mt-auto;
}

span {
    @apply hidden ml-4;
}

.navbar:hover span {
    @apply block;
}

a {
    @apply flex items-center h-20 text-[--text-primary] no-underline duration-[--transition-speed] grayscale opacity-70 relative;
}

svg {
    @apply min-w-8 my-0 mx-6 duration-[--transition-speed];
}

a:hover {
    @apply grayscale-0 opacity-100 text-[--text-secondary];
}
</style>