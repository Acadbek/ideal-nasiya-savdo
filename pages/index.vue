<script setup>
const color = useColorMode();

function toggleColorMode() {
    color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <button @click="toggleColorMode">
        <div class='i-carbon-moon dark:i-carbon-sun'></div>
    </button>
</template>

