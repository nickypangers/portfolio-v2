<script setup lang="ts">
interface Props {
    theme: 'primary' | 'secondary',
}

const props = defineProps<Props>();
</script>

<template>
    <button class="rounded-xl relative px-4 md:px-8 py-2 tracking-wide"
        :class="{ primary: props.theme == 'primary', secondary: props.theme == 'secondary' }">
        <slot />
    </button>
</template>

<style scoped>
.primary {
    @apply bg-[--bg-accent] text-[--bg-primary] border-2 border-[--bg-primary];
}


.primary:hover {
    @apply bg-[--bg-primary] text-[--bg-accent] border-2 border-[--bg-accent];
}

.secondary {
    @apply bg-[--bg-primary] text-[--bg-accent] border-2 border-[--bg-accent];
}

.secondary:hover {
    @apply bg-[--bg-accent] text-[--bg-primary];
}
</style>