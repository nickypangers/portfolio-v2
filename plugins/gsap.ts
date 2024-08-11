import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);
}

export default defineNuxtPlugin({
    name: 'gsap',
    async setup(nuxtApp) {
        nuxtApp.vueApp.use(gsap);
        nuxtApp.provide('gsap', gsap);
    },
})
