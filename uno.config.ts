import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
    shortcuts: {
        // global style in here
    },
    presets: [
        presetUno(),
        presetIcons()
    ]
})