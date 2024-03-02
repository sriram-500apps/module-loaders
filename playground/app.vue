<template>
  <div id="app">
    <!-- Your other content goes here -->
    <BLoaders :is-loading="loading" class="loader-container" size="100px" ></BLoaders>
    <BLoaders text="Loading" :is-loading="loading" class="loader-container" type="dots" size="100px"></BLoaders>
    <BLoaders text="It's happening" :is-loading="loading" class="loader-container" type="circle" size="100px"></BLoaders>
  </div>
</template>

<script lang="ts" setup>
const loading = ref(false)

// Simulate loading, you can replace this with your actual loading logic
setTimeout(() => {
  loading.value = true
}, 1000)
</script>
<style scoped lang="postcss">
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
  }
</style>
