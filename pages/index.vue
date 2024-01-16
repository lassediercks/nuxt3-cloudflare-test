<template>
  <div>
    <h1>home</h1>

    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("https://dummyjson.com/products/9");
</script>

<style scoped></style>
