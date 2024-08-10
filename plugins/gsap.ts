import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin({
    name: 'gsap',
    async setup(nuxtApp) {
        nuxtApp.vueApp.use(gsap);
        nuxtApp.provide('gsap', gsap);
    },
})
