<template>
  <div>
    <h1>swr</h1>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch(
  "https://random-data-api.com/api/v2/users?size=1"
);
</script>

<style scoped></style>
