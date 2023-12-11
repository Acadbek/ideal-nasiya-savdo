import { NButton, create } from 'naive-ui'

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        const naive = create({
            components: [NButton]
        })
        nuxtApp.vueApp.use(naive)
    }
})
