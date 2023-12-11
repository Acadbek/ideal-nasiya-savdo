<script setup>
const color = useColorMode();
const toggleColorMode = () => color.value = color.value === 'dark' ? 'light' : 'dark'

</script>

<template>
    <header container flex mx-auto py-3>
        <NuxtLink to="/" title="Ideal-Nasiya">
            <TheLogo h-3.3em />
        </NuxtLink>
        <div flex-auto />
        <button @click="toggleColorMode" p-2 rounded hover:bg-active>
            <div i-carbon-moon dark:i-carbon-sun text-2xl></div>
        </button>
        <n-button>Default</n-button>
    </header>
</template>