import { defineConfig, presetIcons, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
    shortcuts: {
        'pr-color': '#0D6EFD',
    },
    presets: [
        presetUno(),
        presetIcons(),
        presetAttributify()
    ]
})