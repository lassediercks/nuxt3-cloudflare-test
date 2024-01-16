<template>
  <div>
    <h1>nossr</h1>

    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/hello");
</script>

<style scoped></style>
