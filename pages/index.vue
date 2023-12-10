<script setup>
const color = useColorMode();


function toggleColorMode() {
    color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <h1>Nuxt</h1>
    <button @click="toggleColorMode">{{ color.value }}</button>
</template>

